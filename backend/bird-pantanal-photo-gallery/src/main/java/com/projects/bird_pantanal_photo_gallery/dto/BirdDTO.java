package com.projects.bird_pantanal_photo_gallery.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record BirdDTO(
        @NotNull(message = "name must not be null") 
        @NotBlank(message = "name must not be blank") 
        String name,

        @NotNull(message = "scientific name must not be null") 
        @NotBlank(message = "scientific name must not be blank") 
        String scientificName,

        @NotNull(message = "description must not be null") 
        @NotBlank(message = "description must not be blank") 
        String description,

        @NotNull(message = "predominant color must not be null") 
        @NotBlank(message = "predominant color must not be blank") 
        String predominantColor) {
}
