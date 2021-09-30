package com.app.dto;

public class ResponseDTO {
	private String message;
public ResponseDTO() {		
	System.out.println("in the con of "+getClass().getName());
	}
public ResponseDTO(String message) {
	super();
	this.message = message;
}
public String getMessage() {
	return message;
}
public void setMessage(String message) {
	this.message = message;
}	
}
