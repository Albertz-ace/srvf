module.exports = {


  friendlyName: 'Delete orghierachlevel',


  description: '',


  inputs: {
    id: {
      type: 'number'
    },

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/orghierachlevel/list',
      description: "Successful",
    },

  },


  fn: async function (inputs,exits) {

    var OrghierachlevelRecord = await Orghierachlevel.destroy({
      id: inputs.id   

  });

  var data = await Orghierachlevel.find({});

    // All done.
    return exits.success({
      //return this.res.redirect('faq/' + inputs.alias);
      message: 'User has been deleted successfully.',
      orghierachlevelData:data,  


    });

  }


};
