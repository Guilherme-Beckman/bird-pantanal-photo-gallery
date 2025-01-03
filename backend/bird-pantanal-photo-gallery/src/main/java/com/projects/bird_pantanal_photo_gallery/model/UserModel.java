package com.projects.bird_pantanal_photo_gallery.model;

import java.util.UUID;

import com.projects.bird_pantanal_photo_gallery.dto.UserDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
public class UserModel {
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private UUID id;
	private String name;
	private String email;
	private String password;
	
	public UserModel (UserDTO userDTO) {
		this.name = userDTO.name();
		this.email = userDTO.email();
		this.password = userDTO.password();
	}
	
}
