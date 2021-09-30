import axios from "axios";
import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import Admin from "./Admin";


const AllCategoryList = () => {
    
    useEffect(() => {
        document.title="AllCategoryList";
      }, []);

     //function to call server
    const getAllCategoriesFromServer = () => {    
        axios.get(`${base_url}/categories`).then(
            (response) =>{
                //for success
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

	const [categories, setCategories] = useState ([ ])

    return(
        <div>    
             <Admin/>       
        <div class="container">	
        <ol class="breadcrumb w3l-crumbs">
        <li><a href="/"><i class="fa fa-home"></i> Home</a></li> 
        <li class="active">Category</li>
        </ol>
        <h3> <a style={{ marginLeft: 10}} href="/Admin">back</a></h3>
        <br/>
        <h3>  <a href="/AddCategory"> Add New Category</a></h3>        
      </div>
      <div class="wthree-menu">  
      <img src="images/i2.jpg" class="w3order-img" alt=""/>
      <div class="container">
        <h3 class="w3ls-title">All Categories</h3>
        <p class="w3lsorder-text">List of Categories are as follows</p>        
        <div class="menu-agileinfo">  

        {
                        categories.map(item => (
                                <div class="col-md-4 col-sm-4 col-xs-6 menu-w3lsgrids"> 
                                    <div>
                                       <a> {item.categoryName} </a>      
                                    </div>                
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

export default AllCategoryList;

