package com.projects.bird_pantanal_photo_gallery.model;

import java.io.Serializable;
import com.projects.bird_pantanal_photo_gallery.model.dto.BirdDTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "birds")
@Data
@NoArgsConstructor
public class BirdModel implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String scientificName;
	private String description;
	private String predominantColor;

	@Column(name = "image_url")
	private String imageUrl;

	public BirdModel(BirdDTO birdDTO) {
		this.name = birdDTO.name();
		this.scientificName = birdDTO.scientificName();
		this.description = birdDTO.description();
		this.predominantColor = birdDTO.predominantColor();
	}



}
