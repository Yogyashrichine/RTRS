import React from "react"

function Header()
{

	const logout =()=>{
		localStorage.removeItem("userid");
		localStorage.removeItem("username");
	  }
	

    return(
        
        <div class="banner about-w3bnr">
        <div class="header">
			<div class="w3ls-header"> 
				<div class="container">
					
					<div class="w3ls-header-right">
						<ul> 
							
							<li class="head-dpdn">
								<a href="/login"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</a>
							</li> 
							<li class="head-dpdn">
								<a href="/Registration"><i class="fa fa-user-plus" aria-hidden="true"></i> Signup</a>
							</li> 
							
						</ul>
					</div>
					<div class="clearfix"> </div> 
				</div>
			</div>
			
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
							<h1><a href="index.html">Staple<span>Best Food Collection</span></a></h1>
						</div> 
						<div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
							<ul class="nav navbar-nav navbar-right">
								<li><a href="/" >Home</a></li>
								<li class="dropdown">
									<a href="/FoodMenu">Menu </a>									
								</li>
								<li><a href="/BookTable">Book Table</a></li> 
								<li><a href="/About">About Us</a></li> 								
								<li><a href="/Contact">Contact Us</a></li>
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

export default Header;