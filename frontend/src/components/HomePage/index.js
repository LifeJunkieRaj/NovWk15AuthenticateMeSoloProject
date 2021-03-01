import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './HomePage.css';

import * as getTopEventsAction from "../../store/getEvents";

import Card from "../Card";
import meetupBackground from '../../Images/meetupBackground.svg'


function HomePage() {
  // const sessionUser= useSelector(state=>state.session.user);
  const eventsData = useSelector(state=>state);
  const dispatch = useDispatch();
  
  // const [events, setEvents] = useState([]);

  useEffect(()=>{
    dispatch((getTopEventsAction.getTopEvents()),[dispatch]);
    
  });
    return(
        
        <div className="layout-centered" src={meetupBackground}>
          <h2 className="tagline">The only place on the interwebs where you can make friends and meetup to go meatup!!!</h2>
           <div className="eventsContainer">

            {eventsData.events.events && eventsData.events.events.map(d=>{
              
              return(<Card data={d} cardType="Event"  key={d.id}/>) 
            })}

           {/* <Card data={eventsData}/>         */}
                  
        
          </div>
        </div>
       
  
    )
  }


export default HomePage;