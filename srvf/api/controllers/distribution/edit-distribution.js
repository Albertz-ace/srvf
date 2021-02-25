module.exports = {
    
    friendlyName: "Distribution",
  
    description: "Create New Distribution",

    inputs: {
      id: {
        type: 'number'
      },
      fund_Type:{
        type:"string",
        required:true
      },
      Amount:{
        type:"number",
        required:true
      },
  
    },
  
    exits: {
      success: {
        viewTemplatePath: 'pages/distribution/list',
        description: 'Success',
      },
    },
    fn: async function (inputs, exits) {

       
      var updatedDistribution= await Distribution.updateOne({
        id: inputs.id}).set({fund_Type:inputs.fund_Type,Amount:inputs.Amount });
        
     //var data = await Distribution.find({where: {Giving_Type:"Give"}});
     var data = await Distribution.find({});
     //var data2= await Distribution.find({where: {Giving_Type:"Donate"}});
     //var data4= await Tithe.find({});
     //var church = await Tithe.sum('Church');
     // var division = await Tithe.sum('Division');
     // var conference = await Tithe.sum('Cofference');
     // var union = await Tithe.sum('Unions');
       
     return exits.success({
      //return this.res.redirect('faq/' + inputs.alias);
      message: 'updated successfully.',
      distributionData:data,
      //donationData: data2,
      //titheData:data4,  
      //church ,
      //division ,
      //conference ,
      //union ,


    });
  }
  
  
  };
  