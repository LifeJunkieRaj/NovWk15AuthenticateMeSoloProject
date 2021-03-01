import React, { useState, useEffect } from "react";

import "./Card.css";
// import {Router,Route, Switch, useHistory} from 'react-router-dom';
// import GroupDetailsPage from "../GroupDetailsPage";

// function handleClick(history){
   
//     history.push("/groupDetailsPage");
// }



// import { useSelector, useDispatch } from 'react-redux';


// import * as getImageAction from "../../store/getImage.js";



function Card(props){

    // const sessionUser= useSelector(state=>state.session.user);
//   const imageData = useSelector(state=>state);
//   const dispatch = useDispatch();
  
  // const [events, setEvents] = useState([]);

//   useEffect(()=>{
//       if(props.data.cardType=="Group")
// {
//     dispatch((getImageAction.getImage(props.data.groupImage)),[dispatch]);
// }   
// else{
//     dispatch((getImageAction.getImage(props.data.eventImage)),[dispatch]);
// }
   
//   });



    // let history= useHistory();
    let data= props.data;
   // send the card type to Navlink.
    if(props.cardType=="Event"){
        return(
        
            <>
            {/* {imageData.images.image && 
                 
                <div class="cardDiv"  style={{backgroundImage: `url(${imageData.images.image})`}}>   */}
             <div class="cardDiv"  >
             <h2>{props.data.eventDetails}</h2>
             <p>{props.data.location}</p>

            
       
           </div>
            {/* } */}
          </>)
        }
    
else{
    let url="/groupDetailsPage/";
    return(
       
        <div class="cardDiv"  >  
         
         <h2>{props.data.titleName}</h2>
         <p>{props.data.location}</p>

       </div>
     

       


      )

    }
    // <Router>
    //     <Switch >
    //         <Route path="/groupDetailsPage" render={()=>{<GroupDetailsPage data={data} />}}></Route>
    //     </Switch>
    //     </Router>
    
   
  }
  export default Card;