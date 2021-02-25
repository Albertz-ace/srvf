module.exports = {
    friendlyName: "Distribution",
  
    description: "Create Distribution",

    inputs: {      
      fund_Type:{
        type:"string",
        required:true
      },
      Amount:{
        type:"number",
        required:true
      },
      owner:{
        type:"number",
        required:true
      },

    
  },  
    exits: {
      success: {
        viewTemplatePath: 'pages/distribution/list',
        description: "Successful",
      },
    },

    fn: async function (inputs,exits,res) {
      console.log(inputs.Amount);

      var dist= [{fund_Type: 'fund1', Amount: 123,owner:inputs.owner},{fund_Type: 'fund2', Amount: 456,owner:inputs.owner}];
   
      
     Distribution.createEach(dist).exec(function(err){
        if(err){
          res.send(500, {err: "some error occured"});
        }

      
      });

      
      Fdistribution.create({Dis_id:inputs.owner}).exec(function(err){
        if(err){
          res.send(500, {err: "some error occured"});
        }


        //Fdistribution.addToCollection({owner:inputs.owner, distributions:'distributions'}).members([{fund_Type:inputs.fund_Type,Amount:inputs.Amount}]);

      
      }); 
      var data = await Distribution.find({});
     // var data2= await Distribution.find({where: {Giving_Type:"Donate"}});
      //var data3= await Fundtype.find({});
      //var data4= await Tithe.find({});
      //var church = await Tithe.sum('Church');
      //var division = await Tithe.sum('Division');
      //var conference = await Tithe.sum('Cofference');
      //var union = await Tithe.sum('Unions');
      return exits.success({         
        message: 'created successfully.',
        distributionData:data,
        //fundtypedata: data3,
        //churchData:data3,
        //titheData:data4,
        //church ,
        //division ,
        //conference ,
        //union ,
  
  
      });
 
    },
  };