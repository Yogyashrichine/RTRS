import axios from "axios";
import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import Admin from "./Admin";


const AllReservationList = () => {
    
    useEffect(() => {
        document.title="AllReservationList";
      }, []);

     //function to call server
    const getAllReservationFromServer = () => {    
        axios.get(`${base_url}/reservations`).then(
            (response) =>{
                //for success
                toast.success("reservations has been loaded");
                setReservations(response.data);
            },
            (error)=>{
                //for error
                console.log(error);
                toast.error("something went wrong");
            }
        );        
    };

    //calling  loading course function 
    useEffect(() => {
        getAllReservationFromServer();
    }, []);

	const [reservations, setReservations] = useState ([ ])

    return(
        <div>    
             <Admin/>       
        <div class="container">	
        <ol class="breadcrumb w3l-crumbs">
        <li><a href="/"><i class="fa fa-home"></i> Home</a></li> 
        <li class="active">Reservations</li>
        </ol>
        <h3> <a style={{ marginLeft: 10}} href="/Admin">back</a></h3>
        <br/>      
      </div>
      <div class="wthree-menu">  
      <img src="images/i2.jpg" class="w3order-img" alt=""/>
      <div class="container">
        <h3 class="w3ls-title">All Reservations</h3>
        <p class="w3lsorder-text">List of Reservations List are as follows</p>        
        <div class="menu-agileinfo">  

     {
                        reservations.map(item => (
                                <div class="col-md-4 col-sm-4 col-xs-6 menu-w3lsgrids"> 
                                    
                                <a>                     
                                   <div>date : {item.reserveDate}</div> 
                                   <div>noOfSeats : {item.numberOfseates}</div> 
                                   <div>User details : 
                                   <div>firstName: {item.user.firstName}</div> 
                                   <div>lastName : {item.user.lastName}</div> 
                                   <div>email : {item.user.email}</div> 
                                   <div>phoneNo : {item.user.phoneNo}</div> 
                                   </div>
                                </a>               
                                </div>
          ))
        }	    

            <div class="clearfix"> </div> 
        </div> 			
    </div> 
</div>
</div>   
);
};

export default AllReservationList;

