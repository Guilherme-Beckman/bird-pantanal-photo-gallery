package com.projects.bird_pantanal_photo_gallery.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;

public class InvalidCredentialsException extends RestException {
	
	private static final long serialVersionUID = 1L;
	@Override
	public ProblemDetail toProblemDetail() {
		var pb = ProblemDetail.forStatus(HttpStatus.BAD_REQUEST);
		pb.setTitle("Invalid email or password.");
		return pb;
	}
}
