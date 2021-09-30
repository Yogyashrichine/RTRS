import axios from "axios";
import React, { useEffect, useState } from "react";
import { Input } from "reactstrap";
import base_url from "../api/bootapi";



const Login = () => {  

    useEffect(() => {
        document.title="Login";
      }, []);

      const [user,setUser] = useState([]);
      //const [firstName,setFirstName] = useState([]);
     // const [userId,setUserId] = useState([]);
      //form handler function 
      const handledForm = (e) => {
          console.log(user);         
          validateUserLogin(user);        
          e.preventDefault();
      };

      //creating function to post data on server

      const validateUserLogin=(data)=>{
          axios.post(`${base_url}/users/login`,data).then(
            (response) =>{
                
                //for success
                console.log(response.data);
                const result = response.data;
                console.log(response.data.role);                                
                if(response.data.role === 'ADMIN'){
                    alert("Login successfully"); 
                    localStorage.setItem("username",result.firstName);
                    localStorage.setItem("userid",result.userId);                                   
                    window.location.href= '/Admin';
                }
                 if (response.data.role === 'CUSTOMER'){
                     alert("Login successfully");
                     localStorage.setItem("username",result.firstName);
                     localStorage.setItem("userid",result.userId);                                          
                    window.location.href= '/'
                 }                 
    
             
            },
            (error)=>{
                //for error
                console.log(error);
                console.log("error");
            }
        );        
    };
    

    return(
        <div>

<div class="container">	
	<ol class="breadcrumb w3l-crumbs">
		<li><a href="#"><i class="fa fa-home"></i> Home</a></li> 
		<li class="active">Login</li>
	</ol>
</div>

<div class="login-page about">
	<img class="login-w3img" src="images/img3.jpg" alt=""/>
	<div class="container"> 
		<h3 class="w3ls-title w3ls-title1">Login to your account</h3>  
		<div class="login-agileinfo"> 
			<form onSubmit={handledForm}> 
				
                <Input type="text" placeholder ="Enter User email" class="agile-ltext"  name="email" id="email"  onChange={(e)=>{
                        setUser({...user, email:e.target.value})
                    }}/>

                   <Input type="password" placeholder ="Enter password"  id="password" name="password"   onChange={(e)=>{
                        setUser({...user, password:e.target.value})
                    }}/> 
				
					<div class="clearfix"> </div>
				  
				<input type="submit" value="LOGIN" />
			</form>
			<p>Don't have an Account? <a href="/Registration"> Sign Up Now!</a></p> 
		</div>	 
	</div>
</div>

      </div>   
    );
};


export default Login;