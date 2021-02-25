module.exports = {


    friendlyName: 'Update orghierachlevel',  
  
    description: 'Update orghierachlevel.',  
    inputs: {
      id: {
        type: 'number'
      },
      Org_Name: {
        type: 'string'
      },
        
      Org_Level:  {
        type: 'string'        
      },
      Org_description:  {
        type: 'string'        
      }
  
    },  
  
    exits: {
      success: {
        viewTemplatePath: 'pages/orghierachlevel/list',
        description: 'Success',
      },
    },
    fn: async function (inputs, exits) {

 
    var updatedOrghierachlevel= await Orghierachlevel.updateOne({
        id: inputs.id}).set({
        Org_Name: inputs.Org_Name,
        Org_Level: inputs.Org_Level,
        Org_description:inputs.Org_description
     });

     var data = await Orghierachlevel.find({}); 
       
     return exits.success({
      //return this.res.redirect('faq/' + inputs.alias);
      message: 'updated successfully.',
      orghierachlevelData:data


    });


    

        
  }
  
  
  };
  