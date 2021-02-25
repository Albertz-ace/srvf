module.exports = {
    friendlyName: "Usergroups",
  
    description: "Displays List of Usergroups",
  
    exits: {
      success: {
        viewTemplatePath: "pages/paymentmode/list",
      },
    },
  
    fn: async function () {
      var data = await Paymentmode.find({});
      return {
        paymentmodeData: data,
      };
    },
  };