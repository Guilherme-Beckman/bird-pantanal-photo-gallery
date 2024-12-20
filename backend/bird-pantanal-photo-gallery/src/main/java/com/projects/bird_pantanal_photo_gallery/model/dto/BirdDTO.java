package com.projects.bird_pantanal_photo_gallery.model.dto;

public record BirdDTO(
		String name, 
		String scientificName, 
		String description, 
		String predominantColor,
		String imageUrl) {
}
