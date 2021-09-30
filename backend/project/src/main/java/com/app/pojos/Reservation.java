package com.app.pojos;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "reservation_tbl")
public class Reservation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int reservationId;	
	private int numberOfseates;
	private boolean booked;
//	@OneToOne
//	private ResTable restable;
	@OneToOne
	private User  user;
	private LocalDateTime reserveDate;
	
	public boolean isBooked() {
		return booked;
	}
	public Reservation() {
		
	}
	public int getReservationId() {
		return reservationId;
	}
	public void setReservationId(int reservationId) {
		this.reservationId = reservationId;
	}
	public int getNumberOfseates() {
		return numberOfseates;
	}
	public void setNumberOfseates(int numberOfseates) {
		this.numberOfseates = numberOfseates;
	}
//	public ResTable getRestable() {
//		return restable;
//	}
//	public void setRestable(ResTable restable) {
//		this.restable = restable;
//	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}

	public LocalDateTime getReserveDate() {
		return reserveDate;
	}
	public void setReserveDate(LocalDateTime reserveDate) {
		this.reserveDate = reserveDate;
	}
	public void setBooked(boolean booked) {
		this.booked = booked;
	}
	@Override
	public String toString() {
		return "Reservation [reservationId=" + reservationId + ", numberOfseates=" + numberOfseates + ", booked="
				+ booked + ", reserveDate=" + reserveDate +" user id "+user.getUserId();
	}
	
	
	
	
}
