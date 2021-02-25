module.exports = {

    
    friendlyName: "Bank Details",
  
    description: "Create New Bank Details",

    inputs: {
      id: {
        type: 'number'
      },
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
        description: 'Success',
      },
    },
    fn: async function (inputs, exits) {

       
      var updatedBankDetails= await BankDetails.updateOne({
        id: inputs.id}).set({Bank_Name:inputs.Bank_Name,Branch:inputs.Branch,Bank_Code:inputs.Bank_Code,Account_Number:inputs.Account_Number});
     var data = await BankDetails.find({}); 
       
     return exits.success({
      //return this.res.redirect('faq/' + inputs.alias);
      message: 'updated successfully.',
      bankdetailsData:data


    });


    

        
  }
  
  
  };
  