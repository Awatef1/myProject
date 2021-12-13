
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deletePost,getPost } from '../../JS/Actions/actionPost' 
import { toggleTrue } from '../../JS/Actions/edit'


const Post = ({post}) => {
  const user = useSelector(state=> state.authReducer.user)
    const dispatch =useDispatch()
    return (
        <div>
  <Card style={{ marginLeft:'50px', marginBottom:'50px', backgroundColor:'white', height:'450px', width: '270px' }}>
  <Card.Img variant="top" style={{ width:'auto', height:'45%'}} src={post.image} />
  <Card.Body style={{'display': 'flex','flexDirection': 'column','justifyContent': 'center'}} >
  <Card.Title>{post.title}</Card.Title>
    <Card.Text>{post.date}</Card.Text>
    <Card.Text>{post.description}</Card.Text>
    
     { user === null ?(<></>):user.isAdmin === true ? (        <div>
        <Link to={`/edit/${post._id}`} >
          <Button variant="success" 
          onClick={()=>{dispatch(getPost(post._id));
                        dispatch(toggleTrue())}}>
            Edit
          </Button></Link>
          <Button variant="danger" 
          onClick={()=>dispatch(deletePost(post._id))}>
            Delete
          </Button>
        </div>):(<></>)}

        </Card.Body>
</Card>
        </div>
    )
}

export default Post