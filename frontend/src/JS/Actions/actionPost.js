import { EDIT_POST, GET_POST, GET_POST_FAIL, GET_POST_LOAD, GET_POST_SUCCESS } from "../constant/actionType";
 
import axios from "axios"

export const getPosts=()=>async(dispatch)=>{
    dispatch({type:GET_POST_LOAD})
    try {
        let result = await axios.get(`/api/posts`)
        dispatch({type:GET_POST_SUCCESS,payload: result.data.response})
    } catch (error) {
        dispatch({type:GET_POST_FAIL})
        console.log(error)
    }
}

export const deletePost = (id)=>(dispatch)=>{
    axios
    .delete(`/api/posts/${id}`)
    .then((res=>dispatch( getPosts (
    
    ))))
    .catch((err)=>console.log(err))
}
export const getPost = (id)=>(dispatch)=>{
    axios.get(`/api/posts/${id}`)
    .then((res)=>dispatch({type:GET_POST,payload:res.data.response}))
    .catch((err)=>console.log(err))
}

//edit Post
export const editPost= (id,user)=>(dispatch)=>{
    axios.put(`/api/posts/${id}`,user)
    .then((res)=>{
        dispatch({type:EDIT_POST,payload:res.data.msg})
    })
    .then(dispatch(getPosts()))
    .catch((err)=>console.log(err))
}
//post Posts
export const postPosts = (user)=>async(dispatch)=>{
    try {
        await axios.post(`/api/posts/create`,user)
        dispatch(getPosts())
    } catch (error) {
        console.log(error.response)
    }
}