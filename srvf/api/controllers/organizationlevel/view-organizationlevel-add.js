module.exports = {
    friendlyName: "Organizationlevel",
  
    description: "Create New Organizationlevel",

    exits: {
      success: {
        viewTemplatePath: "pages/organizationlevel/add-organizationlevel",
      },
    },

    fn: async function () {

      var organizationlevel = await Organizationlevel.find({});
      var orghierachlevel = await Orghierachlevel.find({});

      return {
        organizationlevelData:organizationlevel,
        orghierachlevelData:orghierachlevel,

      };
  
    }

 };