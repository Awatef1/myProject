const express= require('express')
const connectDB = require ('./config/connectDB')
const authRouter = require ("./Routes/Auth")
const app =express()
connectDB()
// middleware
app.use(express.json())
// use Routes
app.use("/api/auth",authRouter)
const PORT = process.env.PORT || 8000;

app.listen(PORT,(err)=>{
    err? 
    console.log(err)
    :
    console.log(`Server running on the port ${PORT}`)
    
}
)

