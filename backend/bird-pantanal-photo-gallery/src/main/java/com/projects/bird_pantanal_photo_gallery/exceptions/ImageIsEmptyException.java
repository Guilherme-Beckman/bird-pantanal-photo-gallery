package com.projects.bird_pantanal_photo_gallery.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;

public class ImageIsEmptyException extends RestException {

	private static final long serialVersionUID = 1L;

	@Override
	public ProblemDetail toProblemDetail() {
	    var problemDetail = ProblemDetail.forStatus(HttpStatus.BAD_REQUEST);
	    problemDetail.setTitle("Invalid Image Upload");
	    problemDetail.setDetail("The uploaded image file is empty. Please provide a valid image file.");
	    return problemDetail;
	}

	
}
