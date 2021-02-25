module.exports = {


  friendlyName: "Organizationlevel",
  
  description: "Create New Organizationlevel",

    exits: {

    success: {
      viewTemplatePath: 'pages/organizationlevel/edit-organizationlevel'
    }

  },


  fn : async function (req,res) {

   console.log(this.req.params.id );
    var organizationlevel = await Organizationlevel.findOne({ id:this.req.params.id });  
    var orghierachlevel = await Orghierachlevel.find({});

    // Respond with view. 
    return {
      organizationlevelData: organizationlevel,   
      orghierachlevelData:orghierachlevel,
  

    };

  },




};
