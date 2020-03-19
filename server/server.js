const express=require('express');
const app=express();
const cors=require('cors')
app.use(express.json());
app.use(cors());
const route=require('./route')
app.use(route);
// app.get('/',(req,res)=>{
//     res.send("hello world");
// })
app.listen(3000,()=>{
    console.log("port3000");
    
})
