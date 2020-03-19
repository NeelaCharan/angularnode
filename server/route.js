const express=require('express');
const router=express.Router();
const user=require('./models/user');
const mg=require('mongoose');
mg.connect('mongodb://127.0.0.1:27017/finalhttp',err=>{
    if(err) throw err
    else
    console.log("connected to mongo database");
});
router.get('/',async(req,res)=>{
    const m=await user.find();
    // res.send("iam here in routers")
    res.json(m);
});
router.post('/register',async(req,res)=>{
    let userdata=req.body;
    let use=await new user(userdata);
    use.save((error,registeredUser)=>{
        if(error) console.log(error);
        else res.status(200).send(registeredUser);
        
    })

});
router.post('/login',(req,res)=>{
    let userdata=req.body;
    user.findOne({username:userdata.username},(error,user)=>{
        if(error) console.log(error);
        else{
            if(!user){
                res.status(401).send("invalid username");
            }
            else{
                if(user.password!==userdata.password){
                    res.status(401).send("invalid passowrd");
                }
                else{
                    res.status(200).send(user);
                }
            }
        }
        
    })
});
router.get('/user',(req,res)=>{
    let user=[
        {
            "username":"charan",
            "password":"kumar"
        },
        {
            "username":"vinay",
            "password":"kumar"
        },        {
            "username":"charan",
            "password":"kumar"
        },
        {
            "username":"vinay",
            "password":"kumar"
        },        {
            "username":"charan",
            "password":"kumar"
        },
        {
            "username":"vinay",
            "password":"kumar"
        },        {
            "username":"charan",
            "password":"kumar"
        },
        {
            "username":"vinay",
            "password":"kumar"
        }
        
        ]
res.json(user);
})
router.get('/userdata',(req,res)=>{
    let user=[
        {
            "username":"charan",
            "password":"kumar"
        },
        {
            "username":"vinay",
            "password":"kumar"
        },        {
            "username":"charan",
            "password":"kumar"
        },
        {
            "username":"vinay",
            "password":"kumar"
        },
        {
            "username":"charan",
            "password":"kumar"
        },
        {
            "username":"vinay",
            "password":"kumar"
        },
        {
            "username":"charan",
            "password":"kumar"
        },
        {
            "username":"vinay",
            "password":"kumar"
        }
        
        ]
res.json(user);
})
module.exports=router;