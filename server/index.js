import express from 'express';
import path from 'path';

let app = express()

app.get('/*' ,(req,res)=>{

    res.sendfile(path.join(__dirname,'./index.html'));
})

app.listen(3000,()=>console.log("server running at 3000"));