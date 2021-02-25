module.exports = {
    friendlyName: "Fnperiod",
  
    description: "Create New Fnperiods",

    inputs: {

      

        Organization:
          {
            type:"string",
            required:true
          },
          Financia_year:
          {
            type:"string",
            required:true
          },
           Start_date:
          {
            type:"string",
            required:true
          },
          End_date:
          {
            type:"string",
            required:true
          }
        
  
    },
    exits: {
      success: {
        viewTemplatePath: 'pages/fnperiod/list',
        description: "Successful",
      },
    },

    fn: async function (inputs,exits) {    
      var data= await Fnperiod.create({Organization:inputs.Organization,Financia_year:inputs.Financia_year,Start_date:inputs.Start_date,End_date:inputs.End_date}).exec(function(err){
        if(err){
          res.send(500, {err: "some error occured"});
        }
       
      });

      var data = await Fnperiod.find({}); 
      return exits.success({         
        message: 'User has been deleted successfully.',
        fnperiodData:data,      
  
      });
    
 
    },
  };