package com.projects.bird_pantanal_photo_gallery.service;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

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
	public List<BirdModel> getAllBirds(){
		return this.birdRepository.findAll();
	}
	public void deleteBirdById(Long id) {
		BirdModel bird = this.birdRepository.findById(id).orElseThrow();
		String imageUrl = bird.getImageUrl();
		try {
			URL url = new URL(imageUrl);
			String fileName = url.getPath();
			fileName = fileName.substring(fileName.lastIndexOf("/"+1));
			this.storageService.deleteFile(fileName);
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
		this.birdRepository.deleteById(id);
		
	}
}
