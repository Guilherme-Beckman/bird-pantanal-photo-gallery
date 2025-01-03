package com.projects.bird_pantanal_photo_gallery.exceptions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ProblemDetail;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;


@RestControllerAdvice
public class RestExceptionHandler {
	@Autowired
	private ValidationException validationException;
	
	@ExceptionHandler(RestException.class)
	public ProblemDetail handleAuthException(RestException e) {
		return e.toProblemDetail();
	}
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ProblemDetail handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
		return this.validationException.toProblemDetail(e);
	}
}
