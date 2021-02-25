module.exports = {


  friendlyName: 'Delete User',


  description: '',


  inputs: {
    id: {
      type: 'number'
    },

  },

  exits: {
    success: {
      viewTemplatePath: 'pages/user/list',
      description: "Successful",
    },

  },

  fn: async function (inputs,exits) {

    var BankdetailsRecord = await User.destroy({
      id: inputs.id   

  });

  var data = await User.find({});

    // All done.
    return exits.success({
      //return this.res.redirect('faq/' + inputs.alias);
      message: 'deleted successfully.',
      bankdetailsData:data,  


    });

  }


};
