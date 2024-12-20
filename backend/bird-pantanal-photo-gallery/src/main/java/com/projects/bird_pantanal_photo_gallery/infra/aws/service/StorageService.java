package com.projects.bird_pantanal_photo_gallery.infra.aws.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectInputStream;
import com.amazonaws.util.IOUtils;

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
	public byte[] downloadFile(String fileName) {
	S3Object s3Object= s3Client.getObject(bucketName, fileName);
	S3ObjectInputStream inputStream = s3Object.getObjectContent();
	try {
		byte[] content= IOUtils .toByteArray(inputStream);
		return content;
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return null;
	}
	public String deleteFile(String fileName) {
		s3Client.deleteObject(bucketName, fileName);
		return "Deleted file:"+fileName;
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
