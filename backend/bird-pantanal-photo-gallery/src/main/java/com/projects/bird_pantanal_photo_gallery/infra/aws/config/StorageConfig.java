package com.projects.bird_pantanal_photo_gallery.infra.aws.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
@Configuration
public class StorageConfig {
	@Value("$amazonProperties.region")
	private String region;
	@Value("$amazonProperties.accessKey")
	private String accessKey;
	@Value("$amazonProperties.secretKey")
	private String secretKey;
	@Value("$amazonProperties.bucketName")
	private String bucketName;
	@Bean
	AmazonS3 generateS3Client() {
		AWSCredentials awsCredentials = new BasicAWSCredentials(accessKey, secretKey);
		return AmazonS3ClientBuilder.standard()
				.withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
				.withRegion(region).build();
	}
}
