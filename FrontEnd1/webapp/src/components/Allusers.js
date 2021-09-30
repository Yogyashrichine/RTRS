import React, { useState,useEffect } from "react";
import User from "./User";
import Admin from "./Admin";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allusers = () => {

    useEffect(() => {
      document.title="All Users";
    }, []);

    //function to call server
    const getAllUsersFromServer = () => {
        axios.get(`${base_url}/users`).then(
            (response) =>{
                //for success
                console.log(response);
                toast.success("users has been loaded");
                setUsers(response.data);
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
        getAllUsersFromServer();
    }, []);



    const [users, setUsers] = useState ([ ])

    return(
        <div >
            <Admin/>
            <div class="container">	
		    <ol class="breadcrumb w3l-crumbs">
			<li><a href="/"><i class="fa fa-home"></i> Home</a></li> 
			<li class="active">Users</li>
		    </ol>
            <h1>All Users</h1>
            <p>List of users are as follows</p>
            <a style={{ marginLeft: 10}} href="/Admin">back</a>
	      </div>
            
            {
                users.length > 0 ? users.map((item) => (
                    <User key={item.id} user={item}/>
                )) : "No Users"
            }
              
        </div>
       
    )
};

export default Allusers;