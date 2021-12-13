import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { Button } from "react-bootstrap";
import {useDispatch} from 'react-redux';
import { toggleFalse } from '../../JS/Actions/edit';




const Dashboard = () => {
    const user = useSelector(state=> state.authReducer.user)
    const dispatch = useDispatch()
  
    return (
        <div>
           {!user ? ( <h1>go to login</h1>): user.isAdmin === false ? (
              <div>

                <Link to='/AddPost'><Button onClick={()=>dispatch(toggleFalse())} primary></Button></Link>
                <Link to='/ListPost'> <Button primary> List Post </Button>
                    </Link>
                            
           

             </div>
         ):(<></>)} 
        </div>
    )
}

export default Dashboard 