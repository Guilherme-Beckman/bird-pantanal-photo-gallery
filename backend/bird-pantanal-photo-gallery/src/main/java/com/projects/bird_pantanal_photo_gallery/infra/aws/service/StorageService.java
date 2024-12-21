package com.projects.bird_pantanal_photo_gallery.infra.aws.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


@Service
public class StorageService {

    private final S3Client s3Client;
    
    @Value("${amazonProperties.bucketName}")
    private String bucketName;

    public StorageService(S3Client s3Client) {
        this.s3Client = s3Client;
    }

    public String uploadFile(MultipartFile multipartFile) {
        String fileName = System.currentTimeMillis() + "_" + multipartFile.getOriginalFilename();
        Path tempFile = null;

        try {
            // Cria arquivo temporário
            tempFile = Files.createTempFile("temp", multipartFile.getOriginalFilename());
            Files.write(tempFile, multipartFile.getBytes());

            PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                    .bucket(bucketName)
                    .key(fileName)
                    .acl("public-read") // Controle de acesso público
                    .build();

            // Envia arquivo para o S3
            PutObjectResponse response = s3Client.putObject(putObjectRequest, RequestBody.fromFile(tempFile));

            // Retorna a URL pública do arquivo no S3
            return String.format("https://%s.s3.amazonaws.com/%s", bucketName, fileName);

        } catch (IOException e) {
            throw new RuntimeException("Erro ao processar o arquivo para upload.", e);
        } finally {
            // Exclui arquivo temporário
            if (tempFile != null) {
                try {
                    Files.delete(tempFile);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    public byte[] downloadFile(String fileName) {
        GetObjectRequest getObjectRequest = GetObjectRequest.builder()
                .bucket(bucketName)
                .key(fileName)
                .build();

        // Baixa o arquivo como bytes
        try {
            return s3Client.getObjectAsBytes(getObjectRequest).asByteArray();
        } catch (Exception e) {
            throw new RuntimeException("Erro ao baixar o arquivo: " + fileName, e);
        }
    }

    public String deleteFile(String fileName) {
        DeleteObjectRequest deleteObjectRequest = DeleteObjectRequest.builder()
                .bucket(bucketName)
                .key(fileName)
                .build();

        s3Client.deleteObject(deleteObjectRequest);
        return "Deleted file: " + fileName;
    }
}
