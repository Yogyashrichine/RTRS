package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.ResTableRepositpory;
import com.app.dao.ReservationRepository;
import com.app.dao.UserRepository;
import com.app.dto.CreateReservationRequest;
import com.app.dto.UpdateReservationRequest;
import com.app.pojos.ResTable;
import com.app.pojos.Reservation;
import com.app.pojos.User;
import com.app.service.IReservationService;

@RestController
@CrossOrigin
public class ReservationRestController {

	@Autowired
	ResTableRepositpory restableRepo;

	@Autowired
	UserRepository userRepo;

	@Autowired
	ReservationRepository reservationRepo;
	
	@Autowired
	private IReservationService reservationService;
	
	public ReservationRestController() {
		System.out.println("in constr  "+ getClass().getName());
	}
	
	@GetMapping("/reservations")
	public List<Reservation> fetchAllReservations(){
		System.out.println("in fetch all customers" );
		return reservationRepo.findAll();
	}


	//@RequestMapping(value = "/reservations", method = RequestMethod.POST)
	@PostMapping("/reservations")
//	@Transactional
	public Reservation saveReservation(@RequestBody CreateReservationRequest request) {
//		System.out.println("Save Reservation" + request.getTableId());
//		ResTable restable = restableRepo.findById(request.getTableId()).get();

	//	User user = new User();
//		user.setFirstName(request.getUserFirstName());
//		user.setLastName(request.getUserLastName());
//		user.setEmail(request.getUserEmail());
//		user.setPhoneNo(request.getUserPhoneNo());

	//	User savedUser= userRepo.save(user);

		
		
		//reservation.setRestable(restable);
//		reservation.setUser(savedUser);
//		reservation.setBooked(true);
//
//		return reservationRepo.save(reservation);
		System.out.println("new reservaion "+request);
		return reservationService.createReservation(request);

	}

	@RequestMapping(value = "/reservations/{id}")
	public Reservation findReservation(@PathVariable("id") int id) {
		return reservationRepo.findById(id).get();

	}

	@RequestMapping(value = "/reservations", method = RequestMethod.PUT)
	public Reservation updateReservation(@RequestBody UpdateReservationRequest request) {
		Reservation reservation = reservationRepo.findById(request.getId()).get();
		reservation.setNumberOfseates(request.getNumberOfSeats());
		reservation.setBooked(request.isBooked());
		return reservationRepo.save(reservation);

	}

}
