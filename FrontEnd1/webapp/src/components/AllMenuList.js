import axios from "axios";
import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import Admin from "./Admin";

const AllMenuList = () => {
    
    useEffect(() => {
        document.title="AllMenuList";
      }, []);

     //function to call server
    const getAllMenusFromServer = () => {
    
        axios.get(`${base_url}/menus`).then(
            (response) =>{
                //for success
                toast.success("menus has been loaded");
                setMenus(response.data);
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
        getAllMenusFromServer();
    }, []);

	const [menus, setMenus] = useState ([ ])


    return(
    <div>     
         <Admin/> 
        <div class="container">	
          <ol class="breadcrumb w3l-crumbs">
          <li><a href="/"><i class="fa fa-home"></i> Home</a></li> 
          <li class="active">Menus</li>
          </ol>
          <h3> <a style={{ marginLeft: 10}} href="/Admin">back</a></h3>
        <br/>
        <h3>  <a href="/AddMenu"> Add New Menu</a></h3> 
        </div>
        <div class="wthree-menu">  
         <img src="images/i2.jpg" class="w3order-img" alt=""/>
         <div class="container">
          <h3 class="w3ls-title">All Menus</h3>
          <p class="w3lsorder-text">List of Menus are as follows</p>
          <div class="menu-agileinfo">  

          {
                          menus.map(item => (                               
                              <div class="col-md-4 col-sm-4 col-xs-6 menu-w3lsgrids">
                                <a> {item.menuName}                      
                                   <div>Price : {item.price}Rs</div> 
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
export default AllMenuList;

