const jwt = require('jsonwebtoken')
const User = require ('../models/User')
require('dotenv').config({path:'../config/.env'})

const isAuth = async (req ,res,nxt)=>{
   try{
        const  token =req.headers['x-auth-token']
        if (!token){
         return res.status(400).send({msg:'unauthorized you dont have token'})

        }
       const decoded =await jwt.verify(token,process.env.secretOrkey)
       // if id exist or not and get it 
    const user = await User.findById(decoded.id)
        if (!user){
           return res.status(400).send({msg:"unauthorized "})
       }
       // get User
       req.user = user 
       next()
   } catch (error){
        return res.status(400).send({msg:'token is not valide'})

 }
}
 module.exports = isAuth