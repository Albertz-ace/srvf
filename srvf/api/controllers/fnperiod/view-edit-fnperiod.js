module.exports = {


  friendlyName: 'View fnperiod edit',


  description: 'Display "Fnperiod edit" page.',

    exits: {

    success: {
      viewTemplatePath: 'pages/fnperiod/edit-fnperiod'
    }

  },


  fn : async function (req,res) {

   console.log(this.req.params.id );
    var fnperiod = await Fnperiod.findOne({ id:this.req.params.id });  
    
    // Respond with view. 
    return {
      fnperiodData: fnperiod,     

    };

  },




};
