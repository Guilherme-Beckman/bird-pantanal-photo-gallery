package com.projects.bird_pantanal_photo_gallery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.projects.bird_pantanal_photo_gallery.dto.BirdDTO;
import com.projects.bird_pantanal_photo_gallery.exceptions.ImageIsEmptyException;
import com.projects.bird_pantanal_photo_gallery.model.BirdModel;
import com.projects.bird_pantanal_photo_gallery.service.BirdService;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

@RestController
@RequestMapping("/birds")
public class BirdController {
	private static final String idMessage = "id must not be blank, null or empty";
	@Autowired
	private BirdService birdService;

	@PostMapping("/create")
	public ResponseEntity<BirdModel> createBird(@Valid @RequestPart("bird") BirdDTO birdDTO,
			@RequestPart("image") MultipartFile multipartFile) {
		if (multipartFile.isEmpty()) {
			throw new ImageIsEmptyException();
		}
		BirdModel newBird = birdService.createBird(birdDTO, multipartFile);
		return new ResponseEntity<>(newBird, HttpStatus.CREATED);
	}

	@GetMapping("/all")
	public ResponseEntity<List<BirdModel>> getAllBirds() {
		List<BirdModel> birds = birdService.getAllBirds();
		return new ResponseEntity<>(birds, HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Void> deleteBirdById(@NotNull(message = idMessage) @PathVariable Long id) {
		this.birdService.deleteBirdById(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}

	@GetMapping("/download/{id}")
	public ResponseEntity<byte[]> downloadFile(@NotNull(message = idMessage) @PathVariable Long id) {
		byte[] fileContent = this.birdService.downloadFile(id);
		return ResponseEntity.ok().contentType(MediaType.APPLICATION_OCTET_STREAM)
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + id + "\"").body(fileContent);
	}
}
