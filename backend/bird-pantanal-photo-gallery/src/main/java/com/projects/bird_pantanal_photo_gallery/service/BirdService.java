package com.projects.bird_pantanal_photo_gallery.service;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.projects.bird_pantanal_photo_gallery.dto.BirdDTO;
import com.projects.bird_pantanal_photo_gallery.dto.BirdUpdateDTO;
import com.projects.bird_pantanal_photo_gallery.exceptions.BirdNotFoundException;
import com.projects.bird_pantanal_photo_gallery.exceptions.InvalidImageUrlException;
import com.projects.bird_pantanal_photo_gallery.infra.aws.service.StorageService;
import com.projects.bird_pantanal_photo_gallery.model.BirdModel;
import com.projects.bird_pantanal_photo_gallery.repository.BirdRepository;


@Service
public class BirdService {
	@Autowired
	private BirdRepository birdRepository;
	@Autowired
	private StorageService storageService;

	private BirdModel getBirdById(Long id) {
		BirdModel bird = this.birdRepository.findById(id).orElseThrow(BirdNotFoundException::new);
		return bird;
	}

	public BirdModel createBird(BirdDTO birdDTO, MultipartFile multipartFile) {
		String imageUrl = this.storageService.uploadFile(multipartFile);
		BirdModel newBird = new BirdModel(birdDTO);
		newBird.setImageUrl(imageUrl);
		return this.birdRepository.save(newBird);
	}

	public List<BirdModel> getAllBirds() {
		return this.birdRepository.findAll();
	}

	public BirdModel updateBird(Long id, BirdUpdateDTO birdUpdateDTO, MultipartFile multipartFile) {
		BirdModel bird = this.getBirdById(id);
		if (birdUpdateDTO.name() != null) bird.setName(birdUpdateDTO.name());
		if (birdUpdateDTO.scientificName() != null) bird.setScientificName(birdUpdateDTO.scientificName());
		if (birdUpdateDTO.description() != null) bird.setDescription(birdUpdateDTO.description());
		if (birdUpdateDTO.predominantColor() != null) bird.setPredominantColor(birdUpdateDTO.predominantColor());
		
		if (multipartFile != null && !multipartFile.isEmpty()) {
			String imageUrl = this.storageService.uploadFile(multipartFile);
			this.storageService.deleteFile(this.getFileName(imageUrl));
			bird.setImageUrl(imageUrl);
		}

		return this.birdRepository.save(bird);
	}

	public void deleteBirdById(Long id) {
		BirdModel bird = this.getBirdById(id);
		String imageUrl = bird.getImageUrl();
		String fileName = this.getFileName(imageUrl);
		this.storageService.deleteFile(fileName);
		this.birdRepository.deleteById(id);

	}

	public byte[] downloadFile(Long id) {
		BirdModel bird = this.getBirdById(id);
		String imageUrl = bird.getImageUrl();
		String fileName = this.getFileName(imageUrl);
		return this.storageService.downloadFile(fileName);
	}

	private String getFileName(String imageUrl) {
		try {
			URL url = new URL(imageUrl);
			String fileName = url.getPath();
			fileName = fileName.substring(fileName.lastIndexOf("/") + 1);
			return fileName;
		} catch (MalformedURLException e) {
			throw new InvalidImageUrlException();
		}
	}

}
