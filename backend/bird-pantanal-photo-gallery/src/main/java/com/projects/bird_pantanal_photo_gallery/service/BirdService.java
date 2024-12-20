package com.projects.bird_pantanal_photo_gallery.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projects.bird_pantanal_photo_gallery.model.BirdModel;
import com.projects.bird_pantanal_photo_gallery.model.dto.BirdDTO;
import com.projects.bird_pantanal_photo_gallery.repository.BirdRepository;

@Service
public class BirdService {
	@Autowired
	private BirdRepository birdRepository;
	
	public BirdModel createBird(BirdDTO birdDTO) {
		BirdModel newBird = new BirdModel(birdDTO);
		return this.birdRepository.save(newBird);
	}
}
