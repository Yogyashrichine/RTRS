import axios from "axios";
import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import Admin from "./Admin";
import Select from 'react-select';
import { Input } from "reactstrap";



const AddMenu = () => {
    useEffect(() => {
        document.title="AddMenu";
      }, []);

      const actions = [
        { label: "vegitable salad", value: 1 },
        { label: "Indian Food", value: 2 },
        { label: "Chinise Food", value: 3 },
        { label: "Punjabi Food", value: 4 },
        { label: "italian food", value: 5 },
        { label: "breakfast", value: 7 },
        { label: "lunch", value: 8 },
        { label: "dinner", value: 9 }      
      ];
     

      const [menu, setMenu] = useState ([ ])
      //form handler function 
      const handledForm = (e) => {
          console.log(menu);
          postDatatoServer(menu);
          e.preventDefault();
      };

    
    
      //creating function to post data on server

      const postDatatoServer=(data)=>{
          axios.post(`${base_url}/menus`,data).then(
            (response) =>{
                //for success
                console.log(response);               
                alert("menu added  successfully");
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
    

    return(
        <div>      
            <Admin/>          
<div class="container">	
		<ol class="breadcrumb w3l-crumbs">
			<li><a href="/"><i class="fa fa-home"></i> Home</a></li> 
			<li class="active"> add menu</li>
		</ol>
        <h3> <a style={{ marginLeft: 10}} href="/Admin">back</a></h3>
        <br/>
	</div>

	<div class="login-page about">
		<img class="login-w3img" src="images/img3.jpg" alt=""/>
		<div class="container"> 
			<h3 class="w3ls-title w3ls-title1">Add Menu</h3>  
			<div class="login-agileinfo">             
				<form onSubmit={handledForm}>                 

                <Input type="text" class="agile-ltext" placeholder ="Enter menu name"  id="menuName" name="menuName" onChange={(e)=>{
                        setMenu({...menu, menuName:e.target.value})
                    }}/>
                    <br/>
                     <Input type="number" class="agile-ltext" placeholder ="Enter menu price"  id="price" name="price" onChange={(e)=>{
                        setMenu({...menu, price:e.target.value})
                    }}/>
                    <br/>
                    
                     {/* <Input type="number" class="agile-ltext" placeholder ="Enter category id"  id="category" name="category" onChange={(e)=>{
                        setMenu({...menu, category:e.target.value})
                    }}/>   */}

                    <div class="agile-ltext">                        
                            <Select placeholder ="select category"  id="category" name="category"
                            //  onChange={(e)=>{ setMenu({...menu, category:e.target.value}) }} 
                        options={ actions }  />                          
                    </div>                 
                    						  
					<input type="submit" value="Add Menu" />
                   
                </form>
			</div>	 
		</div>
	</div>
	
         </div>
    );
};
export default AddMenu;