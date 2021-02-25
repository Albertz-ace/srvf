module.exports = {


  friendlyName: 'View welcome page',


  description: 'Display the dashboard "Welcome" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/welcome',
      description: 'Display the welcome page for authenticated users.'
    },

  },


  fn: async function () {

    var data = await User.count({});
    var organizations = await Organization.count({});
    var Tamount = await Transactiondetails.sum('Amount');
    var Tamountdistributed = await Distribution.sum('Amount');
    //var churches = await Church.count({});
    //var contributions = await Offering.sum('Amount');
    //var churchmember = await Churchmember.count({});

    return {
      userData: data,
      organizationsData: organizations,
      Tamount,
      Tamountdistributed,

      //churchData: churches,
      //contributions,
      //churchmember,

    };

    

  }


};
