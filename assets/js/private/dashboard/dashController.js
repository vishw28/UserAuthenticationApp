/**
 * Created by Vishw on 12/25/2016.
 */
(function () {
  'use strict'

  angular.module('DashModule')
    .controller('DashController',DashController);

    function DashController($http) {
        var dc = this;
        dc.getUser = function () {
          $http.get('/getuser').then(function (user) {
                dc.user = user.data;
            }).catch(function (err) {
                console.log(err);
            })
        }
    }

})();
