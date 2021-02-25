module.exports = {


  friendlyName: 'Delete fundtype',


  description: '',


  inputs: {
    id: {
      type: 'number'
    },

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/fundtype/list',
      description: "Successful",
    },

  },


  fn: async function (inputs,exits) {

    var FundtypeRecord = await Fundtype.destroy({
      id: inputs.id   

  });

  var data = await Fundtype.find({});

    // All done.
    return exits.success({
      //return this.res.redirect('faq/' + inputs.alias);
      message: 'deleted successfully.',
      fundtypeData:data,  


    });

  }


};
