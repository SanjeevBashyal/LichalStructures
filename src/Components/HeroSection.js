import React, {useState} from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import SearchDropdown from './Dropdown';
import Flag from '../images/WavingFlag.gif';
// import {Dropdown} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

function HeroSection() {
  const [options2, setOptions2] = useState([]);

  const optionsGiver=()=>{
    // document.getElementById("Structure").value="";
    const val=document.getElementById("Sector").value;
    if(val==="Building"){
      setOptions2(["Residential","Commercial"]);
    }
    else if(val==="Bridge"){
      setOptions2(["Trail Bridge","RCC Bridge"]);
    }
  }

  const nothing=()=>{
  }

  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <div className="heroText">
        <div className="tagTitle">
            <h1>DEVELOPMENT UNFOLDS @</h1>
          <div className="tagTitleH3">
            <img src={Flag} height="35px" width="35px"/>
            <h3>LS<i className="fas fa-cube"></i></h3>
          </div>
        </div>
        <p>We are Ready, Are You?</p>
      </div>
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div> */}
      <div className="dropOrders">
        <SearchDropdown onSelected={optionsGiver} id="Sector" placeHolder="Sector" opts={["Building","Bridge"]}/>
        <SearchDropdown onSelected={nothing} id="Structure" placeHolder="Structure" opts={options2}/>
        <SearchDropdown onSelected={nothing} id="Location" placeHolder="Location" opts={["Kathmandu","Butwal"]}/>
        <div className="input-mobile">
          <input
            className="form-control"
            type="text"
            placeholder="Mobile No."
          />
        </div>
        <div className="order-now">
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--no-font-size'
            onClick={console.log('hey')}
          >
            ORDER <i className='far fa-edit' />
          </Button>
        </div>
      </div>
      {/* <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}

    </div>
  );
}

export default HeroSection;
