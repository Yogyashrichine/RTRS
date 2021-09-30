package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "category_tbl")
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer cateId;	
	@Column(length = 30, unique = true)
	private String categoryName;
	
	public Category() {
		
	}	

	public Category(Integer cateId) {
		super();
		this.cateId = cateId;
	}

	//@JsonCreator   	@JsonProperty("categoryName")
	public Category( String categoryName) {
		super();
		this.categoryName = categoryName;
	}
	public Integer getCateId() {
		return cateId;
	}
	public void setCateId(Integer cateId) {
		this.cateId = cateId;
	}
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	@Override
	public String toString() {
		return "Category [cateId=" + cateId + ", categoryName=" + categoryName + "]";
	}
	
}
