var app=angular.module("clockApp",[]);
app.controller("TimeCtrl",TimeCtrl);

function TimeCtrl($scope){
        var currentDate = new Date();
    $scope.timeString = currentDate.toTimeString();
    $scope.userName="";
    $scope.updateTime=function(){
        //console.log("Button Clicked");
        var currentDate = new Date();
    $scope.timeString = currentDate.toTimeString();
    }
}

// One way daya binding 