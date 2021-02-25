module.exports = {

    
    friendlyName: "Bank Details",
  
    description: "Create New Bank Details",

    inputs: {
      id: {
        type: 'number'
      },FirstName: {
        type: 'string',
        required: true,
        description: 'Full representation of the user\'s name.',
        maxLength: 120,
        example: 'Albert '
      },
      LastName: {
        type: 'string',
        required: true,
        description: 'Full representation of the user\'s name.',
        maxLength: 120,
        example: 'Albert '
      },
      emailAddress: {
        required: true,
        type: 'string',
        isEmail: true,
        description: 'The email address for the new account, e.g. m@example.com.',
        extendedDescription: 'Must be a valid email address.',
      },
  
      password: {
        required: false,
        type: 'string',
        maxLength: 200,
        example: 'passwordlol',
        description: 'The unencrypted password to use for the new account.'
      },
  
      Organization_level: {
        type: 'string',
        required: true,
        description: 'Full representation of the user\'s name.',
        maxLength: 120,
        example: 'Seventh Day'
      },
      Phone_Number: {
        type: 'number',
        required: true,
        description: 'Full representation of the user\'s name.',
        example: 791084993
      },
      Role: {
        type: 'string',
        required: true,
        description: 'Full representation of the user\'s name.',
        maxLength: 120,
        example: 'Mary Sue van der McHenst'
      },
  
    },
    
  
    exits: {
      success: {
        viewTemplatePath: 'pages/user/list',
        description: 'Success',
      },
    },
    fn: async function (inputs, exits) {

       
      var updatedUser= await User.updateOne({
        id: inputs.id}).set({emailAddress:inputs.emailAddress,password:inputs.password,FirstName:inputs.FirstName,LastName:inputs.LastName,Organization_level:inputs.Organization_level,Phone_Number:inputs.Phone_Number,Role:inputs.Role});
     var data = await User.find({}); 
       
     return exits.success({
      //return this.res.redirect('faq/' + inputs.alias);
      message: 'updated successfully.',
      userData:data


    });


    

        
  }
  
  
  };
  