module.exports = {
    friendlyName: "bankdetails",
  
    description: "Displays List of Bankdetails",
  
    exits: {
      success: {
        viewTemplatePath: "pages/bankdetails/list",
      },
    },
  
    fn: async function () {
      var data = await Bankdetails.find({});
      return {
        bankdetailsData: data,
      };
    },
  };