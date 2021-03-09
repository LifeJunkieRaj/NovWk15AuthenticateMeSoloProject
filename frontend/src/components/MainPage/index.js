import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './MainPage.css';

import * as getTopGroupsAction from "../../store/getGroups";

import Card from "../Card";



function MainPage() {
  // const sessionUser= useSelector(state=>state.session.user);
  const groupsData= useSelector(state=>state);
  const dispatch = useDispatch();
  
  // const [events, setEvents] = useState([]);

  useEffect(()=>{

    dispatch(getTopGroupsAction.getTopGroups());
  
  },[dispatch]);
    return(
        <div className="layout-centered">
          <h2 className="tagline">Find a group you like.</h2>  
          <div className="groupsContainer">

            {groupsData.groups.groups && groupsData.groups.groups.map(d=>{
              console.log("data:");
              console.log(d);
              return(<Card data={d} cardType="Group" key={d.id}/>) 
            })}

        
          </div>
        </div>
    )
  }



export default MainPage;