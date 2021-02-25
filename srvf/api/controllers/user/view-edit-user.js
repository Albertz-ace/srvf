module.exports = {


  friendlyName: "User",
  
  description: "Create New User",

    exits: {

    success: {
      viewTemplatePath: 'pages/user/edit-user'
    }

  },


  fn : async function (req,res) {

   console.log(this.req.params.id );

    var user = await User.findOne({ id:this.req.params.id });  
    var data2= await Organization.find({});
    
    // Respond with view. 
    return {
      userData: user, 
      organizationData: data2,    

    };

  },




};
