package com.projects.bird_pantanal_photo_gallery.infra.aws.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.projects.bird_pantanal_photo_gallery.exceptions.ConverMultiPartFileToFileException;
import com.projects.bird_pantanal_photo_gallery.exceptions.DownloadFileException;

import software.amazon.awssdk.core.ResponseInputStream;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.DeleteObjectRequest;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;
import software.amazon.awssdk.services.s3.model.GetObjectResponse;
import software.amazon.awssdk.services.s3.model.ObjectCannedACL;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.utils.IoUtils;

@Service
public class StorageService {
	@Value("${amazonProperties.bucketName}")
	private String bucketName;
	@Autowired
	private S3Client s3Client;

	public String uploadFile(MultipartFile multipartFile) {
		File fileObject = this.convertMultipartFileToFile(multipartFile);
		String fileName = UUID.randomUUID().toString();
		PutObjectRequest objectRequest = PutObjectRequest.builder().bucket(bucketName).key(fileName)
				.acl(ObjectCannedACL.PUBLIC_READ).build();
		s3Client.putObject(objectRequest, RequestBody.fromFile(fileObject));
		fileObject.delete();
		return s3Client.utilities().getUrl(builder -> builder.bucket(bucketName).key(fileName)).toString();
	}

	public byte[] downloadFile(String fileName) {
		GetObjectRequest getObjectRequest = GetObjectRequest.builder().bucket(bucketName).key(fileName).build();

		try (ResponseInputStream<GetObjectResponse> s3Object = s3Client.getObject(getObjectRequest);) {
			InputStream inputStream = s3Object;
			byte[] content = IoUtils.toByteArray(inputStream);
			return content;
		} catch (IOException e) {
			throw new DownloadFileException();
		}
	}

	public String deleteFile(String fileName) {
		DeleteObjectRequest deleteObjectRequest= DeleteObjectRequest.builder()
				.bucket(bucketName)
				.key(fileName)
				.build();
		s3Client.deleteObject(deleteObjectRequest);
		return "Deleted file:" + fileName;
	}

	private File convertMultipartFileToFile(MultipartFile multipartFile) {
		File convertedFile = new File(multipartFile.getOriginalFilename());
		try (FileOutputStream fos = new FileOutputStream(convertedFile)) {
			fos.write(multipartFile.getBytes());
		} catch (Exception e) {
			throw new ConverMultiPartFileToFileException();
		}
		return convertedFile;
	}

}
