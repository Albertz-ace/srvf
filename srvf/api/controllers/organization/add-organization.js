module.exports = {
    friendlyName: "Organization",
  
    description: "Create New Organizations",

    inputs: {
      Org_Name: {
        required: true,
        type: 'string',
        description: 'Name of the organization',
        extendedDescription: 'Must be a valid Organization Name',
      },
        
      Org_Level:  {
        required: true,
        type: 'string',
        example: '1',
        description: 'Organization Level',
      }
  
    },
    exits: {
      success: {
        viewTemplatePath: 'pages/organization/list',
        description: "Successful",
      },
    },

    fn: async function (inputs,exits) {    
      var data= await Organization.create({Org_Name:inputs.Org_Name,Org_Level:inputs.Org_Level}).exec(function(err){
        if(err){
          res.send(500, {err: "some error occured"});
        }
       
      });

      var data = await Organization.find({}); 
      return exits.success({         
        message: 'User has been deleted successfully.',
        organizationData:data,      
  
      });
    
 
    },
  };