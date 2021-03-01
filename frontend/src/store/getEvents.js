import { csrfFetch } from './csrf';
const GET_TOP_EVENTS = "events/gettopevents";

//actionCreator
const getTopEventsAction = (events) => {
  return {
    type: GET_TOP_EVENTS,
    payload: events,
  };
};


// Thunk
export const getTopEvents = () => async (dispatch) => {
 
  const response = await csrfFetch("/api/events");
  const data = await response.json();
  // data.map(d=>{
  //   console.log(d);
  // })
  dispatch(getTopEventsAction(data));
  // return response;
};


// Reducer
const initialState = { events: null };
  
const eventsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_TOP_EVENTS:
      newState = Object.assign({}, state);
      newState.events = action.payload;
      return newState;
    //other getEvents later.
    default:
      return state;
  }
};


export default eventsReducer;