'use strict';

/**
 * @ngdoc function
 * @name storefrontApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the storefrontApp
 */
angular.module('storefrontApp')
  .controller('StoreCtrl', function ($scope, categories) {
    $scope.categories = categories;
    console.log(categories);
  });
