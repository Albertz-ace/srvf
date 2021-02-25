module.exports = {


  friendlyName: 'View Fundtype edit',


  description: 'Display "Fundtype edit" page.',

    exits: {

    success: {
      viewTemplatePath: 'pages/fundtype/edit-fundtype'
    }

  },


  fn : async function (req,res) {

   console.log(this.req.params.id );
    var fundtype = await Fundtype.findOne({ id:this.req.params.id });  
    
    // Respond with view. 
    return {
      fundtypeData: fundtype,     

    };

  },




};
