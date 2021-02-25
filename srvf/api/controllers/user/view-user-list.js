module.exports = {
    friendlyName: "user",
  
    description: "Displays List of user",
  
    exits: {
      success: {
        viewTemplatePath: "pages/user/list",
      },
    },
  
    fn: async function () {
      var data = await User.find({});
      return {
        userData: data,
      };
    },
  };