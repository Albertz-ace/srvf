module.exports = {

    
    friendlyName: "",
  
    description: "Create New Organization Level",

    inputs: {
      id: {
        type: 'number'
      }, Hierachy_level:{
        type:"string",
        required:true
      }, 
      Parent_level:{
        type:"string",
        required:true
      },
      Level_Name:{
        type:"string",
        required:true
      },  
      Continent:{
         type:"string",
         required:true
       },
      Region:{
        type:"string",
        required:true
      },
      Country:{
        type:"string",
        required:true
      }, 
      State:{
        type:"string"
      }, 
      County:{
        type:"string"
      },
      Telephone:{
        type:"number",
        required:true
      }, 
      Email_Address:{
        type:"string"
      }, 
      Postal_Address:{
        type:"string"
      },
      Currency:{
        type:"string"
      },  
      GL_Account_Code:{
        type:"number"
      },
      Transaction_Code:{
        type:"number"
      },
  
    },
  
    exits: {
      success: {
        viewTemplatePath: 'pages/organizationlevel/list',
        description: 'Success',
      },
    },
    fn: async function (inputs, exits) {

       
      var updatedOrganizationlevel= await Organizationlevel.updateOne({
        id: inputs.id}).set({Hierachy_level:inputs.Hierachy_level,Parent_level:inputs.Parent_level,Level_Name:inputs.Level_Name,Continent:inputs.Continent,Region:inputs.Region,Country:inputs.Country,State:inputs.State,County:inputs.County,Telephone:inputs.Telephone,Email_Address:inputs.Email_Address,Postal_Address:inputs.Postal_Address,Currency:inputs.Currency,GL_Account_Code:inputs.GL_Account_Code,Transaction_Code:inputs.Transaction_Code});
     var data = await Organizationlevel.find({}); 
       
     return exits.success({
      //return this.res.redirect('faq/' + inputs.alias);
      message: 'updated successfully.',
      organizationlevelData:data


    });


    

        
  }
  
  
  };
  