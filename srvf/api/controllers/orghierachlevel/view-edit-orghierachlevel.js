module.exports = {


  friendlyName: 'View orghierachlevel edit',


  description: 'Display "Orghierachlevel edit" page.',

    exits: {

    success: {
      viewTemplatePath: 'pages/orghierachlevel/edit-orghierachlevel'
    }

  },


  fn : async function (req,res) {

   console.log(this.req.params.id );
   
    var orghierachlevel = await Orghierachlevel.findOne({ id:this.req.params.id });  
    var data2= await Organization.find({});

    
    
    // Respond with view. 
    return {
      orghierachlevelData: orghierachlevel,    
      organizationData: data2, 

    };

  },




};
