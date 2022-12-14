import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HotelLogin from './Components/HotelLogin'
import HomePage from './Components/HomePage'
import ManageBookings from './Components/ManageBookings';
import CustProfile from './Components/CustProfile';
import HotelLandingPage from './Components/HotelComponents/HotelLandingPage';
import CheckOutPage from './Components/CheckOutPage';
import LandingPage from './Components/LandingPage';
import HotelRegistration from './Components/HotelRegistration'
import adminLogin from './Components/adminLogin';

function App() {
  return (

    <div className="App" >
      <Router>
          <Switch>
          <Route exact path="/" component = {LandingPage} ></Route>
          <Route exact path="/Login" ><HotelLogin></HotelLogin></Route>
          <Route exact path="/Register" ><HotelRegistration /> </Route>
          <Route exact path="/Bookings" ><ManageBookings></ManageBookings></Route> 
          <Route exact path="/landing" ><HotelLandingPage></HotelLandingPage></Route>
          <Route exact path = "/Checkout"component = {CheckOutPage} ></Route>
          <Route exact path = "/Home" component={HomePage}></Route>
          <Route exact path = "/Admin" component={adminLogin}></Route>
          </Switch>
      </Router>
    </div>

  );
}

export default App;
