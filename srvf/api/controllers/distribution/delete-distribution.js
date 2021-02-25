module.exports = {


  friendlyName: 'Delete Offering',


  description: '',


  inputs: {
    id: {
      type: 'number'
    },

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/offering/list',
      description: "Successful",
    },

  },

  fn: async function (inputs,exits) {

    var OfferingRecord = await Offering.destroy({
      id: inputs.id   

  });

  var data = await Offering.find({});

    // All done.
    return exits.success({
      //return this.res.redirect('faq/' + inputs.alias);
      message: 'deleted successfully.',
      offeringData:data,  


    });

  }


};
