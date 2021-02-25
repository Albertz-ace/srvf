/**
 * Organizationlevel.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  
  attributes: {
    Hierachy_level:{
      type:"string",
      required:true
    }, 
    Parent_level:{
      type:"string",
      required:true
    },      
    Level_Name:{
      type:"string",
      required:true
    }, 
     Continent:{
      type:"string",
      required:true
    },
    Region:{
      type:"string",
      required:true
    },
    Country:{
      type:"string",
      required:true
    }, 
    State:{
      type:"string"
    }, 
    County:{
      type:"string"
    },
    Telephone:{
      type:"number",
      required:true
    }, 
    Email_Address:{
      type:"string"
    }, 
    Postal_Address:{
      type:"string"
    },
    Currency:{
      type:"string"
    },  
    GL_Account_Code:{
      type:"number"
    },
    Transaction_Code:{
      type:"number"
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

