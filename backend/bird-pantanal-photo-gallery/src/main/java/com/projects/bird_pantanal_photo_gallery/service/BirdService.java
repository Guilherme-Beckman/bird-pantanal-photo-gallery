package com.projects.bird_pantanal_photo_gallery.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.projects.bird_pantanal_photo_gallery.infra.aws.service.StorageService;
import com.projects.bird_pantanal_photo_gallery.model.BirdModel;
import com.projects.bird_pantanal_photo_gallery.model.dto.BirdDTO;
import com.projects.bird_pantanal_photo_gallery.repository.BirdRepository;

@Service
public class BirdService {
	@Autowired
	private BirdRepository birdRepository;
	@Autowired
	private StorageService storageService;
	
	public BirdModel createBird(BirdDTO birdDTO, MultipartFile multipartFile) {
		String imageUrl = this.storageService.uploadFile(multipartFile);
		BirdModel newBird = new BirdModel(birdDTO);
		newBird.setImageUrl(imageUrl);
		return this.birdRepository.save(newBird);
	}
}
