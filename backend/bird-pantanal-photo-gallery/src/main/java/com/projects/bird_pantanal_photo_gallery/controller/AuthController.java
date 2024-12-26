package com.projects.bird_pantanal_photo_gallery.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projects.bird_pantanal_photo_gallery.dto.LoginRequestDTO;
import com.projects.bird_pantanal_photo_gallery.dto.ResponseDTO;
import com.projects.bird_pantanal_photo_gallery.service.AuthService;

@RestController
@RequestMapping("/auth")
public class AuthController {
	@Autowired
	private AuthService authService;
    @CrossOrigin(origins = "http://localhost:4200") 
    @PostMapping("/login")
    public ResponseEntity<ResponseDTO> login(@RequestBody LoginRequestDTO body){
    	ResponseDTO responseDTO = this.authService.login(body);
        return new ResponseEntity<>(responseDTO, HttpStatus.OK);
    }
    /*
    @PostMapping("/register")
    public ResponseEntity<ResponseDTO> register(@RequestBody RegisterRequestDTO body){
    	ResponseDTO responseDTO = this.authService.register(body);
        return new ResponseEntity<>(responseDTO, HttpStatus.CREATED);
    }*/
}