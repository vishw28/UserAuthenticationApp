/**
 * Created by Vishw on 12/25/2016.
 */
(function () {
  'use strict'

  angular.module('LoginModule')
    .controller('LoginController',LoginController);

      function LoginController($http,toastr){
        var lc = this;

        lc.runLogin = function () {
          $http.put('/login',{
            email : lc.email,
            password : lc.password
          }).then(function(){
            console.log('login passed');
          }).catch(function(err){
              if(err.status == 400 || 404){
                  toastr.error('Invalid Credentials','Error',{
                  closeButton:true
                });
                 return;
              }
          })
        }
      }

})();
