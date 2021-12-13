import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form,   } from 'react-bootstrap';
import { editPost, postPosts } from '../../JS/Actions/actionPost';
import { Link } from 'react-router-dom';

const AddPost = () => {
  const [post,setPost]=useState({title:"",date:"",image:"",description:""})
  const postReducer = useSelector((state)=>state.postReducer.post)
  const edit =useSelector((state)=>state.editReducer.edit)
  const dispatch = useDispatch()

  useEffect(()=>{
    edit? setPost(postReducer) : setPost({title:"",date:"",image:"",description:""})
},[postReducer,edit])    

const handlePost = ()=>{
  if(!edit){  
      dispatch(postPosts(post))
  }else {
      dispatch(editPost(postReducer._id,post))
  }
}

const handleChange = (e)=>{
    e.preventDefault();
    setPost({...post,[e.target.name]:e.target.value})
}


    return(
      <div>
         
          <Form inverted>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Title' placeholder='Title' value={post.title} onchange={handleChange}/>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Date' placeholder='Date' value={post.date} onchange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" size="lg" value={post.image} onchange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} value={post.description} onchange={handleChange}/>
            </Form.Group>

          <Link to='/ListPost'>
            <Button type='submit' onClick={handlePost}>
            {edit? "Edit" : "Add Post"}
            </Button>
          </Link>
            
        </Form>
        

            < Link to ='/dashboard'>add post</Link>
            <Link to='/ListPost'> list Post</Link>

      </div>
    )
}
export default AddPost;