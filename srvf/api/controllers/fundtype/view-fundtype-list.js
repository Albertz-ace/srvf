module.exports = {
    friendlyName: "Usergroups",
  
    description: "Displays List of Usergroups",
  
    exits: {
      success: {
        viewTemplatePath: "pages/fundtype/list",
      },
    },
  
    fn: async function () {
      var data = await Fundtype.find({});
      return {
        fundtypeData: data,
      };
    },
  };