package com.projects.bird_pantanal_photo_gallery.exceptions;

import org.springframework.http.ProblemDetail;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;


@RestControllerAdvice
public class RestExceptionHandler {
	
	@ExceptionHandler(RestException.class)
	public ProblemDetail handleAuthException(RestException e) {
		return e.toProblemDetail();
	}
}
