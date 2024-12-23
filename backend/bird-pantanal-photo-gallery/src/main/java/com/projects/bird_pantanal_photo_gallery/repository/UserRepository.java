package com.projects.bird_pantanal_photo_gallery.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projects.bird_pantanal_photo_gallery.model.UserModel;

public interface UserRepository extends JpaRepository<UserModel, UUID>{

}
