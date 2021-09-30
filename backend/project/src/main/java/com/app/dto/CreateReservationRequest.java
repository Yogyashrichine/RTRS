package com.app.dto;

import java.time.LocalDateTime;

import org.springframework.format.annotation.DateTimeFormat;

public class CreateReservationRequest {

	private int userId;
	private int noOfPersons;
// @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat(pattern = "dd-MM-yyyy HH:mm:ss")
	private LocalDateTime reservationTime;
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getNoOfPersons() {
		return noOfPersons;
	}
	public void setNoOfPersons(int noOfPersons) {
		this.noOfPersons = noOfPersons;
	}
	public LocalDateTime getReservationTime() {
		return reservationTime;
	}
	public void setReservationTime(LocalDateTime reservationTime) {
		this.reservationTime = reservationTime;
	}
	@Override
	public String toString() {
		return "CreateReservationRequest [userId=" + userId + ", noOfPersons=" + noOfPersons + ", reservationTime="
				+ reservationTime + "]";
	}
	


	
	
}
