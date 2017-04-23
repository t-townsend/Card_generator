'user strict';

  angular.module('myApp', [])
  .controller('BusinessCardController', function($scope){
    $scope.user = {
      name: 'Samurai Jack'
      designation: 'Samurai',
       email: 'jack@example.com',
       link1: 'www.samuraijack.org',
       tusername:'thesamurai50',
       companylogo: 'https://upload.wikimedia.org/wikipedia/en/2/28/SamuraiJack.png',
       color1: '#c0c0c0',
       color2: 'white',
       textcolor1: '#287cc2',
       textcolor2: '#666',
       fusername:'SamuraiJack',
       gusername:'+SamuraiJack50'
    }
  });
