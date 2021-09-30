package com.app.pojos;

/* import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "order_tbl")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int orderId;		
	@OneToOne
	private ResTable restable;
	@OneToOne
	private User  user;
	@NotNull
	private int quantity;
	private double total;
	private double grandTotal;
	public Order() {
		// TODO Auto-generated constructor stub
	}
	public Order( ResTable restable, User user, @NotNull int quantity, double total,
			double grandTotal) {
		super();
		this.restable = restable;
		this.user = user;
		this.quantity = quantity;
		this.total = total;
		this.grandTotal = grandTotal;
	}
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public ResTable getResTable() {
		return restable;
	}
	public void setResTable(ResTable restable) {
		this.restable = restable;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public double getTotal() {
		return total;
	}
	public void setTotal(double total) {
		this.total = total;
	}
	public double getGrandTotal() {
		return grandTotal;
	}
	public void setGrandTotal(double grandTotal) {
		this.grandTotal = grandTotal;
	}
	@Override
	public String toString() {
		return "Order [orderId=" + orderId + ", restable=" + restable + ", user=" + user + ", quantity=" + quantity + ", total=" + total + ", grandTotal=" + grandTotal + "]";
	}	

}
*/
