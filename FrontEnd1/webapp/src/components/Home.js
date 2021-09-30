import React , { useEffect } from "react";


const Home=()=>{
    useEffect(() => {
        document.title="Home";
      }, []);

        // const [firstName, setFirstName] = useState('')
      const username = localStorage.getItem("username");
      console.log(username);
      

    return(
      <div class="banner">
  
	<div class="banner-text">	
			<div class="container">
      <h2>WelCome {username} </h2>
				<h2>Delicious food from the <br/> <span>Best Test For you.</span></h2>
				
			</div>
		</div>
    </div>

	
		
	
   
    )
};

export default Home;