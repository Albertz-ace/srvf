/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /':                   { action: 'view-homepage-or-redirect' },
  'GET /welcome/:unused?':   { action: 'dashboard/view-welcome' },

  'GET /faq':                { action:   'view-faq' },
  'GET /legal/terms':        { action:   'legal/view-terms' },
  'GET /legal/privacy':      { action:   'legal/view-privacy' },
  'GET /contact':            { action:   'view-contact' },

  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /email/confirm':      { action: 'entrance/confirm-email' },
  'GET /email/confirmed':    { action: 'entrance/view-confirmed-email' },

  'GET /login':              { action: 'entrance/view-login' },
  'GET /password/forgot':    { action: 'entrance/view-forgot-password' },
  'GET /password/new':       { action: 'entrance/view-new-password' },

  'GET /account':            { action: 'account/view-account-overview' },
  'GET /account/password':   { action: 'account/view-edit-password' },
  'GET /account/profile':    { action: 'account/view-edit-profile' },
  'GET /user':               { action: 'account/view-account-list' },

  'GET /organization':           { action: 'organization/view-organization-list' },
  'GET /organization/add':       { action: 'organization/view-organization-add'  },
  'GET /organization/:id':       { action: 'organization/view-edit-organization' },
  'GET /organization/edit/:id':  { action: 'organization/edit-organization' },
  'GET /organization/delete/:id':  { action: 'organization/delete-organization' },

  'GET /organizationlevel':           { action: 'organizationlevel/view-organizationlevel-list' },
  'GET /organizationlevel/add':       { action: 'organizationlevel/view-organizationlevel-add'  },
  'GET /organizationlevel/:id':       { action: 'organizationlevel/view-edit-organizationlevel' },
  'GET /organizationlevel2/:id':       { action: 'organizationlevel/view-organizationlevel-list2' },  
  'GET /organizationlevel/edit/:id':  { action: 'organizationlevel/edit-organizationlevel' },
  'GET /organizationlevel/delete/:id':  { action: 'organizationlevel/delete-organizationlevel' },


  'GET /bankdetails':           { action: 'bankdetails/view-bankdetails-list' },
  'GET /bankdetails/add':       { action: 'bankdetails/view-bankdetails-add'  },
  'GET /bankdetails/:id':       { action: 'bankdetails/view-edit-bankdetails' },
  'GET /bankdetails/edit/:id':  { action: 'bankdetails/edit-bankdetails' },
  'GET /bankdetails/delete/:id':  { action: 'bankdetails/delete-bankdetails' },

  'GET /orghierachlevel':           { action: 'orghierachlevel/view-orghierachlevel-list' },
  'GET /orghierachlevel/add':       { action: 'orghierachlevel/view-orghierachlevel-add'  },
  'GET /orghierachlevel/:id':       { action: 'orghierachlevel/view-edit-orghierachlevel' },
  'GET /orghierachlevel2/:id':       { action: 'orghierachlevel/view-orghierachlevel-list2' },
  'GET /orghierachlevel/edit/:id':  { action: 'orghierachlevel/edit-orghierachlevel' },
  'GET /orghierachlevel/delete/:id':  { action: 'orghierachlevel/delete-orghierachlevel' },

  'GET /fundtype':           { action: 'fundtype/view-fundtype-list' },
  'GET /fundtype/add':       { action: 'fundtype/view-fundtype-add'  },
  'GET /fundtype/:id':       { action: 'fundtype/view-edit-fundtype' },
  'GET /fundtype/edit/:id':  { action: 'fundtype/edit-fundtype' },
  'GET /fundtype/delete/:id':  { action: 'fundtype/delete-fundtype' },

  'GET /paymentmode':           { action: 'paymentmode/view-paymentmode-list' },
  'GET /paymentmode/add':       { action: 'paymentmode/view-paymentmode-add'  },
  'GET /paymentmode/:id':       { action: 'paymentmode/view-edit-paymentmode' },
  'GET /paymentmode/edit/:id':  { action: 'paymentmode/edit-paymentmode' },
  'GET /paymentmode/delete/:id':  { action: 'paymentmode/delete-paymentmode' },

  'GET /fnperiod':           { action: 'fnperiod/view-fnperiod-list' },
  'GET /fnperiod/add':       { action: 'fnperiod/view-fnperiod-add'  },
  'GET /fnperiod/:id':       { action: 'fnperiod/view-edit-fnperiod' },
  'GET /fnperiod/edit/:id':  { action: 'fnperiod/edit-fnperiod' },
  'GET /fnperiod/delete/:id':  { action: 'fnperiod/delete-fnperiod' },

  'GET /transactiondetails':           { action: 'transactiondetails/view-transactiondetails-list' },
  'GET /transactiondetails/add':       { action: 'transactiondetails/view-transactiondetails-add'  },
  'GET /transactiondetails/:id':       { action: 'transactiondetails/view-edit-transactiondetails' },
  'GET /transactiondetails/edit/:id':  { action: 'transactiondetails/edit-transactiondetails' },
  'GET /transactiondetails/delete/:id':  { action: 'transactiondetails/delete-transactiondetails' },

  'GET /distribution':           { action: 'distribution/view-distribution-list' },
  'GET /distribution/add':       { action: 'distribution/view-distribution-add'  },
  'GET /distribution/:id':       { action: 'distribution/view-edit-distribution' },
  'GET /distribution/edit/:id':  { action: 'distribution/edit-distribution' },
  'GET /distribution/delete/:id':  { action: 'distribution/delete-distribution' },

  'GET /user':           { action: 'user/view-user-list' },
  'GET /user/add':       { action: 'user/view-user-add'  },
  'GET /user/:id':       { action: 'user/view-edit-user' },
  'GET /user/edit/:id':  { action: 'user/edit-user' },
  'GET /user/delete/:id':  { action: 'user/delete-user' },









 // 'GET /organization/profile':   { action: 'Organization/profile' },
 // 'GET /organization/delete':    { action: 'Organization/delete' },

 

  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝
  '/terms':                   '/legal/terms',
  '/logout':                  '/api/v1/account/logout',


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
  // …


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  '/api/v1/account/logout':                           { action: 'account/logout' },
  'PUT   /api/v1/account/update-password':            { action: 'account/update-password' },
  'PUT   /api/v1/account/update-profile':             { action: 'account/update-profile' },
  'PUT   /api/v1/account/update-billing-card':        { action: 'account/update-billing-card' },
  'PUT   /api/v1/entrance/login':                        { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup':                       { action: 'entrance/signup' },
  'POST  /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email' },
  'POST  /api/v1/entrance/update-password-and-login':    { action: 'entrance/update-password-and-login' },
  'POST  /api/v1/deliver-contact-form-message':          { action: 'deliver-contact-form-message' },

  'POST   /api/v1/organization/add-organization':         { action: 'organization/add-organization' },
  'PUT    /api/v1/organization/edit-organization/:id':    { action: 'organization/edit-organization' },
  'DELETE /api/v1/organization/delete-organization/:id':  { action: 'organization/delete-organization' },

  'POST   /api/v1/organizationlevel/add-organizationlevel':         { action: 'organizationlevel/add-organizationlevel' },
  'PUT    /api/v1/organizationlevel/edit-organizationlevel/:id':    { action: 'organizationlevel/edit-organizationlevel' },
  'DELETE /api/v1/organizationlevel/delete-organizationlevel/:id':  { action: 'organizationlevel/delete-organizationlevel' },

  'POST   /api/v1/bankdetails/add-bankdetails':         { action: 'bankdetails/add-bankdetails' },
  'PUT    /api/v1/bankdetails/edit-bankdetails/:id':    { action: 'bankdetails/edit-bankdetails' },
  'DELETE /api/v1/bankdetails/delete-bankdetails/:id':  { action: 'bankdetails/delete-bankdetails' },

  'POST   /api/v1/orghierachlevel/add-orghierachlevel':         { action: 'orghierachlevel/add-orghierachlevel' },
  'PUT    /api/v1/orghierachlevel/edit-orghierachlevel/:id':    { action: 'orghierachlevel/edit-orghierachlevel' },
  'DELETE /api/v1/orghierachlevel/delete-orghierachlevel/:id':  { action: 'orghierachlevel/delete-orghierachlevel' }, 

  'POST   /api/v1/fundtype/add-fundtype':         { action: 'fundtype/add-fundtype' },
  'PUT    /api/v1/fundtype/edit-fundtype/:id':    { action: 'fundtype/edit-fundtype' },
  'DELETE /api/v1/fundtype/delete-fundtype/:id':  { action: 'fundtype/delete-fundtype' },

  'POST   /api/v1/paymentmode/add-paymentmode':         { action: 'paymentmode/add-paymentmode' },
  'PUT    /api/v1/paymentmode/edit-paymentmode/:id':    { action: 'paymentmode/edit-paymentmode' },
  'DELETE /api/v1/paymentmode/delete-paymentmode/:id':  { action: 'paymentmode/delete-paymentmode' },

  'POST   /api/v1/fnperiod/add-fnperiod':         { action: 'fnperiod/add-fnperiod' },
  'PUT    /api/v1/fnperiod/edit-fnperiod/:id':    { action: 'fnperiod/edit-fnperiod' },
  'DELETE /api/v1/fnperiod/delete-fnperiod/:id':  { action: 'fnperiod/delete-fnperiod' },

  'POST   /api/v1/transactiondetails/add-transactiondetails':         { action: 'transactiondetails/add-transactiondetails' },
  'PUT    /api/v1/transactiondetails/edit-transactiondetails/:id':    { action: 'transactiondetails/edit-transactiondetails' },
  'DELETE /api/v1/transactiondetails/delete-transactiondetails/:id':  { action: 'transactiondetails/delete-transactiondetails' },

  'POST   /api/v1/distribution/add-distribution':         { action: 'distribution/add-distribution' },
  'PUT    /api/v1/distribution/edit-distribution/:id':    { action: 'distribution/edit-distribution' },
  'DELETE /api/v1/distribution/delete-distribution/:id':  { action: 'distribution/delete-distribution' },

  'POST   /api/v1/user/add-user':         { action: 'user/add-user' },
  'PUT    /api/v1/user/edit-user/:id':    { action: 'user/edit-user' },
  'DELETE /api/v1/user/delete-user/:id':  { action: 'user/delete-user' }
  

  //'GET /api/v1/organization/organizations': { action: 'organization/list' },
  //'DELETE /api/v1/organization/delete:userId': { action: 'organization/delete' },
  

};
