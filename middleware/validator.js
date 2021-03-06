const {body, validationResult}= require('express-validator');

const registerRules =()=>[
    body ('name','name is required').notEmpty(),
    body('lastName','lastName is required').notEmpty(),
    body ('email', 'email should be email').isEmail(),
    body('password','password most contain 5 car').isLength({
        min:5,
        max:20
    })

]
// login rules 

const  loginRules =()=>[
    body ('email', 'email should be email').isEmail(),
    body('password','password most contain 5 car').isLength({
      
            min:5,
            max:20
        })
]
const validator =(req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
    res.status(400).send({errors:errors.array()})

    }
    next()
}
// post 

module.exports={validator,registerRules,loginRules}