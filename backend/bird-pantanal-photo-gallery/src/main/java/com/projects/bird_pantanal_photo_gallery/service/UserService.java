package com.projects.bird_pantanal_photo_gallery.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projects.bird_pantanal_photo_gallery.dto.UserDTO;
import com.projects.bird_pantanal_photo_gallery.model.UserModel;
import com.projects.bird_pantanal_photo_gallery.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public UserModel createUser(UserDTO userDTO) {
		UserModel newUser = new UserModel(userDTO);
		return this.userRepository.save(newUser);
	}
}
