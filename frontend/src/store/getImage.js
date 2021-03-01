import { csrfFetch } from './csrf';
const GET_IMAGE = "image/getimage";

//actionCreator
const getImageAction = (image) => {
  return {
    type: GET_IMAGE,
    payload: image,
  };
};


// Thunk
export const getImage = (name) => async (dispatch) => {

 let path= "/api/images/"+name;

  const response = await csrfFetch(path, {headers:{
    'Content-Type':'image/jpeg',
    'Accept':'image/jpeg'
  }});

  const data = await response.blob();
 console.log("Image:");
 console.log(URL.createObjectURL(data));
  // data.map(d=>{
  //   console.log(d);
  // })
  dispatch(getImageAction(data));
  // return response;
};


// Reducer
const initialState = { image: null };
  
const imageReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_IMAGE:
      newState = Object.assign({}, state);
      newState.image = action.payload;
      return newState;
    //other getEvents later.
    default:
      return state;
  }
};


export default imageReducer;