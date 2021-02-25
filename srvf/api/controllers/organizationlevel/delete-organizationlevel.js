module.exports = {


  friendlyName: 'Delete Organizationlevel',


  description: '',


  inputs: {
    id: {
      type: 'number'
    },

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/organizationlevel/list',
      description: "Successful",
    },

  },

  fn: async function (inputs,exits) {

    var OrganizationlevelRecord = await Organizationlevel.destroy({
      id: inputs.id   

  });

  var data = await Organizationlevel.find({});

    // All done.
    return exits.success({
      //return this.res.redirect('faq/' + inputs.alias);
      message: 'deleted successfully.',
      organizationlevelData:data,  


    });

  }


};
