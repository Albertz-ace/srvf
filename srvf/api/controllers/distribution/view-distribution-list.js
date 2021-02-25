module.exports = {
    friendlyName: "Distribution",
  
    description: "Displays List of Distribution",
  
    exits: {
      success: {
        viewTemplatePath: "pages/distribution/list",
      },
    },
  
    fn: async function () {
      //var data = await Distribution.find({});

      var data = await Distribution.find();
      var Tamount = await Distribution.sum('Amount');
      //var distcount = await distributioncount.find({});


     // .populate('distributions');
      
      //var data = await Distribution.find({where: {Giving_Type:"Give"}});
      //var data2= await Distribution.find({where: {Giving_Type:"Donate"}});
      //var data4= await Tithe.find({});

      //var church = await Tithe.sum('Church');
      //var division = await Tithe.sum('Division');
      //var conference = await Tithe.sum('Cofference');
      //var union = await Tithe.sum('Unions');
 console.log("---------------------------------"+ data.Amount);
      return {
        distributionData: data,
        Tamount,
        //distcount,


        //donationData: data2,
        //titheData:data4,
        //church ,
        //division ,
        //conference ,
        //union ,
      };
    },
  };