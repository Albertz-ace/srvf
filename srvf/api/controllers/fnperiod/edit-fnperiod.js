module.exports = {


    friendlyName: 'Update fnperiod',  
  
    description: 'Update fnperiod.',  
    inputs: {
      id: {
        type: 'number'
      },
      Organization:
          {
            type:"string",
          },
          Financia_year:
          {
            type:"string",
          },
           Start_date:
          {
            type:"string",
          },
          End_date:
          {
            type:"string",
          }
  
    },  
  
    exits: {
      success: {
        viewTemplatePath: 'pages/fnperiod/list',
        description: 'Success',
      },
    },
    fn: async function (inputs, exits) {

 
    var updatedFnperiod= await Fnperiod.updateOne({
        id: inputs.id}).set({Organization:inputs.Organization,Financia_year:inputs.Financia_year,Start_date:inputs.Start_date,End_date:inputs.End_date
     });

     var data = await Fnperiod.find({}); 
       
     return exits.success({
      //return this.res.redirect('faq/' + inputs.alias);
      message: ' updated successfully.',
      fnperiodData:data


    });


    

        
  }
  
  
  };
  