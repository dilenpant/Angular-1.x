var app =angular.module("ngModelExamples",[]);
app.controller("ExamplesCtrl",ExamplesCtrl);
function ExamplesCtrl($scope){
    $scope.testBoxChange=function(){
        console.log("Text box value changed");
    }
}