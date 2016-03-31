angular.module('storefrontApp.moltin', [])
  .factory('MoltinAuth', function($q) {
    var deferred = $q.defer();
    var moltin = new Moltin({publicId: '5ACMX89mVaYAxPrHANq8xk7YzAwEp1yiH4KWWxD2'});
    moltin.Authenticate(function() {
      deferred.resolve(moltin);
    });

    return deferred.promise;
  });
