var app = angular.module('myApp', []);

app.controller('skillCtrl', function($scope) {
    $scope.skills = [{type:'Mobile Development', skill:'Swift', icon: 'devicon-apple-original colored'},
                         {type:'Front-end language', skill:'HTML5', icon: 'devicon-html5-plain-wordmark colored'},
                         {type:'Front-end language', skill:'CSS3', icon: 'devicon-css3-plain-wordmark colored'},
                         {type:'Front-end framework', skill:'AngularJS', icon: 'devicon-angularjs-plain colored'},
                         {type:'Front-end framework', skill:'Bootstrap', icon: 'devicon-bootstrap-plain-wordmark colored'},
                         {type:'Back-end language', skill:'JavaScript', icon: 'devicon-javascript-plain colored'},
                         {type:'Back-end language', skill:'PHP', icon: 'devicon-php-plain colored'}, 
                         {type:'Back-end framework', skill:'CodeIgniter', icon: 'devicon-codeigniter-plain colored'}, 
                         {type:'Back-end framework', skill:'NodeJS', icon: 'devicon-nodejs-plain colored'},
                         {type:'Back-end framework', skill:'Meteor', icon: 'devicon-meteor-plain colored'}];
});
