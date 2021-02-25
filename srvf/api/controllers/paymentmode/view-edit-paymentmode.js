module.exports = {


  friendlyName: 'View Paymentmode edit',


  description: 'Display "Paymentmode edit" page.',

    exits: {

    success: {
      viewTemplatePath: 'pages/paymentmode/edit-paymentmode'
    }

  },


  fn : async function (req,res) {

   console.log(this.req.params.id );
    var paymentmode = await Paymentmode.findOne({ id:this.req.params.id });  
    
    // Respond with view. 
    return {
      paymentmodeData: paymentmode,     

    };

  },




};
