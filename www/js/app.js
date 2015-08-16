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



$scope.quarto= false;
  $scope.quarto2=false;
  $scope.sala=false;
  $scope.cozinha=false;
  $scope.banheiro=false;
  $scope.quintal=false;
 
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

    $cordovaBluetoothSerial.write('k').then(function(){
      
    },function(){
      alert("Falha");
    });

  }

$scope.envQuarto1off=function(){
$cordovaBluetoothSerial.write('l').then(function(){
      
    },function(){
      alert("Falha");
    });

  }

  $scope.modAutoq1on=function(){
$cordovaBluetoothSerial.write('n').then(function(){
      
    },function(){
      alert("Falha");
    });

  }

  $scope.modAutoq1off=function(){

$cordovaBluetoothSerial.write('m').then(function(){
      
    },function(){
      alert("Falha");
    });

  }


  

$scope.list=function(){
 $scope.showList();

}

$scope.q1=function(){
 $scope.quarto= true;

}

$scope.qq1=function(){
 $scope.quarto= false;

}


$scope.q2=function(){
 $scope.quarto2= true;

}

$scope.qq2=function(){
 $scope.quarto2= false;

}


$scope.s1=function(){
 $scope.sala= true;

}
$scope.ss1=function(){
 $scope.sala= false;

}

$scope.c1=function(){
 $scope.cozinha= true;

}

$scope.cc1=function(){
 $scope.cozinha= false;

}

$scope.b1=function(){
 $scope.banheiro= true;

}

$scope.bb1=function(){
 $scope.banheiro= false;

}

$scope.q3=function(){
 $scope.quintal= true;

}

$scope.qq3=function(){
 $scope.quintal= false;

}


  

$scope.showConf=function(){

  $scope.quarto= false;
  $scope.quarto2=false;
  $scope.sala=false;
  $scope.cozinha=false;
  $scope.banheiro=false;
  $scope.quintal=false;

var confirmPopup1 = $ionicPopup.confirm({
     title: 'Selecione os cômodos que irão participar',
     template: '<ul class="list">'+

                '<ion-checkbox ng-model="quarto"><b>Quarto 1 </b><span ng-if="quarto">{{q1()}}</span><span ng-if="!quarto">{{qq1()}}</span></ion-checkbox>'+
                '<ion-checkbox ng-model="quarto2"><b>Quarto 2</b><span ng-if="quarto2">{{q2()}}</span><span ng-if="!quarto2">{{qq2()}}</span></ion-checkbox>'+
                '<ion-checkbox ng-model="sala"><b>Sala</b><span ng-if="sala">{{s1()}}</span><span ng-if="!sala">{{ss1()}}</span></ion-checkbox>'+
                '<ion-checkbox ng-model="cozinha"><b>Cozinha</b><span ng-if="cozinha">{{c1()}}</span><span ng-if="!cozinha">{{cc1()}}</span></ion-checkbox>'+
                '<ion-checkbox ng-model="banheiro" ><b>Banheiro</b><span ng-if="banheiro">{{b1()}}</span><span ng-if="!banheiro">{{bb1()}}</span></ion-checkbox>'+
                '<ion-checkbox ng-model="quintal"><b>Quintal</b><span ng-if="quintal">{{q3()}}</span><span ng-if="!quintal">{{qq3()}}</span></ion-checkbox>'+

                '</ul>',
                scope:$scope,
         
   });
   confirmPopup1.then(function(res) {
    
     if(res) {
      

       
     } else {

 $scope.quarto= false;
  $scope.quarto2=false;
  $scope.sala=false;
  $scope.cozinha=false;
  $scope.banheiro=false;
  $scope.quintal=false;

     }
   });

};


  $scope.showConfirm = function() {

   var confirmPopup = $ionicPopup.confirm({
     title: 'Modo automático',
     template: "Desejar selecionar quais cômodos deverão participar?",
                scope:$scope,
       
   });

   confirmPopup.then(function(res) {
     if(res) {
      $scope.showConf();
      console.log("apetou sim");
      
     } else {
      $scope.quarto= true;
  $scope.quarto2= true;
  $scope.sala= true;
  $scope.cozinha= true;
  $scope.banheiro= true;
  $scope.quintal= true;
     
     }

   });
 };

  setTimeout($scope.showConfirm(),1000);

  

  
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

