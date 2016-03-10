var app = angular.module('myApp', ['ngAnimate']).config(function ($interpolateProvider) {
     $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

app.controller('skillCtrl', function($scope) {
     $scope.skills = [{dev_type:'Mobile', type: 'language', skill:'Swift', icon: 'devicon-apple-original colored'},
                         {dev_type:'Front-end', type: 'language', skill:'HTML5', icon: 'devicon-html5-plain-wordmark colored'},
                         {dev_type:'Front-end', type: 'language', skill:'CSS3', icon: 'devicon-css3-plain-wordmark colored'},
                         {dev_type:'Front-end', type: 'framework', skill:'AngularJS', icon: 'devicon-angularjs-plain-wordmark colored'},
                         {dev_type:'Front-end', type: 'framework', skill:'Bootstrap', icon: 'devicon-bootstrap-plain-wordmark colored'},
                         {dev_type:'Back-end', type: 'language', skill:'JavaScript', icon: 'devicon-javascript-plain colored'},
                         {dev_type:'Back-end', type: 'language', skill:'PHP', icon: 'devicon-php-plain colored'}, 
                         {dev_type:'Back-end', type: 'framework', skill:'CodeIgniter', icon: 'devicon-codeigniter-plain-wordmark colored'}, 
                         {dev_type:'Back-end', type: 'framework', skill:'NodeJS', icon: 'devicon-nodejs-plain-wordmark colored'},
                         {dev_type:'Back-end', type: 'framework', skill:'Meteor', icon: 'devicon-meteor-plain-wordmark colored'},
                         {dev_type:'Back-end', type: 'language', skill:'Java', icon: 'devicon-java-plain-wordmark colored'}];
     $scope.sortBack = function() {
          if ($scope.backend == true) {
               $scope.backend = false;
               console.log('We just reset the backend bool', $scope.backend);
          } else if ($scope.backend == false) {
               $scope.allskills = false;
               $scope.frontend = false;
               $scope.mobile = false;
               $scope.backend = true;
               console.log('set the backend filter to true', $scope.backend);
          }
     };
     $scope.sortFront = function () {
          if ($scope.frontend == true) {
               $scope.frontend = false;
               console.log('We just reset the frontend bool', $scope.frontend);
          } else if ($scope.frontend == false) {
               $scope.allskills = false;
               $scope.mobile = false;
               $scope.backend = false;
               $scope.frontend = true;
               console.log('set the frontend filter to true', $scope.frontend);
          }
     };
     $scope.sortMobile = function () {
          if ($scope.mobile == true) {
               $scope.mobile = false;
               console.log('We just reset the mobile bool', $scope.mobile);
          } else if ($scope.mobile == false) {
               $scope.allskills = false;
               $scope.backend = false;
               $scope.frontend = false;
               $scope.mobile = true;
               console.log('set the mobile filter to true', $scope.mobile);
          }
     };
     $scope.sortAll = function () {
          if ($scope.allskills == true) {
               $scope.allskills = false;

          } else if ($scope.allskills == false) {
               $scope.backend = false;
               $scope.frontend = false;
               $scope.mobile = false;
               $scope.allskills = true;
          };
     }

});
