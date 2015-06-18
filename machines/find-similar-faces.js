module.exports = {


  friendlyName: 'find similar faces',


  description: 'Detects human faces in an image and returns face locations, face landmarks, and optional attributes including head-pose, gender, and age.',


  cacheable: false,


  sync: false,


  idempotent: false,


  inputs: {

  },


  exits: {

    success: {
      variableName: 'result',
      description: 'Done.',
    },

  },


  fn: function (inputs,exits
  /**/) {
    return exits.success();
  },



};
