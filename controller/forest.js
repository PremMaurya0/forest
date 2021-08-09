const db = require('../DbConnection');
var _=require("underscore");
var forest = {

   
    forestdata:function(obj,callback){
 
        var sqlquery = "select * from forest_table where student=? and year=?";
          db.query(sqlquery,[obj.student,obj.year], function (error,result) {
           if (error) {
               throw error;
           }
           else{

                if(result.length>0){
                    callback(result[0],null);

                }else{
                    callback(0,null);
                }
          
            }

          });
     },
     forestupdate:function(obj,callback){
 
          var sqlquery = "select * from forest_table where student=? and year=?";
          db.query(sqlquery,[obj.student,obj.year], function (error,result) {
           if (error) {
               throw error;
           }
           else{

                if(result.length>0){

                    var sqlquery = "update forest_table set treeused=?, paper=?, spent=?, gigatones=?, gallons=?, tonnes=?,animals=?,ton=? where id=?";
                    db.query(sqlquery,[obj.treeused,obj.paper,obj.spent,obj.gigatones,obj.gallons,obj.tonnes,obj.animals,obj.ton,result[0].id], function (error,results) {
                     if (error) {
                         throw error;
                     }
                     else{
                        callback("Updated Record!!",null);
                     }

                    });

                }else{
  
                    var sqlquery = "insert into forest_table (student,year,treeused,paper,spent,gigatones,gallons,tonnes,animals,ton) VALUES ('"+obj.student+"','"+obj.year+"','"+obj.treeused+"', '"+obj.paper+"','"+obj.spent+"','"+obj.gigatones+"','"+obj.gallons+"','"+obj.tonnes+"','"+obj.animals+"','"+obj.ton+"')";
                    db.query(sqlquery, function (error,results) {
                     if (error) {
                         throw error;
                     }
                     else{
                        callback("1 Insert Record!!",null);
                     }

                    });



                }
          
            }

          });
     }
     
}

  module.exports =forest;