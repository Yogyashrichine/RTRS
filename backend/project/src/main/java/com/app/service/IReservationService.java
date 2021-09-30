package com.app.service;

import com.app.dto.CreateReservationRequest;
import com.app.pojos.Reservation;

public interface IReservationService {
	Reservation createReservation(CreateReservationRequest request);	

}
