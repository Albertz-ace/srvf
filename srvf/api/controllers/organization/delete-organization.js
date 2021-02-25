module.exports = {


  friendlyName: 'Delete organization',


  description: '',


  inputs: {
    id: {
      type: 'number'
    },

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/organization/list',
      description: "Successful",
    },

  },


  fn: async function (inputs,exits) {

    var OrganizationRecord = await Organization.destroy({
      id: inputs.id   

  });

  var data = await Organization.find({});

    // All done.
    return exits.success({
      //return this.res.redirect('faq/' + inputs.alias);
      message: 'User has been deleted successfully.',
      organizationData:data,  


    });

  }


};
