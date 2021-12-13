
import {Route} from "react-router-dom"
import {Switch} from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuthUser } from "./JS/Actions/authActions";
import './App.css';
import AppNavBar from './components/Route/AppNavBar';
import Home from "./components/Pages/Home";
import Dashboard from './components/Pages/Dashboard';
import PrivateRoute from "./components/Routes/PrivateRoute"
import AddPost from "./components/Pages/AddPost";
import ListPost from "./components/Pages/ListPost";


function App() {
  const dispatch = useDispatch()
  const getUser = () => dispatch(getAuthUser())
  useEffect(()=>{
    getUser()
    // eslint-disable-next-line
  },[])
  return (
    <div >
    <AppNavBar />
    <Switch>
    
      <Route exact path='/' component={Home} />
      <Route exact path ="ListPost" component ={ListPost}/>
      <Route path ={["/Add","/edit/:id"]} component={AddPost}/>
      <PrivateRoute path="/dashboard" component={Dashboard} />

    </Switch>
    </div>
  );
}

export default App;