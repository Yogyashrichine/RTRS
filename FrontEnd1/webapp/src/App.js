import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Layout  from './components/layout';
import Registration from './components/Registration';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import FoodMenu from './components/FoodMenu';
import Products from './components/Products';
import Allusers from './components/Allusers';
import Category from './components/Category';
import Menu from './components/Menu';
import AllMenus from './components/AllMenus';
import BookTable from './components/BookTable';
import Admin from './components/Admin';
import AllCategoryList from './components/AllCategoryList';
import AllMenuList from './components/AllMenuList';
import AddCategory from './components/AddCategory';
import AddMenu from './components/AddMenu';
import AllReservationList from './components/AllReservationList';
import UpdateMenuPrice from './components/UpdateMenuPrice';
import {BrowserRouter as Router , Route} from "react-router-dom";

function App() {  
  return (
    <div>
    <Layout/>
    <Router>
    <Route path="/" component={Home} exact />
          <Route path="/Registration" component={Registration} exact />
          <Route path="/Login" component={Login} exact />
          <Route path="/About" component={About} exact />
          <Route path="/Contact" component={Contact} exact />
          <Route path="/FoodMenu" component={FoodMenu} exact />
          <Route path="/Products" component={Products} exact />
          <Route path="/Allusers" component={Allusers} exact />
          <Route path="/Category" component={Category} exact />
          <Route path="/Menu" component={Menu} exact />
          <Route path="/AllMenus" component={AllMenus} exact />
          <Route path="/BookTable" component={BookTable} exact />
          <Route path="/Admin" component={Admin} exact />
          <Route path="/AllCategoryList" component={AllCategoryList} exact />
          <Route path="/AllMenuList" component={AllMenuList} exact /> 
          <Route path="/AddCategory" component={AddCategory} exact />
          <Route path="/AddMenu" component={AddMenu} exact />
          <Route path="/AllReservationList" component={AllReservationList} exact />
          <Route path="/UpdateMenuPrice" component={UpdateMenuPrice} exact />
          
                  
    </Router>
           </div>
  );
}

export default App;
