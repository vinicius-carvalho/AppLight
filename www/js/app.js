// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
 var app =angular.module('starter', ['ionic','ngCordova'])

app.run(function($ionicPlatform, $cordovaBluetoothSerial) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.controller('MainController', function($scope,$cordovaBluetoothSerial) {



  $scope.quarto1=true;
  $scope.quarto2=true;
  $scope.sala=true;
  $scope.cozinha=true;
  $scope.banheiro=true;
  $scope.quintal=true;



//Modo manual

  $scope.mquarto1= false;
  $scope.mquarto2=false;
  $scope.msala=false;
  $scope.mcozinha=false;
  $scope.mbanheiro=false;
  $scope.mquintal=false;


$scope.msquarto1= "OFF";
  $scope.msquarto2="OFF";
  $scope.mssala="OFF";
  $scope.mscozinha="OFF";
  $scope.msbanheiro="OFF";
  $scope.msquintal="OFF";


  
})