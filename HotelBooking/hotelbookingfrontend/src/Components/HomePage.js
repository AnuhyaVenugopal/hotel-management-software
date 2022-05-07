import React, { Component } from 'react'
import NavBar from '../NavBar'
// import { testdata } from './testData'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HotelCards from './HotelCards';
import HotelDialog from './HotelDialog';
import axios from 'axios'


export default class HomePage extends Component {


  constructor(props) {
    super(props)

    this.state = {
      hotelList: [],
      numberOfRooms: 2,
      location: "",
      checkin: "",
      checkout:"",
      roomType: "single",
      noOfRooms: 0,
      noOfGuests: 0

    }
  }

  componentDidMount(props) {


  }

  searchHotels = () => {
    axios.post("http://localhost:3001/search", {
      location: this.state.location,
      checkin: this.state.checkin,
      checkout: this.state.checkout,
      roomType: this.state.roomType,
      noOfRooms: this.state.noOfRooms,
      noOfGuests: this.state.noOfGuests
    }).then(resp => {
      console.log(resp)
      this.setState({
        hotelList: resp.data.groupedHotel
      })
    }).catch(err => {
      console.log(err)
    })

  }


  loadHotels = () => {

    //  let hotelList =testdata.groupedHotel 
    //  console.log(hotelList)
    return this.state.hotelList.map((item, key) => {
      return <li style={{ "marginBottom": "20px" }}><HotelCards item={item[0]} key={key} rooms={item}></HotelCards></li>
    })

  }


  onChangeHandler = (e)=>{
    // console.log(e.target.name)
    // console.log(e.target.value)

    if (e.target.name =="CheckIn"){
      this.setState({
        checkin:e.target.value
      })
    }
    else if (e.target.name =="CheckOut") {
      this.setState({
        checkout:e.target.value
      })
    }
    else if (e.target.name == "Room_Type"){
      this.setState({
        roomType:e.target.value
      })
    }
    else if (e.target.name == "Room_Type"){
      this.setState({
        roomType:e.target.value
      })
    }
    else if (e.target.name == "NofGuests"){
      this.setState({
        noOfGuests:e.target.value
      })
    }
    else if (e.target.name =='NoOfRooms'){
      this.setState({
        noOfRooms:e.target.value
      })
    }
    else if (e.target.name =='location'){
      this.setState({
        location:e.target.value
      })
    }


  }



  render() {
    console.log(this.state)
    return (
      <div>
        <NavBar></NavBar>
        <div className='container-fluid' style={{ "margin": "0px", "padding": "0px" }}>
          <div className='row d-flex justify-content-center' style={{ "marginTop": "50px", "marginLeft": "0px", "marginRight": "0px" }}>
            <div className='col-md-1'>

            </div>
            <div className='col-md-10 d-flex justify-content-center'>
              <center>
                <div class="input-group" >

                  <div class="form-outline">
                    <input type="search" name='location' placeholder='Location' id="form1" class="form-control" style={{ "width": "300px" }} onChange={(e)=>{this.onChangeHandler(e)}} />
                    <label class="form-label" for="form1">Search</label>
                  </div>
                  <div>
                    <input type="date" id='CheckIn'name='CheckIn' onChange={(e)=>{this.onChangeHandler(e)}} style={{ "height": '39px', 'width': '120px', 'marginLeft': "10px", "display": "block" }}></input>
                    <label class="form-label" for="CheckIn">Check In</label>
                  </div>
                  <div>
                    <input type="date" id='CheckOut'name='CheckOut' onChange={(e)=>{this.onChangeHandler(e)}} style={{ "height": '39px', 'marginLeft': "10px", "display": "block" }}></input>
                    <label class="form-label" for="CheckOut">Check Out</label>
                  </div>
                  <div>
                    <select name='Room_Type' onChange={(e)=>{this.onChangeHandler(e)}} style={{ "height": '39px', 'width': '120px', 'marginLeft': "10px", "display": "block" }}>
                      <option value="Single">
                        Single
                      </option>
                      <option value="double">
                        double
                      </option>
                      <option value="suite">
                        suite
                      </option>
                    </select>
                    <label class="form-label" for="Room_Type">Room Type</label>
                  </div>
                  <div>
                    <input type="number" name="NofGuests" onChange={(e)=>{this.onChangeHandler(e)}} style={{ "height": '39px', 'width': '100px', 'marginLeft': "10px", "display": "block" }}></input>
                    <label class="form-label" for="NofGuests">Number of Guests</label>
                  </div>
                  <div>
                    <input type="number" name='NoOfRooms' onChange={(e)=>{this.onChangeHandler(e)}} style={{ "height": '39px', 'width': '100px', 'marginLeft': "13px", "display": "block" }}></input>
                    <label class="form-label" for='NoOfRooms' style={{ "marginLeft": "5px" }}>Number of Rooms</label>
                  </div>
                  <button type="button" class="btn btn-primary" style={{ "height": '39px', "marginLeft": "10px", "width": "100px" }} onClick = {()=>{this.searchHotels()}} >
                    Search
                    {/* <i class="fas fa-search"></i> */}
                  </button>
                </div>
              </center>

            </div>
            <div className='col-md-1'>

            </div>

          </div>
           {this.state.hotelList.length == 0?<center style={{"marginTop":"200px"}}><h3>Welcome to Avalon.com</h3></center>:<div className='row d-flex justify-content-center' style={{ "margin": "0px", "padding": "0px" }} >
            <div className='col-md-2'>
            
            </div>
            <div className='col-md-8 d-flex justify-content-center'>
              <ul style={{ "list-style": "none" }}>
                {this.loadHotels()}
              </ul>
            </div>
            <div className='col-md-2'>

            </div>

          </div>}
     
        </div>
      </div>
    )
  }
}
