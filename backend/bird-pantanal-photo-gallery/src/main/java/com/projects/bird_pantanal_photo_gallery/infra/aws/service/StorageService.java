package com.projects.bird_pantanal_photo_gallery.infra.aws.service;

import java.io.File;
import java.io.FileOutputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.PutObjectRequest;

@Service
public class StorageService {
	@Value("${amazonProperties.bucketName}")
	private String bucketName;
	@Autowired
	private AmazonS3 s3Client;
	public String uploadFile(MultipartFile multipartFile) {
		File fileObject = this.convertMultipartFileToFile(multipartFile);
		String fileName =  System.currentTimeMillis()+"_"+multipartFile.getOriginalFilename();
		s3Client.putObject(new PutObjectRequest(bucketName, fileName, fileObject));
		fileObject.delete();
		return "File Uploaded:"+fileName;
	}
	private File convertMultipartFileToFile(MultipartFile multipartFile) {
		File convertedFile = new File(multipartFile.getOriginalFilename());
		try (FileOutputStream fos = new FileOutputStream(convertedFile)){
			fos.write(multipartFile.getBytes());
		} catch (Exception e) {
			System.out.println("Throw Exception");;
		}
		return convertedFile;
	}
}
