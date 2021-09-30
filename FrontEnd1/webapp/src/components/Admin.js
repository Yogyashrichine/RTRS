import React , { useEffect } from "react";

const Admin = () => {

    useEffect(() => {
        document.title="Admin";
      }, []);

	  const logout =()=>{
		localStorage.removeItem("userid");
		localStorage.removeItem("username");
	  }
	

    return(
        
        <div class="banner about-w3bnr">
            
        <div class="header">
			
			<div class="navigation agiletop-nav">
				<div class="container">
					<nav class="navbar navbar-default">
						
						<div class="navbar-header w3l_logo">
							<button type="button" class="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>  
						</div> 
						<div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
							<ul class="nav navbar-nav navbar-right">
							  <li><a href="/Allusers">View All Users</a></li>							  
							  <li><a href="/AllCategoryList">View All Category</a></li>
                                <li><a href="/AllMenuList">View All Menus</a></li>
                                <li><a href="/AddCategory">Add New Category</a></li>
                                <li><a href="/AddMenu">Add New Menu</a></li>
                                {/* <li><a href="/UpdateMenuPrice">Update Menu Price </a></li> */}
								<li><a href="/AllReservationList">View All Reservations</a></li>	
						      <li><a href="/" onClick={logout}>LogOut</a></li>								
							
							</ul>
						</div>
						
					</nav>
				</div>
			</div>
		</div>
        </div>
    )

}

export default Admin;