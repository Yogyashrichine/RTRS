package com.app.dto;

public class UpdateReservationRequest {

	private int id;
	private boolean booked;
	private int numberOfSeats;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public boolean isBooked() {
		return booked;
	}
	public void setBooked(boolean booked) {
		this.booked = booked;
	}
	public int getNumberOfSeats() {
		return numberOfSeats;
	}
	public void setNumberOfSeats(int numberOfSeats) {
		this.numberOfSeats = numberOfSeats;
	}

	

}
