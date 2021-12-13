import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {Button} from "react-bootstrap";
import Post from './Post';
import SearchPost from './SearchPost'
import { getPosts } from '../../JS/Actions/actionPost';



const   ListPost = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state)=>state.postReducer.posts)
  const loadPosts = useSelector((state)=>state.postReducer.loadPosts)

  useEffect(()=>{
        
    dispatch(getPosts())
    //eslint-disable-next-line
},[])

    return (
<div style={{"display":"flex", 'flexDirection': 'column',"paddingTop":"100px"}}>
        <div style={{"display":"flex", 'flexDirection': 'column',"alignItems": "center"}}>
        <SearchPost/>
        </div>
        <div style={{"display":"flex", "flexWrap": "wrap","paddingTop":"50px"}}>
          
        

{loadPosts?(
              
              <h3>Loading</h3>
              
          ):posts.length === 0 ?(<h2>there is no data</h2>):(
              posts.map((el)=> <Post key={el._id} post={el}  /> )
          )}
          <div>
</div>

          <Link to='/dashboard'><Button>Go TO Home</Button></Link>
        </div>
      </div>  
    )
}

export default ListPost