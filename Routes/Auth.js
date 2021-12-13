const Router = require ('express').Router()
const bcrypt = require('bcrypt')
const  jwt = require ('jsonwebtoken')
require("dotenv").config({path:'../config/.env'})
const User = require ("../models/User")

const {validator, registerRules, loginRules}=require ('../middleware/validator')
const isAuth = require('../middleware/isAuth')

Router.post("/register",registerRules(),validator,async(req,res)=>{
    const {name, lastName, email, password} =req.body
    try{
        // simple validation 
       // if (!name || !lastName || !email || !password){
          //  return res.status(400).send({msg:'please entre all fields'})
       // }
        // check for existing email 
        let user = await User.findOne({email})
        if (user){
            return res.status(400).send({msg:'User alerady exist'})
        }
        // create new user
        user = new User ({name, lastName, email, password})
        //  hashpassword
        const salt =10 


        const hashpassword =  await bcrypt.hash(password,salt)
        user.password = hashpassword
        //save user 
        
        await user.save()
        
          
         //register payload
         const payload={ id : user._id
         }
          const token = await jwt.sign(payload , "mySecret")

        res.status(200).send({msg:'User Register with success', user, token})
    } catch(error){
        res.status(500).send({msg:'Register server errors'})

    }

})
//login
Router.post('/login',loginRules(),validator,async (req,res)=>{
    const {email,password}= req.body
    try{

         // simple validation 
     //    if ( !email || !password){
          //  return res.status(400).send({msg:'please entre all fields'})
       
    //} 
        // check for existing email 
        let user = await User.findOne({email})
        if (!user){
        return res.status(400).send({msg:'User Does Not exist'})
    }  
    
    const isMatch =await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(400).send({msg:'Bad Credentials Password'})
    }
        //login payload
    const payload={ id : user._id   ,  
        name:user.name
      }
       const token = await jwt.sign(payload ,  "mySecret", {expiresIn : 60*60})
    res.send({msg:'Logged with succes',user,token})
   
    } catch (error){
        res.status(500).send({msg:'login server error'})

}
    
})


// private routes
Router.get("/user",isAuth,(req,res)=>{
    res.status(200).send({user:req.user})

})
module.exports = Router


