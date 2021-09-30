import axios from "axios";
import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";



const Products = () => {

    useEffect(() => {
        document.title="Products";
      }, []);


      //creating function to post data on server

      const getAllMenusFromServer=()=>{
          axios.get(`${base_url}/menus/`,).then(
            (response) =>{
                //for success
                console.log(response);
                toast.success("menus has been loaded");
                setProducts(response.data);
            },
            (error)=>{
                //for error
                console.log(error);
                toast.error("something went wrong");
            }
        );        
    };  
	useEffect(() => {
        getAllMenusFromServer();
    }, []); 

	const [products,setProducts] = useState ([ ])

    return(
    <div>
        <div class="container">	
		  <ol class="breadcrumb w3l-crumbs">
			<li><a href="#"><i class="fa fa-home"></i> Home</a></li> 
			<li class="active">Dishes</li>
		  </ol>
        </div>
        <div class="products">	 
		<div class="container">
			<div class="col-md-9 product-w3ls-right"> 
				<div class="product-top">
					<h4>Food Collection</h4>
					<div class="clearfix"> </div>
				</div>
				 <div class="products-row">
					 <div class="col-xs-6 col-sm-4 product-grids">
						<div class="flip-container">
							<div class="flipper agile-products">
								<div class="front"> 
									<img src="assets/images/g6.jpg" class="img-responsive" alt="img"/>
									<div class="agile-product-text">              
										<h5>vegitable salad</h5>  
									</div> 
								</div>
								<div class="back">
									<h4>Fish salad</h4>
									<h6>300<sup>rs</sup></h6>									 
								</div>
							</div>
						</div> 
					</div>  
					<div class="col-xs-6 col-sm-4 product-grids">
						<div class="flip-container">
							<div class="flipper agile-products">
								<div class="front"> 
									<div class="agile-product-text agile-product-text2">              
										<h5>Sandwich</h5>  
									</div> 
									<img src="assets/images/g1.jpg" class="img-responsive" alt="img"/> 
								</div>
								<div class="back">
									<h4>Sandwich</h4>									
									<h6>150<sup>rs</sup></h6>									
								</div>
							</div>
						</div> 
					</div>
					<div class="col-xs-6 col-sm-4 product-grids">
						<div class="flip-container">
							<div class="flipper agile-products">
								<div class="front"> 
									<img src="assets/images/g3.jpg" class="img-responsive" alt="img"/>
									<div class="agile-product-text">              
										<h5>Indian Food</h5>  
									</div> 
								</div>
								<div class="back">
									<h4>Indian Food</h4>
									<h6>200<sup>rs</sup></h6>
								</div>
							</div>
						</div> 
					</div>
					<div class="col-xs-6 col-sm-6 product-grids">
						<div class="flip-container flip-container1">
							<div class="flipper agile-products">
								<div class="front"> 
									<div class="agile-product-text agile-product-text2">              
										<h5>Sandwich & soup</h5>  
									</div> 
									<img src="assets/images/g7.jpg" class="img-responsive" alt="img"/> 
								</div>
								<div class="back">
									<h4>Sandwich & soup</h4>
									<h6>100<sup>rs</sup></h6>
								</div>
							</div>
						</div>  
					</div>
				</div> 
			</div>
		</div>
	</div>
</div>       
);
};

export default Products;



