package com.projects.bird_pantanal_photo_gallery.infra.aws.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.AwsCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.S3Configuration;


@Configuration
public class StorageConfig {
	@Value("${amazonProperties.region}")
	private String region;
	
	@Value("${amazonProperties.accessKey}")
	private String accessKey;
	@Value("${amazonProperties.secretKey}")
	private String secretKey;
	@Value("${amazonProperties.bucketName}")
	private String bucketName;
	@Bean
	S3Client generateS3Client() {
		AwsCredentials awsCredentials = AwsBasicCredentials.create(accessKey, secretKey);

		return S3Client.builder()
				.region(Region.of(region))
				.credentialsProvider(StaticCredentialsProvider.create(awsCredentials))
				.serviceConfiguration(S3Configuration.builder().build())
				.build();
	}
}
