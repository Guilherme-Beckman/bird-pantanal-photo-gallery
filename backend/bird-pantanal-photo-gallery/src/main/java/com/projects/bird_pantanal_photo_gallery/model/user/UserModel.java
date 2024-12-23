package com.projects.bird_pantanal_photo_gallery.model.user;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
public class UserModel {
	private String name;
	private String email;
	private String password;
	
	
}
