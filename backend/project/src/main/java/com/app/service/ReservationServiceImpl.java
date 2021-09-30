package com.app.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ReservationRepository;
import com.app.dao.UserRepository;
import com.app.dto.CreateReservationRequest;
import com.app.pojos.Reservation;
import com.app.pojos.User;
@Service
@Transactional
public class ReservationServiceImpl implements IReservationService {
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private ReservationRepository reservationRepo;

	@Override
	public Reservation createReservation(CreateReservationRequest request) {
		Reservation reservation =new Reservation();
		reservation.setBooked(true);
		reservation.setNumberOfseates(request.getNoOfPersons());
		reservation.setReserveDate((request.getReservationTime()));
		User user=userRepo.findById(request.getUserId()).orElseThrow(()->new RuntimeException("Invalid User Id!!!!!"));
		reservation.setUser(user);
	//	
		System.out.println("res  "+reservation);
	//	return reservation;
		return reservationRepo.save(reservation);
	}
	

}
