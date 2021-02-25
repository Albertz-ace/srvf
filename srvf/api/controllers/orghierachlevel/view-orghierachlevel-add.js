module.exports = {
    friendlyName: "Orghierachlevels",
  
    description: "Create New Orghierachlevels",

    exits: {
      success: {
        viewTemplatePath: "pages/orghierachlevel/add-orghierachlevel",
      },
    },

    fn: async function () {

      var data2= await Organization.find({});

      return {

        organizationData: data2,
      };
  
    }

 };