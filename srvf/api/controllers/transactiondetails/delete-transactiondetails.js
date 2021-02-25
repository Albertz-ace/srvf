module.exports = {


  friendlyName: 'Delete Transactiondetails',


  description: '',


  inputs: {
    id: {
      type: 'number'
    },

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/transactiondetails/list',
      description: "Successful",
    },

  },

  fn: async function (inputs,exits) {

    var TransactiondetailsRecord = await Transactiondetails.destroy({
      id: inputs.id   

  });

  var data = await Transactiondetails.find({});

    // All done.
    return exits.success({
      //return this.res.redirect('faq/' + inputs.alias);
      message: 'deleted successfully.',
      transactiondetailsData:data,  


    });

  }


};
