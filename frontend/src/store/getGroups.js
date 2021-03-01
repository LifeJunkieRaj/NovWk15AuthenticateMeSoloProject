import { csrfFetch } from './csrf';
const GET_TOP_GROUPS = "groups/gettopgroups";

//actionCreator
const getTopGroupsAction = (groups) => {
  return {
    type: GET_TOP_GROUPS,
    payload: groups,
  };
};


//Thunk
export const getTopGroups = () => async (dispatch) => {
 
  const response = await csrfFetch("/api/groups");
  const data = await response.json();
  // data.map(d=>{
  //   console.log(d);
  // })
  dispatch(getTopGroupsAction(data));
  // return response;
};


//reducer
const initialState = { groups: null };
  
const groupsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_TOP_GROUPS:
      newState = Object.assign({}, state);
      newState.groups = action.payload;
      return newState;
    //other getEvents later.
    default:
      return state;
  }
};


export default groupsReducer;