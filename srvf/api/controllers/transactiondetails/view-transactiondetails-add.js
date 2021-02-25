module.exports = {
    friendlyName: "Transactiondetails",
  
    description: "Create New Transactiondetails",

    exits: {
      success: {
        viewTemplatePath: "pages/transactiondetails/add-transactiondetails",
      },
    },

    fn: async function () {
      var data = await Orghierachlevel.find({});
      var data2= await Organizationlevel.find({Hierachy_level:'Station'});
      var data3= await Organizationlevel.find({Hierachy_level:'District'});
      var data4= await User.find({Role:'Pastor'});
      var data5= await Paymentmode.find({});
      var data6= await Bankdetails.find({});

      return {        
        orghierachlevelData: data, 
        stationData: data2,
        districtData: data3, 
        pastorData: data4, 
        bankData: data6,  
        paymentmodeData: data5, 
      
      };
    },

    
    

 };