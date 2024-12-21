package com.projects.bird_pantanal_photo_gallery.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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

        try {
            BirdModel newBird = birdService.createBird(birdDTO, multipartFile);
            return new ResponseEntity<>(newBird, HttpStatus.CREATED); 
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
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
}
