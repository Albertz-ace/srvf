module.exports = {
    friendlyName: "transactiondetails",
  
    description: "Displays List of Transactiondetails",
  
    exits: {
      success: {
        viewTemplatePath: "pages/transactiondetails/list",
      },
    },
  
    fn: async function () {
      var data = await Transactiondetails.find({});
      var Tamount = await Transactiondetails.sum('Amount');
     // var transactioncount = await Transactioncount.find({});


      //var Tcount = await Transactiondetails.count('Amount');

      return {
        transactiondetailsData: data,
        Tamount,
        //Tcount,
       // transactioncount,
      };
    },
  };