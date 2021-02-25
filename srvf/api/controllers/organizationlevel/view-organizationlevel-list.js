module.exports = {
    friendlyName: "organizationlevel",
  
    description: "Displays List of Organizationlevel",
  
    exits: {
      success: {
        viewTemplatePath: "pages/organizationlevel/list",
      },
    },
  
    fn: async function () {
      var data = await Organizationlevel.find({});
      return {
        organizationlevelData: data,
      };
    },
  };