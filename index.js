const express=require("express");
const app=express();

const port=8080;

app.get("/request",(req,res)=>{
    let {user,password}=req.query;

    res.send(`Welcome ${user} your password is safe with us`);
});

// app.post("/request",(req,res)=>{
//     let {user,password}=req.query;

//     res.send(`Welcome ${user,password} your password is safe with us`);       //it wont work bcs post dosent sent data in query string
// });


/// FOR THAT SAME WE ARE HANDLING POST REQUEST (JISME HUMME BODY ME VALUES MILLE GI) 


app.use(express.urlencoded({extended:true}));

app.post("/request",(req,res)=>{
    let {user,pass}=req.body;
    res.send(`Welcome @${user}, your password is safe with us`);
});



app.listen(port,()=>{
    console.log(`listening on port ${port} `);
});