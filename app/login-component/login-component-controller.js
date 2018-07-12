var app = angular.module('login').controller('loginCtrl',function($scope,$state){
    $scope.login = function(){
        localStorage.Password=document.getElementById("password").value;
        localStorage.username=document.getElementById("username").value;
        
        console.log("saved!!");
        $state.go('home.dashboard');

    };
  });