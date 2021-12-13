import {  EDIT_POST, GET_POST, GET_POST_FAIL,GET_POST_LOAD,GET_POST_SUCCESS } from '../constant/actionType';

const initialState ={
  posts : [],
  loadPosts: false,
  errors:{},
  post: {},
  editpost:""
}

export const postReducer = (state=initialState, {type,payload}) =>{
  switch (type) {
      case GET_POST_LOAD:
          return {...state,loadPosts:true}
      case GET_POST_SUCCESS:
          return {...state,posts:payload,loadPosts:false}
      case GET_POST_FAIL :
          return {...state,loadPosts:false, errors:payload}
      case GET_POST :
          return{...state,post:payload}
      case EDIT_POST :
          return {...state,editpost:payload}
          
  
      default:
       return   state
  }
}
export default postReducer