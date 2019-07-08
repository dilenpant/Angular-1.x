var app=angular.module("nestedControllers",[]);
app.controller("Ctrl1",Ctrl1);
app.controller("Ctrl2",Ctrl2);

// function Ctrl1($scope){
// $scope.testProp="From ctrl 1";

// }

// function Ctrl2($scope){
//     //$scope.testProp="From ctrl 2";
    
//     }

function Ctrl1(){
    // var this.$scope
    this.testProp="From ctrl 1";
}
function Ctrl1(){
    // var this.$scope
    this.testProp="From ctrl 2";
}