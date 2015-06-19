module.exports = {
  friendlyName: 'detect new face',
  description: 'loads a new image with faces to the face library',
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
