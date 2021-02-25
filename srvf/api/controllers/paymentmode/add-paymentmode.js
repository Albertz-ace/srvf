module.exports = {
    friendlyName: "Paymentmode",
  
    description: "Create New Paymentmodes",

    inputs: {
      paymentmode: {
        required: true,
        type: 'string',
        description: 'Name of the paymentmode',
        extendedDescription: 'Must be a valid Paymentmode Name',
      },      
  
    },
    exits: {
      success: {
        viewTemplatePath: 'pages/paymentmode/list',
        description: "Successful",
      },
    },

    fn: async function (inputs,exits) {    
      var data= await Paymentmode.create({paymentmode:inputs.paymentmode}).exec(function(err){
        if(err){
          res.send(500, {err: "some error occured"});
        }
       
      });

      var data = await Paymentmode.find({}); 
      return exits.success({         
        message: 'Created successfully.',
        paymentmodeData:data,      
  
      });
    
 
    },
  };