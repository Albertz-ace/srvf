module.exports = {


  friendlyName: 'Delete Bankdetails',


  description: '',


  inputs: {
    id: {
      type: 'number'
    },

  },

  exits: {
    success: {
      viewTemplatePath: 'pages/bankdetails/list',
      description: "Successful",
    },

  },

  fn: async function (inputs,exits) {

    var BankdetailsRecord = await Bankdetails.destroy({
      id: inputs.id   

  });

  var data = await Bankdetails.find({});

    // All done.
    return exits.success({
      //return this.res.redirect('faq/' + inputs.alias);
      message: 'deleted successfully.',
      bankdetailsData:data,  


    });

  }


};
