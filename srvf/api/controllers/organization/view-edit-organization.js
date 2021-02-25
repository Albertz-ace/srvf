module.exports = {


  friendlyName: 'View organization edit',


  description: 'Display "Organization edit" page.',

    exits: {

    success: {
      viewTemplatePath: 'pages/organization/edit-organization'
    }

  },


  fn : async function (req,res) {

   console.log(this.req.params.id );
    var organization = await Organization.findOne({ id:this.req.params.id });  
    
    // Respond with view. 
    return {
      organizationData: organization,     

    };

  },




};
