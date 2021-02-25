module.exports = {
    friendlyName: "Bankdetails",
  
    description: "Create Bankdetails",

    inputs: {
      Bank_Name:{
        type:"string",
        required:true
      }, 
      Branch:{
         type:"string",
         required:true
       }, 
       Bank_Code:{
        type:"string",
        required:true
      },
       Account_Number:{
        type:"string",
        required:true
      },
  },
  
    exits: {
      success: {
        viewTemplatePath: 'pages/bankdetails/list',
        description: "Successful",
      },
    },

    fn: async function (inputs,exits) {    
      Bankdetails.create({Bank_Name:inputs.Bank_Name,Branch:inputs.Branch,Bank_Code:inputs.Bank_Code,Account_Number:inputs.Account_Number}).exec(function(err){
        if(err){
          res.send(500, {err: "some error occured"});
        }

      
      });

      
      var data = await Bankdetails.find({});
      return exits.success({         
        message: 'bankdetails has been created successfully.',
        bankdetailsData:data,       
  });
 
    },
  };