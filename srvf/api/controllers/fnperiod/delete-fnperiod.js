module.exports = {


  friendlyName: 'Delete fnperiod',


  description: '',


  inputs: {
    id: {
      type: 'number'
    },

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/fnperiod/list',
      description: "Successful",
    },

  },


  fn: async function (inputs,exits) {

    var FnperiodRecord = await Fnperiod.destroy({
      id: inputs.id   

  });

  var data = await Fnperiod.find({});

    // All done.
    return exits.success({
      //return this.res.redirect('faq/' + inputs.alias);
      message: 'User has been deleted successfully.',
      fnperiodData:data,  


    });

  }


};
