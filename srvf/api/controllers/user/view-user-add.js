module.exports = {
    friendlyName: "Bankdetails",
  
    description: "Create New Bankdetails",

    exits: {
      success: {
        viewTemplatePath: "pages/user/add-user",
      },
    },

    fn: async function () {
      var data2= await Organization.find({});
      return {
        organizationData: data2,
      };

    
    }

 };