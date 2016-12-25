/**
 * Created by Vishw on 12/25/2016.
 */
(function () {
  'use strict'

  angular.module('SignupModule')
    .controller('SignupController',SignupController);

  function SignupController($http) {
    var sc = this;

    sc.runSignup = function () {
      console.log('Sign Up'+sc.name);

      $http.post('/signup',{
        name : sc.name,
        email : sc.email,
        password : sc.password
      }).then(function(response){
          window.location = '/user'
      }).catch(function (err) {
          console.log('Error :'+err);
      })
    }
  }

})();

