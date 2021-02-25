module.exports = {
    friendlyName: "Orghierachlevels",
  
    description: "Displays List of Orghierachlevels",
  
    exits: {
      success: {
        viewTemplatePath: "pages/orghierachlevel/list",
      },
    },
  
    fn: async function () {
      var data = await Orghierachlevel.find({
        Org_Name: this.req.params.id 
      });
      return {
        orghierachlevelData: data,
      };
    },
  };