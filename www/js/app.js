// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
 var app =angular.module('starter', ['ionic','ngCordova'])




app.run(function($ionicPlatform, $cordovaBluetoothSerial,$ionicPopup) {
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

app.controller('MainController', function($scope, $ionicLoading,$cordovaBluetoothSerial,$ionicPopup ) {



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







$scope.msquarto1="OFF";
$scope.msquarto2="OFF";
$scope.mssala="OFF";
$scope.mscozinha="OFF";
$scope.msbanheiro="OFF";
$scope.msquintal="OFF";




 
 $scope.bluetooth = function(){

  $cordovaBluetoothSerial.enable();

   
}

  $scope.conectar =function(){

    $cordovaBluetoothSerial.connectInsecure("20:15:03:23:12:85").then(function(){
      alert("Conectado");
    },function(){
      alert("Não encontrado");
    });

  }

$scope.envQuarto1on=function(){

    $cordovaBluetoothSerial.write('b').then(function(){
      
    },function(){
      alert("Falha");
    });

  }

$scope.envQuarto1off=function(){
$cordovaBluetoothSerial.write('g').then(function(){
      
    },function(){
      alert("Falha");
    });

  }


  

$scope.list=function(){
 $scope.showList();

}

$scope.q1=function(){
 $scope.mquarto1= true;

}

$scope.q2=function(){
 $scope.mquarto2= true;

}
$scope.s1=function(){
 $scope.msala= true;

}
$scope.c1=function(){
 $scope.mcozinha= true;

}
$scope.b1=function(){
 $scope.mbanheiro= true;

}
$scope.q3=function(){
 $scope.mquintal= true;

}


  $scope.showConfirm = function() {
  $scope.mver= false;
  $scope.mquarto2=false;
  $scope.msala=false;
  $scope.mcozinha=false;
  $scope.mbanheiro=false;
  $scope.mquintal=false;
   var confirmPopup = $ionicPopup.confirm({
     title: 'Consume Ice Cream',
     template: '<ul class="list">'+

                '<ion-checkbox ng-model="mver"><b>Quarto 1 </b><span ng-if="mver">{{q1()}}</span></ion-checkbox>'+
                '<ion-checkbox ng-model="mquarto2"><b>Quarto 2</b><span ng-if="mquarto2">{{q2()}}</span></ion-checkbox>'+
                '<ion-checkbox ng-model="msala"><b>Sala</b><span ng-if="msala">{{s1()}}</span></ion-checkbox>'+
                '<ion-checkbox ng-model="mcozinha"><b>Cozinha</b><span ng-if="mcozinha">{{c1()}}</span></ion-checkbox>'+
                '<ion-checkbox ng-model="mbanheiro" ><b>Banheiro</b><span ng-if="mbanheiro">{{b1()}}</span></ion-checkbox>'+
                '<ion-checkbox ng-model="mquintal"><b>Quintal</b><span ng-if="mquintal">{{q3()}}</span></ion-checkbox>'+

                '</ul>',
                scope:$scope
   });
   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
       $scope.envQuarto1on();
     } else {
       console.log('You are not sure');
       $scope.envQuarto1off();

     }
   });
 };

  

  
})


app.controller('MainController2', function($scope, $ionicLoading,$cordovaBluetoothSerial,$ionicPopup ) {

//Modo manual

  $scope.mquarto1= false;
  $scope.mquarto2=false;
  $scope.msala=false;
  $scope.mcozinha=false;
  $scope.mbanheiro=false;
  $scope.mquintal=false;







$scope.msquarto1="OFF";
$scope.msquarto2="OFF";
$scope.mssala="OFF";
$scope.mscozinha="OFF";
$scope.msbanheiro="OFF";
$scope.msquintal="OFF";




 
 $scope.bluetooth = function(){

  $cordovaBluetoothSerial.enable();

   
}

  $scope.conectar =function(){

    $cordovaBluetoothSerial.connectInsecure("20:15:03:23:12:85").then(function(){
      alert("Conectado");
    },function(){
      alert("Não encontrado");
    });

  }

$scope.envQuarto1on=function(){

    $cordovaBluetoothSerial.write('b').then(function(){
      
    },function(){
      alert("Falha");
    });

  }

$scope.envQuarto1off=function(){
$cordovaBluetoothSerial.write('g').then(function(){
      
    },function(){
      alert("Falha");
    });

  }


  

$scope.list=function(){
 $scope.showList();

}

$scope.q1=function(){
 $scope.mquarto1= true;

}

$scope.qq1=function(){
 $scope.mquarto1= false;

}

$scope.q2=function(){
 $scope.mquarto2= true;

}

$scope.qq2=function(){
 $scope.mquarto2= false;

}


$scope.s1=function(){
 $scope.msala= true;

}
$scope.ss1=function(){
 $scope.msala= false;

}

$scope.c1=function(){
 $scope.mcozinha= true;

}

$scope.cc1=function(){
 $scope.mcozinha= false;

}

$scope.b1=function(){
 $scope.mbanheiro= true;

}

$scope.bb1=function(){
 $scope.mbanheiro= false;

}

$scope.q3=function(){
 $scope.mquintal= true;

}

$scope.qq3=function(){
 $scope.mquintal= false;

}


  $scope.showConfirm = function() {
  $scope.mver= false;
  $scope.mquarto2=false;
  $scope.msala=false;
  $scope.mcozinha=false;
  $scope.mbanheiro=false;
  $scope.mquintal=false;
   var confirmPopup = $ionicPopup.confirm({
     title: 'Deseja manter alguma luz acessa?',
     template: '<ul class="list">'+

                '<ion-checkbox ng-model="mver"><b>Quarto 1 </b><span ng-if="mver">{{q1()}}</span><span ng-if="!mver">{{qq1()}}</span></ion-checkbox>'+
                '<ion-checkbox ng-model="mquarto2"><b>Quarto 2</b><span ng-if="mquarto2">{{q2()}}</span><span ng-if="!mquarto2">{{qq2()}}</span></ion-checkbox>'+
                '<ion-checkbox ng-model="msala"><b>Sala</b><span ng-if="msala">{{s1()}}</span><span ng-if="!msala">{{ss1()}}</span></ion-checkbox>'+
                '<ion-checkbox ng-model="mcozinha"><b>Cozinha</b><span ng-if="mcozinha">{{c1()}}</span><span ng-if="!mcozinha">{{cc1()}}</span></ion-checkbox>'+
                '<ion-checkbox ng-model="mbanheiro" ><b>Banheiro</b><span ng-if="mbanheiro">{{b1()}}</span><span ng-if="!mbanheiro">{{bb1()}}</span></ion-checkbox>'+
                '<ion-checkbox ng-model="mquintal"><b>Quintal</b><span ng-if="mquintal">{{q3()}}</span><span ng-if="!mquintal">{{qq3()}}</span></ion-checkbox>'+

                '</ul>',
                scope:$scope
   });
   confirmPopup.then(function(res) {
     if(res) {

      //colocar os if dos comodos verificando se a variavel é true, se for true enviar para acender se não enviar para apagar
       console.log('You are sure');
       if($scope.mquarto1===true){
          $scope.envQuarto1on();
       }else{
        $scope.envQuarto1off();
       }
       
       
     } else {
       console.log('You are not sure');
       // eniar para todos apagar
       $scope.envQuarto1off();

     }
   });
 };

 setTimeout($scope.showConfirm(),1000);


  })

