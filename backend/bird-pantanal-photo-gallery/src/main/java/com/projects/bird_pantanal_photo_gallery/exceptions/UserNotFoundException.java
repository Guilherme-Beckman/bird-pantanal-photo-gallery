package com.projects.bird_pantanal_photo_gallery.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;

public class UserNotFoundException extends RestException{

	private static final long serialVersionUID = 1L;

	@Override
	public ProblemDetail toProblemDetail() {
		var pb = ProblemDetail.forStatus(HttpStatus.BAD_REQUEST);
		pb.setTitle("User not fond");
		pb.setDetail("User  don't exits in the database");
		return pb;
	}
}
