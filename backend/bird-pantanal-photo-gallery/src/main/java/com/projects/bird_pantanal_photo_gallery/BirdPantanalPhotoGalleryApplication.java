package com.projects.bird_pantanal_photo_gallery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class BirdPantanalPhotoGalleryApplication {

	public static void main(String[] args) {
		SpringApplication.run(BirdPantanalPhotoGalleryApplication.class, args);
	}

}
