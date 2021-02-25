module.exports = {


    friendlyName: 'Update fundtype',  
  
    description: 'Update fundtype.',  
    inputs: {
      id: {
        type: 'number'
      },
      fundtype: {
        type: 'string'
      },
        
  
    },  
  
    exits: {
      success: {
        viewTemplatePath: 'pages/fundtype/list',
        description: 'Success',
      },
    },
    fn: async function (inputs, exits) {

 
    var updatedUsergroup= await Fundtype.updateOne({
        id: inputs.id}).set({
          fundtype: inputs.fundtype,
          Category:inputs.Category,
     });

     var data = await Fundtype.find({}); 
       
     return exits.success({
      //return this.res.redirect('faq/' + inputs.alias);
      message: 'updated successfully.',
      fundtypeData:data


    });


    

        
  }
  
  
  };
  