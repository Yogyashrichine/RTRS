import axios from "axios";
import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AllMenus = () => {
    
    useEffect(() => {
        document.title="AllMenus";
      }, []);

     //function to call server
    const getAllMenusFromServer = () => {
        let params = new URLSearchParams(window.location.search);
        let cateId = params.get('cateId');
        console.log(cateId);
        axios.get(`${base_url}/menus/${cateId}`).then(
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
       
          <div class="container">	
		    <ol class="breadcrumb w3l-crumbs">
			<li><a href="/"><i class="fa fa-home"></i> Home</a></li> 
			<li class="active">Menus</li>
		    </ol>
	      </div>
          <div class="wthree-menu">  
		  <img src="images/i2.jpg" class="w3order-img" alt=""/>
		  <div class="container">
			<h3 class="w3ls-title">Menu</h3>
			<p class="w3lsorder-text">Here your Staple Food Varieties</p>
			<div class="menu-agileinfo">  

			{
							menus.map(item => (
                                //<a>{item.menuName}Price:{item.price}</a>  
								<div class="col-md-4 col-sm-4 col-xs-6 menu-w3lsgrids">
                                  <a> {item.menuName}                      
                                     <div>Price : {item.price}Rs</div> 
                                  </a>                              
								</div>
      							))
			}	
            		
				<div class="clearfix"> </div> 
                
			</div> 			
            <a  href="/FoodMenu">back</a>	
		</div> 
	</div>
    </div>   
    );
};

export default AllMenus;

