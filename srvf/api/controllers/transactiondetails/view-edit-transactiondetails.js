module.exports = {


  friendlyName: "Transactiondetails",
  
  description: "Create New Transactiondetails",

    exits: {

    success: {
      viewTemplatePath: 'pages/transactiondetails/edit-transactiondetails'
    }

  },


  fn : async function (req,res) {

   console.log(this.req.params.id );
    var transactiondetails = await Transactiondetails.findOne({ id:this.req.params.id });  
    var data = await Orghierachlevel.find({});
    var data2= await Organizationlevel.find({Hierachy_level:'Station'});
    var data3= await Organizationlevel.find({Hierachy_level:'District'});
    var data4= await User.find({Role:'Pastor'});
    var data5= await Paymentmode.find({});
    var data6= await Bankdetails.find({});
    var Tamount = await Transactiondetails.sum('Amount');
    // Respond with view. 
    return {
      transactiondetailsData: transactiondetails, 
      orghierachlevelData: data, 
      stationData: data2,
      districtData: data3, 
      pastorData: data4, 
      bankData: data6,  
      paymentmodeData: data5,    
      Tamount, 

    };

  },




};
