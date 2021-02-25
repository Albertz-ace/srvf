module.exports = {
    friendlyName: "Orghierachlevel",
  
    description: "Create New Orghierachlevels",

    inputs: {
      Org_Name: {
        required: true,
        type: 'string',
        description: 'Name of the orghierachlevel',
        extendedDescription: 'Must be a valid Orghierachlevel Name',
      },
        
      Org_Level:  {
        required: true,
        type: 'string',
        example: '1',
        description: 'Orghierachlevel Level',
      },
      Org_description:  {
        required: true,
        type: 'string',
        example: '1',
        description: 'Orghierachlevel description',
      }

  
    },
    exits: {
      success: {
        viewTemplatePath: 'pages/orghierachlevel/list',
        description: "Successful",
      },
    },

    fn: async function (inputs,exits) {    
      var data= await Orghierachlevel.create({Org_Name:inputs.Org_Name,Org_Level:inputs.Org_Level,Org_description:inputs.Org_description}).exec(function(err){
        if(err){
          res.send(500, {err: "some error occured"});
        }
       
      });

      var data = await Orghierachlevel.find({}); 
      return exits.success({         
        message: 'Added successfully.',
        orghierachlevelData:data,      
  
      });
    
 
    },
  };