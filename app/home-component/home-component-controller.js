var app = angular.module('genesisApp').controller('homeCtrl',function($scope,$state){
    $scope.gotoHome = function(){
        $state.go('home');
    };
    $scope.gotoDashboard = function(){
        $state.go('home.dashboard');
    };
    $scope.gotoProfile = function(){
        $state.go('home.profile');
    };
    $scope.logout = function(){
        $state.go('login');
    };

    $scope.username=localStorage.username.split('')[0];
    $scope.fusername=localStorage.username;
    // $scope.fusername=localStorage.username;
    // $scope.mytodoObj = {};
    // $scope.mytodoObj.name = '';
    // $scope.mytodoObj.description = '';
    // $scope.mytodoObj.checked = false;
    // $scope.list=[];
    // $scope.username=localStorage.username.split('')[0];
    // $scope.fusername=localStorage.username;
    // $scope.show = "false";
    // $scope.addData=function(){
    //     // $scope.obj={};
    //     // $scope.obj.name=$scope.name;
    //     //   $scope.obj.Description= angular.copy($scope.Description);
    //     //   $scope.list.push($scope.obj);
    //     $scope.list.push(angular.copy($scope.mytodoObj));
    //     $scope.mytodoObj = {};

    //   };
    //   $scope.delete=function($index)
    //   {
    //   $scope.list.splice($index,1);
    //   };
});