import axios from "axios";
import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const FoodMenu = () => {

    useEffect(() => {
        document.title="FoodMenu";
      }, []);

     //function to call server
    const getAllCategoriesFromServer = () => {
        axios.get(`${base_url}/categories`).then(
            (response) =>{
                //for success
                console.log(response);
                toast.success("categories has been loaded");
                setCategories(response.data);
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
        getAllCategoriesFromServer();
    }, []);

	const [categories, setCategories] = useState ([])
  
  const navigate = (e,cateId) => {
    e.preventDefault();
    //alert(cateId);
    window.location.href= `/AllMenus?cateId=${cateId}`;
  }

    return(
	<div>		
          <div class="container">	
		    <ol class="breadcrumb w3l-crumbs">
			<li><a href="/"><i class="fa fa-home"></i> Home</a></li> 
			<li class="active">Category</li>
		    </ol>
	      </div>
          <div class="wthree-menu">  
		  <img src="images/i2.jpg" class="w3order-img" alt=""/>
		  <div class="container">
			<h3 class="w3ls-title">Category</h3>
			<p class="w3lsorder-text">Here your Staple Food Varieties</p>
			<div class="menu-agileinfo">  

		   {
							categories.map(item => (
								    <div class="col-md-4 col-sm-4 col-xs-6 menu-w3lsgrids"> 
        				    			<a onClick={(e) => {navigate(e,item.cateId)}}> {item.categoryName} </a>                     
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

export default FoodMenu;

