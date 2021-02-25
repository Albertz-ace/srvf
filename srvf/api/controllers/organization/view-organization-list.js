module.exports = {
    friendlyName: "Organizations",
  
    description: "Displays List of Organizations",
  
    exits: {
      success: {
        viewTemplatePath: "pages/organization/list",
      },
    },
  
    fn: async function () {
      var data = await Organization.find({});
      return {
        organizationData: data,
      };
    },
  };