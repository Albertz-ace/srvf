/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

//const Usergroup = require("../../models/Usergroup");
const User = require("../../models/User");

module.exports = {


  get:function(req,res){
    User.find()
    .populate('roles')
        .exec(function(err,user){
          if(err)
          {
            return res.json(err);
          }
          return res.json(users)
          
        })
    },
    getRoles:function(req,res){
      var emailAddress=req.params.emailAddress;
      User.find({emailAddress:emailAddress})
      .populate("roles")
          .exec(function(err,user){
            if(err)
            {
              return res.json(err);
            }
            return res.json(users)
            
          })
      }
};

