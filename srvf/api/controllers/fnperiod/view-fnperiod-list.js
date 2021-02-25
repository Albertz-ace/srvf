module.exports = {
    friendlyName: "Fnperiods",
  
    description: "Displays List of Fnperiods",
  
    exits: {
      success: {
        viewTemplatePath: "pages/fnperiod/list",
      },
    },
  
    fn: async function () {
      var data = await Fnperiod.find({});
      return {
        fnperiodData: data,
      };
    },
  };