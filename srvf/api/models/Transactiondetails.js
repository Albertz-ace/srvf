/**
 * TransactionDetails.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {


  attributes: {
    Station:{
      type:"string",
      required:true
   }, 
    District:{
       type:"string",
       required:true
   }, 
    Pastor:{
      type:"string",
      required:true
   },
    Return_Period:{
      type:"string",
      required:true
   },
    Report_Period:{
      type:"string",
      required:true
   },    
   Transaction_Date:{
    type:"string",
    required:true
 }, 
    Bank:{
     type:"string",
     required:true
   },
   Account_Number:{
     type:"number",
     required:true
   },    
    Mode_of_Deposit:{
    type:"string",
    required:true
   },
   Amount:{
    type:"number",
    required:true
   }, 
   Reference_No:{
    type:"string",
    required:true
   },    
   Narration:{
    type:"string",
    required:true
   },     
   Drawer:{
    type:"string",
    required:true
   },
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

