const Router =require ('express').Router
const Posts =require ('../models/Posts')
const User = require ('../models/User')
//CREATE new Post

Router.post("/create",  async (req, res) => {
  
  const newPost= new Post(req.body);
  try {
    const savedPost = await newMovie.save();
    res.status(200).json({msg:'Entry succesfully inserted to the DB', savedPost});
  } catch (error) {
    res.status(500).json({error : err})
  }

});

//Get all Posts
Router.get('/',async(req,res)=>{

try {
    const result = await Posts.find()
    res.status(200).send({response:result ,msg:"get Posts Success"})
} catch (error) {
    res.status(500).send({msg:"can not get Posts"})
}
});

//Get One By ID
Router.get('/:id',async(req,res)=>{
try {
    const result = await Posts.findOne({_id:req.params.id})
    res.status(200).send({response:result ,msg:"get Post by Id Success"})
} catch (error) {
    res.status(500).send({msg:"can not get Post check Post ID"})
}
});

//Delete By ID
Router.delete("/:id",async(req,res)=>{ 
 try {
    const result = await Posts.deleteOne({_id:req.params.id})
     result ? res.status(200).send({msg:"Post Deleted"}) 
     :res.status(400).send("there is no Post With thids ID ") 
    } catch (error) {
       res.status(500).send({msg:"Error can not delete Post"})
    } 


  }); 
  
  // Update Post By ID
  
  Router.put("/:id",async(req,res)=>{ 
    
    try { 
    const result = await Posts.updateOne({_id:req.params.id},{$set:{...req.body}}) 
    result ? res.status(200).send({msg:"Post Updated"}) 
    :res.status(400).send("there is no Post With thids ID ") 
  } catch (error) { 
    res.status(500).send({msg:"Error can not Update Post"}) 
  }


});





module.exports = router;