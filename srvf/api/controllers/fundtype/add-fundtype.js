module.exports = {
    friendlyName: "Fundtype",
  
    description: "Create New Fundtypes",

    inputs: {
      fundtype: {
        required: true,
        type: 'string',
        description: 'Name of the fundtype',
        extendedDescription: 'Must be a valid Fundtype Name',
      },
      Category:
      {
        type:"string",
        required:true
      },
     
  
    },
    exits: {
      success: {
        viewTemplatePath: 'pages/fundtype/list',
        description: "Successful",
      },
    },

    fn: async function (inputs,exits) {    
      var data= await Fundtype.create({fundtype:inputs.fundtype,Category:inputs.Category}).exec(function(err){
        if(err){
          res.send(500, {err: "some error occured"});
        }
       
      });

      var data = await Fundtype.find({}); 
      return exits.success({         
        message: 'User has been deleted successfully.',
        fundtypeData:data,      
  
      });
    
 
    },
  };