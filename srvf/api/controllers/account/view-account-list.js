module.exports = {


  friendlyName: 'View account list',


  description: 'Display "Account list" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/account/list'
    }

  },


  fn: async function () {

    var data = await User.find({});
    return {
      userData: data,
    };
  },


};
