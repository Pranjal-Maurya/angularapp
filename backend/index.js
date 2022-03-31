const express = require('express');
const bodyparser = require('body-parser');
const cors= require('cors');
const mysql= require('mysql2');
const app= express();
app.use(cors());

app.use(bodyparser.json());

//db connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'simpledb',
    port:3306
})

//check database connection

db.connect(err=>
{
    if(err)
{
    console.log(err);
}
console.log('db connected');
})


app.get('/user', (req,res)=>{
    console.log('get users');
    let qr  = `select * from  user`;

db.query(qr,(err,result)=>{
if(err)
{
    console.log(err);
}    
if(result.length>0)
{
    res.send({
        message:'all user data',
        data:result
    })
}
})
})


app.post('/user',(req,res)=>{
    console.log(req.body,'createddata');
    let Fullname = req.body.fullname;
    let Email = req.body.email;
    let Mb = req.body.mobileno;
  let qr = `insert into user(fullname, email , mobileno) values('${Fullname}','${Email}','${Mb}')`;

  db.query(qr, (err,result)=>{
if(err){
    console.log(err);
}  
console.log(result);    
res.send({message:'datainserted'});

})


}
    );



app.listen(3000,()=>{
console.log('running....');
})