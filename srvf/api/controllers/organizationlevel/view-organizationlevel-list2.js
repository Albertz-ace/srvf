module.exports = {
    friendlyName: "Organizationlevels",
  
    description: "Displays List of Organizationlevels",
  
    exits: {
      success: {
        viewTemplatePath: "pages/organizationlevel/list",
      },
    },
  
    fn: async function () {
      var data = await Organizationlevel.find({
        Level_Name: this.req.params.id 
      });
      return {
        organizationlevelData: data,
      };
    },
  };