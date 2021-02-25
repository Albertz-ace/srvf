module.exports = {
    friendlyName: "Orghierachlevels",
  
    description: "Displays List of Orghierachlevels",
  
    exits: {
      success: {
        viewTemplatePath: "pages/orghierachlevel/list",
      },
    },
  
    fn: async function () {
      var data = await Orghierachlevel.find({});
      return {
        orghierachlevelData: data,
      };
    },
  };