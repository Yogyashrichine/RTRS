import axios from "axios";
import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import Admin from "./Admin";
import { Input } from "reactstrap";



const UpdateMenuPrice = () => {
    useEffect(() => {
        document.title="UpdateMenuPrice";
      }, []);

      const [menu, setMenu] = useState ([ ])
      //form handler function 
      const handledForm = (e) => {
          console.log(menu);
          postDatatoServer(menu);
          e.preventDefault();
      };

    
    
      //creating function to post data on server

      const postDatatoServer=(data)=>{
          axios.put(`${base_url}/menus`,data).then(
            (response) =>{
                //for success
                console.log(response);               
                alert("menu updated  successfully");
                window.location.href= '/AllMenuList'
                
            },
            (error)=>{
                //for error
                console.log(error);
                console.log("error");
                toast.error("error ! something went wrong");
            }
        );        
    };
    
    function handleSubmit(e) {
        e.preventDefault();
        postDatatoServer(menu);
        console.log("clear");
      }

    return(
        <div>      
            <Admin/>          
<div class="container">	
		<ol class="breadcrumb w3l-crumbs">
			<li><a href="/"><i class="fa fa-home"></i> Home</a></li> 
			<li class="active"> update menu</li>
		</ol>
        <h3> <a style={{ marginLeft: 10}} href="/Admin">back</a></h3>
        <br/>
	</div>

	<div class="login-page about">
		<img class="login-w3img" src="images/img3.jpg" alt=""/>
		<div class="container"> 
			<h3 class="w3ls-title w3ls-title1">Update Menu</h3>  
			<div class="login-agileinfo"> 
				<form onSubmit={handledForm}> 

                <Input type="text" class="agile-ltext" placeholder ="Enter menu name"  id="menuName" name="menuName" onChange={(e)=>{
                        setMenu({...menu, menuName:e.target.value})
                    }}/>
                     <Input type="text" class="agile-ltext" placeholder ="Enter menu price"  id="price" name="price" onChange={(e)=>{
                        setMenu({...menu, price:e.target.value})
                    }}/>
                     <Input type="text" class="agile-ltext" placeholder ="Enter category name"  id="category" name="category" onChange={(e)=>{
                        setMenu({...menu, category:e.target.value})
                    }}/>
                    						  
					<input type="submit" value="Add Menu" onClick={handleSubmit}/>
                </form>
			</div>	 
		</div>
	</div>
	
         </div>
    );
};
export default UpdateMenuPrice;