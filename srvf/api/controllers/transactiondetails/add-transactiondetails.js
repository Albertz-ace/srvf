module.exports = {
    friendlyName: "Transactiondetails",
  
    description: "Create Transactiondetails",

    inputs: {
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
  },
  
    exits: {
      success: {
        viewTemplatePath: 'pages/transactiondetails/list',
        description: "Successful",
      },
    },

    fn: async function (inputs,exits) {    
      Transactiondetails.create({
        Station:inputs.Station,
        District:inputs.District,
        Pastor:inputs.Pastor,
        Return_Period:inputs.Return_Period,
        Report_Period:inputs.Report_Period,
        Transaction_Date:inputs.Transaction_Date,
        Bank:inputs.Bank,
        Account_Number:inputs.Account_Number,
        Mode_of_Deposit:inputs.Mode_of_Deposit,
        Reference_No:inputs.Reference_No,
        Amount:inputs.Amount,    
        Narration:inputs.Narration,
        Drawer:inputs.Drawer,    
      }).exec(function(err){
        if(err){
          res.send(500, {err: "some error occured"});
        }

      
      });

      
      var data = await Transactiondetails.find({});
      return exits.success({         
        message: 'transactiondetails has been created successfully.',
        transactiondetailsData:data,       
  });
 
    },
  };