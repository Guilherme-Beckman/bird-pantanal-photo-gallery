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
import com.projects.bird_pantanal_photo_gallery.model.BirdModel;
import com.projects.bird_pantanal_photo_gallery.model.dto.BirdDTO;
import com.projects.bird_pantanal_photo_gallery.service.BirdService;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

@RestController
@RequestMapping("/birds")
public class BirdController {

	@Autowired
	private BirdService birdService;

	@PostMapping("/create")
	public ResponseEntity<BirdModel> createBird(@NotBlank @NotNull @NotEmpty @RequestPart("bird") BirdDTO birdDTO,
			@RequestPart("image") MultipartFile multipartFile) {
		BirdModel newBird = birdService.createBird(birdDTO, multipartFile);
		return new ResponseEntity<>(newBird, HttpStatus.CREATED);
	}

	@GetMapping("/all")
	public ResponseEntity<List<BirdModel>> getAllBirds() {
		List<BirdModel> birds = birdService.getAllBirds();
		return new ResponseEntity<>(birds, HttpStatus.FOUND);
	}

	@DeleteMapping("/delete/{id}")
	public void deleteBirdById(@NotBlank @NotNull @NotEmpty @PathVariable Long id) {
		this.birdService.deleteBirdById(id);
	}

	@GetMapping("/download/{id}")
	public ResponseEntity<byte[]> downloadFile(@NotBlank @NotNull @NotEmpty @PathVariable Long id) {
		byte[] fileContent = this.birdService.downloadFile(id);
		return ResponseEntity.ok().contentType(MediaType.APPLICATION_OCTET_STREAM)
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + id + "\"").body(fileContent);
	}
}
