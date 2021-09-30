import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Input } from "reactstrap";
import base_url from "../api/bootapi";



const Registration = () => {
    useEffect(() => {
        document.title="Registration";
      }, []);

      const [user,setUser] = useState({});
      //form handler function 
      const handledForm = (e) => {
          console.log(user);
          postDatatoServer(user);
          e.preventDefault();
      };

    
    
      //creating function to post data on server

      const postDatatoServer=(data)=>{
          axios.post(`${base_url}/users`,data).then(
            (response) =>{
                //for success
                console.log(response);               
                alert("Registration successfully");
                window.location.href= '/Login'
                
            },
            (error)=>{
                //for error
                console.log(error);
                console.log("error");
                toast.error("error ! something went wrong");
            }
        );        
    };
    
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     postDatatoServer(user);
    //     console.log("clear");
    //     // firstName:e.target.value = "";
    //     // lastName:e.target.value ="";
    //   }

    return(
        <div>
          

          
<div class="container">	
		<ol class="breadcrumb w3l-crumbs">
			<li><a href="/"><i class="fa fa-home"></i> Home</a></li> 
			<li class="active">Sign Up</li>
		</ol>
	</div>

	<div class="login-page about">
		<img class="login-w3img" src="images/img3.jpg" alt=""/>
		<div class="container"> 
			<h3 class="w3ls-title w3ls-title1">Sign Up to your account</h3>  
			<div class="login-agileinfo"> 
				<form onSubmit={handledForm}> 

                <Input type="text" class="agile-ltext" placeholder ="Enter first name"  id="firstName" name="firstName" onChange={(e)=>{
                        setUser({...user, firstName:e.target.value})
                    }}/>

<Input type="text" placeholder ="Enter last name" class="agile-ltext" name="lastName"  id="lastName"  onChange={(e)=>{
                        setUser({...user, lastName:e.target.value})
                    }}/>
                    <Input type="text" class="agile-ltext" placeholder ="Enter Email"   name="email" id="email"  onChange={(e)=>{
                        setUser({...user, email:e.target.value})
                    }}/>
					 <Input type="password" class="agile-ltext" placeholder ="Enter password"  id="password" name="password"   onChange={(e)=>{
                        setUser({...user, password:e.target.value})
                    }}/>
                    <br/>

                   <Input type="number" placeholder ="Enter phone no" class="agile-ltext" id="phoneNo" name="phoneNo"  onChange={(e)=>{
                        setUser({...user, phoneNo:e.target.value})
                    }}/>
                     <Input type="text" placeholder ="Enter city" class="agile-ltext" id="city" name="city"   onChange={(e)=>{
                        setUser({...user, city:e.target.value})
                    }}/>
                     <Input type="text" placeholder ="Enter country" class="agile-ltext"  id="country" name="country"   onChange={(e)=>{
                        setUser({...user, country:e.target.value})
                    }}/>
                       <br/>
                      <Input type="number" placeholder ="Enter zip code" class="agile-ltext" id="zipCode" name="zipCode"  onChange={(e)=>{
                        setUser({...user, zipCode:e.target.value})
                    }}/>  
					  
					<input type="submit" value="Sign Up" 
                   // onClick={handleSubmit}
                    />
		
				<p>Already have an account?  <a href="/Login"> Login Now!</a></p> 
                </form>
			</div>	 
		</div>
	</div>
	
         </div>
    );
};
export default Registration;