module.exports = {


    friendlyName: 'Update paymentmode',  
  
    description: 'Update paymentmode.',  
    inputs: {
      id: {
        type: 'number'
      },
      paymentmode: {
        type: 'string'
      },
    },  
  
    exits: {
      success: {
        viewTemplatePath: 'pages/paymentmode/list',
        description: 'Success',
      },
    },
    fn: async function (inputs, exits) {

    var updatedUsergroup= await Paymentmode.updateOne({
        id: inputs.id}).set({
          paymentmode: inputs.paymentmode,
         
     });

     var data = await Paymentmode.find({}); 
       
     return exits.success({
      //return this.res.redirect('faq/' + inputs.alias);
      message: 'updated successfully.',
      paymentmodeData:data


    });    
  }
};
  