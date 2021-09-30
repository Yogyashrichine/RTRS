package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "user_tbl")
public class User {	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer userId;
	@Column(length = 30)
	private String firstName;
	@Column(length = 30)
	private String lastName;
	@Column(length = 20,unique = true)
	@NotNull
	private String email;
	@Column(length = 30)
	@NotNull
	private String password;
	@Column(length = 30)
	private String city;
	@Column(length = 30)
	private String country;
	@Column(length = 30, name = "zip_code")
	private String zipCode;
	@Column(length = 10, unique = true, name = "phone_no")
	private String phoneNo;
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private UserRole role;
	
	public User() {
		// TODO Auto-generated constructor stub
	}

	public User( String firstName, String lastName, @NotNull String email, @NotNull String password,
			String city, String country, String zipCode, String phoneNo, UserRole role ) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.city = city;
		this.country = country;
		this.zipCode = zipCode;
		this.phoneNo = phoneNo;
		this.role=role;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	
	

	public UserRole getRole() {
		return role;
	}

	public void setRole(UserRole role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", password=" + password + ", city=" + city + ", country=" + country + ", zipCode=" + zipCode
				+ ", phoneNo=" + phoneNo +  ", role=" + role +"]";
	}

}
