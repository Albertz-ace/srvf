module.exports = {


  friendlyName: 'Delete paymentmode',


  description: '',

  inputs: {
    id: {
      type: 'number'
    },

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/paymentmode/list',
      description: "Successful",
    },

  },


  fn: async function (inputs,exits) {

    var PaymentmodeRecord = await Paymentmode.destroy({
      id: inputs.id   

  });

  var data = await Paymentmode.find({});

    // All done.
    return exits.success({
      //return this.res.redirect('faq/' + inputs.alias);
      message: 'deleted successfully.',
      paymentmodeData:data,  


    });

  }


};
