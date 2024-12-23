package com.projects.bird_pantanal_photo_gallery.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;

public class ConverMultiPartFileToFileException extends RestException {

	private static final long serialVersionUID = 1L;

	@Override
	public ProblemDetail toProblemDetail() {
		var pb = ProblemDetail.forStatus(HttpStatus.INTERNAL_SERVER_ERROR);
		pb.setTitle("Error while try to convert multi part file");
		return pb;
	}

	
}
