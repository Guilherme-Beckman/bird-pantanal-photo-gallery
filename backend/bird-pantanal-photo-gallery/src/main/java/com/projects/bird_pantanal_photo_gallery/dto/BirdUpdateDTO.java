package com.projects.bird_pantanal_photo_gallery.dto;

import jakarta.validation.constraints.NotBlank;

public record BirdUpdateDTO(
		@NotBlank(message = "name must not be blank")
		String name,
		@NotBlank(message = "scientificName must not be blank")
		String scientificName,
		@NotBlank(message = "description must not be blank")
		String description, 
		@NotBlank(message = "predominantColor must not be blank")
		String predominantColor) {

}
