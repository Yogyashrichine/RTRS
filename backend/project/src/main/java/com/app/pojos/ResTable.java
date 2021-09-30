package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "table_tbl")
public class ResTable {	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int tableId;	
	@NotNull
	private int numberOfSeats;
	
	ResTable(){		
	}

	public ResTable( int numberOfSeats) {
		super();
		this.numberOfSeats = numberOfSeats;
	}

	public int getTableId() {
		return tableId;
	}

	public void setTableId(int tableId) {
		this.tableId = tableId;
	}

	public int getNumberOfSeats() {
		return numberOfSeats;
	}

	public void setNumberOfSeats(int numberOfSeats) {
		this.numberOfSeats = numberOfSeats;
	}

	@Override
	public String toString() {
		return "Table [tableId=" + tableId + ", numberOfSeats=" + numberOfSeats + "]";
	}
	

}
