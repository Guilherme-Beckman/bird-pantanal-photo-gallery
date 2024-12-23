package com.projects.bird_pantanal_photo_gallery.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projects.bird_pantanal_photo_gallery.model.bird.BirdModel;
@Repository
public interface BirdRepository extends JpaRepository<BirdModel, Long>{

}
