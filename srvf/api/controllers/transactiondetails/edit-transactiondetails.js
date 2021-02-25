module.exports = {

    
    friendlyName: "Transaction  Details",
  
    description: "Edit Transaction Details",

    inputs: {
      id: {
        type: 'number'
     },
      Station:{
        type:"string",
       
     }, 
      District:{
         type:"string",
        
     }, 
      Pastor:{
        type:"string",
       
     },
      Return_Period:{
        type:"string",
       
     },
      Report_Period:{
        type:"string",
       
     }, 
     Transaction_Date:{
      type:"string",
     
     }, 
      Bank:{
       type:"string",
      
     },
     Account_Number:{
       type:"number",
      
     },    
      Mode_of_Deposit:{
      type:"string",
     
     },
     Amount:{
      type:"number",
     
     }, 
     Reference_No:{
      type:"string",
     
     },    
     Narration:{
      type:"string",
     
     },     
     Drawer:{
      type:"string",
     
     },
  },
   
   
   
    exits: {
      success: {
        viewTemplatePath: 'pages/transactiondetails/list',
        description: 'Success',
      },
    },
    fn: async function (inputs, exits) {

      console.log(inputs.Drawer);

       
      var updatedTransactiondetails= await Transactiondetails.updateOne({
        id: inputs.id}).set({
        Station: inputs.Station,
        District: inputs.District,
        Pastor: inputs.Pastor,
        Return_Period: inputs.Return_Period,
        Report_Period: inputs.Report_Period,
        Transaction_Date: inputs.Transaction_Date,
        Bank: inputs.Bank,
        Account_Number: inputs.Account_Number,
        Mode_of_Deposit: inputs.Mode_of_Deposit,
        Reference_No: inputs.Reference_No,
        Amount: inputs.Amount,    
        Narration: inputs.Narration,
        Drawer: inputs.Drawer, 
        });
     var data = await Transactiondetails.find({}); 
       
     return exits.success({
      //return this.res.redirect('faq/' + inputs.alias);
      message: 'updated successfully.',
      transactiondetailsData:data
    });


    

        
  }
  
  
  };
  