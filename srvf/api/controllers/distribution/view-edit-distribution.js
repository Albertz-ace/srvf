module.exports = {


  friendlyName: "Distribution",
  
  description: "Create New Distribution",

    exits: {

    success: {
      viewTemplatePath: 'pages/distribution/edit-distribution'
    }

  },


  fn : async function (req,res) {

   console.log(this.req.params.id );
    var distribution = await Distribution.findOne({ id:this.req.params.id });  
    //var data4= await Tithe.find({});
    
    // Respond with view. 
    return {
      distributionData: distribution,   
     // titheData:data4,  

    };

  },




};
