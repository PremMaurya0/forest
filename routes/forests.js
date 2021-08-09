const express = require('express');
const router = express.Router();
const forest = require('../controller/forest');

module.exports=function(){

    router.post('/v1/getdata', function(req, res) {
        if(req.body.student=="" || req.body.student==undefined){
            res.json({error:true,message:"student is missing"});
        }
        else if(req.body.year=="" || req.body.year==undefined){
            res.json({error:true,message:"year is missing"});
        }else{
            let obj={...req.body}
            console.log(obj);
            forest.forestdata(obj,data=>{
                console.log(data);
                res.json({error:false,message:data});
            })
        }
        
        
    });

    router.post('/v1/updatedata', function(req, res) {
        if(req.body.student=="" || req.body.student==undefined){
            res.json({error:true,message:"student is missing"});
        }
        else if(req.body.year=="" || req.body.year==undefined){
            res.json({error:true,message:"year is missing"});
        }else{
            let obj={...req.body}
            //console.log(obj);
            forest.forestupdate(obj,data=>{
                console.log(data);
                res.json({error:false,message:data});
            })
        }
        
        
    });
 

    return router;
}
