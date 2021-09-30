package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "menu_tbl")
public class Menu {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer menuId;
	@Column(length = 30, unique = true)
	private String menuName;
	@ManyToOne //many to one multiplicity
	@JoinColumn(name = "category_id") //specifying FK col name
	private  Category category;
	@NotNull
	private double price;
	
	public Menu() {		
	}
	
	//@JsonCreator  @JsonProperty("menuName") 
	public Menu(String menuName,  Category category,  double price) {
		super();
		this.menuName = menuName;
		this.category = category;
		this.price = price;
	}
	public Integer getMenuId() {
		return menuId;
	}
	public void setMenuId(Integer menuId) {
		this.menuId = menuId;
	}
	public String getMenuName() {
		return menuName;
	}
	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "Menu [menuId=" + menuId + ", menuName=" + menuName + ", category=" + category + ", price=" + price
				+ "]";
	}
	
	
	
	

}
