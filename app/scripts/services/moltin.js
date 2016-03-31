angular.module('storefrontApp.moltin', [])
  .factory('MoltinAuth,' function(){
    var moltin = new Moltin({pablicId: ''})
  });
