module.exports = {


    friendlyName: 'Update organization',  
  
    description: 'Update organization.',  
    inputs: {
      id: {
        type: 'number'
      },
      Org_Name: {
        type: 'string'
      },
        
      Org_Level:  {
        type: 'string'        
      }
  
    },  
  
    exits: {
      success: {
        viewTemplatePath: 'pages/organization/list',
        description: 'Success',
      },
    },
    fn: async function (inputs, exits) {

 
    var updatedOrganization= await Organization.updateOne({
        id: inputs.id}).set({
        Org_Name: inputs.Org_Name,
        Org_Level: inputs.Org_Level
     });

     var data = await Organization.find({}); 
       
     return exits.success({
      //return this.res.redirect('faq/' + inputs.alias);
      message: 'User has been updated successfully.',
      organizationData:data


    });


    

        
  }
  
  
  };
  