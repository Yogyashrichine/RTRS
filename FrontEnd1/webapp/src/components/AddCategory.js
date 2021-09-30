import axios from "axios";
import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import Admin from "./Admin";
import { Input } from "reactstrap";



const AddCategory = () => {
    useEffect(() => {
        document.title="AddCategory";
      }, []);

      const [category, setCategory] = useState ([ ])
      //form handler function 
      const handledForm = (e) => {
          console.log(category);
          postDatatoServer(category);
          e.preventDefault();
      };

    
    
      //creating function to post data on server

      const postDatatoServer=(data)=>{
          axios.post(`${base_url}/categories`,data).then(
            (response) =>{
                //for success
                console.log(response);               
                alert("category added  successfully");
                window.location.href= '/AllCategoryList'
                
            },
            (error)=>{
                //for error
                console.log(error);
                console.log("error");
                toast.error("error ! something went wrong");
            }
        );        
    };
    

    return(
        <div>   
            <Admin/>             
  <div class="container">	
		<ol class="breadcrumb w3l-crumbs">
			<li><a href="/"><i class="fa fa-home"></i> Home</a></li> 
			<li class="active"> add category</li>
		</ol>
        <h3> <a style={{ marginLeft: 10}} href="/Admin">back</a></h3>
        <br/>
  </div>

	<div class="login-page about">
		<img class="login-w3img" src="images/img3.jpg" alt=""/>
		<div class="container"> 
			<h3 class="w3ls-title w3ls-title1">Add category</h3>  
			<div class="login-agileinfo"> 
				<form onSubmit={handledForm}> 

                <Input type="text" class="agile-ltext" placeholder ="Enter category name"  id="categoryName" name="categoryName" onChange={(e)=>{
                        setCategory({...category, categoryName:e.target.value})
                    }}/>
                    		{/* <div class="clearfix"></div> */}					  
					<input type="submit" value="Add Category" />
                </form>
			</div>	 
		</div>
	</div>	
 </div>
    );
};
export default AddCategory;