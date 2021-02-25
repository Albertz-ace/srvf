module.exports = {
    friendlyName: "Distribution",
  
    description: "Create New Distribution",

    exits: {
      success: {
        viewTemplatePath: "pages/distribution/add-distribution",
      },
    },

    fn: async function () {

      var data3= await Fundtype.find({});
      var data3= await Distribution.find({})
      .sort('owner DESC')
      .limit(1);
      


      return {
        
        fundtypedata:data3,
        DistributionId:data3
        
      };
  
    }

 };