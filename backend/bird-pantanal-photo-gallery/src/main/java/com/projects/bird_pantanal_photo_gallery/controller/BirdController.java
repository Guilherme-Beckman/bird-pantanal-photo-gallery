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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.projects.bird_pantanal_photo_gallery.model.BirdModel;
import com.projects.bird_pantanal_photo_gallery.model.dto.BirdDTO;
import com.projects.bird_pantanal_photo_gallery.service.BirdService;

@RestController
@RequestMapping("/birds")
public class BirdController {

    @Autowired
    private BirdService birdService;  

    @PostMapping("/create")
    public ResponseEntity<BirdModel> createBird(
            @RequestPart("bird") BirdDTO birdDTO, 
            @RequestPart("image") MultipartFile multipartFile) { 
            BirdModel newBird = birdService.createBird(birdDTO, multipartFile);
            return new ResponseEntity<>(newBird, HttpStatus.CREATED); 
    }
    @GetMapping("/all")
    public ResponseEntity<List<BirdModel>> getAllBirds(){
        try {
            List<BirdModel> birds = birdService.getAllBirds();
            return new ResponseEntity<>(birds, HttpStatus.FOUND); 
        } catch (Exception e) {
        	e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/delete/{id}")
    public void deleteBirdById(@PathVariable Long id){
        try {
            this.birdService.deleteBirdById(id);
        } catch (Exception e) {
        	e.printStackTrace();
        }
    }
	@GetMapping("/download/{id}")
	public ResponseEntity<byte[]> downloadFile(@PathVariable Long id) {
		byte[] fileContent = this.birdService.downloadFile(id);

		if (fileContent == null) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}

		return ResponseEntity.ok().contentType(MediaType.APPLICATION_OCTET_STREAM)
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + id + "\"").body(fileContent);
	}
}
