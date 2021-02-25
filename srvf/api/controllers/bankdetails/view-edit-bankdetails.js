module.exports = {


  friendlyName: "Bankdetails",
  
  description: "Create New Bankdetails",

    exits: {

    success: {
      viewTemplatePath: 'pages/bankdetails/edit-bankdetails'
    }

  },


  fn : async function (req,res) {

   console.log(this.req.params.id );
    var bankdetails = await Bankdetails.findOne({ id:this.req.params.id });  
    
    // Respond with view. 
    return {
      bankdetailsData: bankdetails,     

    };

  },




};
