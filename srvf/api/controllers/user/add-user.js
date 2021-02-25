module.exports = {


  friendlyName: 'Signup',
  description: 'Sign up for a new user account.',

  extendedDescription:
`This creates a new user record in the database, signs in the requesting user agent
by modifying its [session](https://sailsjs.com/documentation/concepts/sessions), and
(if emailing with Mailgun is enabled) sends an account verification email.

If a verification email is sent, the new user's account is put in an "unconfirmed" state
until they confirm they are using a legitimate email address (by clicking the link in
the account verification message.)`,


  inputs: {
    FirstName: {
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
      required: true,
      type: 'string',
      maxLength: 1000,
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
      description: 'New user account was created successfully.'
    },

    invalid: {
      responseType: 'badRequest',
      description: 'The provided FirstName, password and/or email address are invalid.',
      extendedDescription: 'If this request was sent from a graphical user interface, the request '+
      'parameters should have been validated/coerced _before_ they were sent.'
    },

    emailAlreadyInUse: {
      statusCode: 409,
      description: 'The provided email address is already in use.',
    },

  },



  fn: async function (inputs,exits) { 
    var newEmailAddress = inputs.emailAddress.toLowerCase();

    var data= await User.create({emailAddress:inputs.emailAddress,password:inputs.password,FirstName:inputs.FirstName,LastName:inputs.LastName,Organization_level:inputs.Organization_level,Phone_Number:inputs.Phone_Number,Role:inputs.Role}).exec(function(err){
      if(err){
        res.send(500, {err: "some error occured"});
      }
     
    });

    sails.log(data);

    var data = await User.find({}); 
    
    return exits.success({         
      message: 'Created successfully.',
      userData:data,     

    }); 

  },

};
