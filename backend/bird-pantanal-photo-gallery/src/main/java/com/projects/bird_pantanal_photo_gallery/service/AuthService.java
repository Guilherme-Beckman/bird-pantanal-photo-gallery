package com.projects.bird_pantanal_photo_gallery.service;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.projects.bird_pantanal_photo_gallery.dto.LoginRequestDTO;
import com.projects.bird_pantanal_photo_gallery.dto.RegisterRequestDTO;
import com.projects.bird_pantanal_photo_gallery.dto.ResponseDTO;
import com.projects.bird_pantanal_photo_gallery.exceptions.InvalidCredentialsException;
import com.projects.bird_pantanal_photo_gallery.exceptions.UserAlreadyExists;
import com.projects.bird_pantanal_photo_gallery.exceptions.UserNotFoundException;
import com.projects.bird_pantanal_photo_gallery.infra.security.TokenService;
import com.projects.bird_pantanal_photo_gallery.model.UserModel;
import com.projects.bird_pantanal_photo_gallery.repository.UserRepository;
@Service
public class AuthService {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private TokenService tokenService;

	public ResponseDTO login(LoginRequestDTO body) {
        UserModel userModel = this.userRepository.findByEmail(body.email()).orElseThrow(UserNotFoundException::new);
        if(passwordEncoder.matches(body.password(), userModel.getPassword())) {
            String token = this.tokenService.generateToken(userModel);
            return new ResponseDTO(userModel.getName(), token);
        }
        throw new InvalidCredentialsException();
	}
	
	public ResponseDTO register(RegisterRequestDTO body) {
        Optional<UserModel> userModel= this.userRepository.findByEmail(body.email());

        if(userModel.isEmpty()) {
        	UserModel newUser = new UserModel();
            newUser.setPassword(passwordEncoder.encode(body.password()));
            newUser.setEmail(body.email());
            newUser.setName(body.name());
            this.userRepository.save(newUser);

            String token = this.tokenService.generateToken(newUser);
            return new ResponseDTO(newUser.getName(), token);
        }
        throw new UserAlreadyExists();
	}
}
