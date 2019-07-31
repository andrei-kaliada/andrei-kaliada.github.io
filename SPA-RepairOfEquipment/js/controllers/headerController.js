GjApp.controller("headerController",['$scope', '$location',function($scope,$location){

    const menuBtnActive = document.querySelector('.menu-btn');

    $scope.smallBtn = false;
    $scope.popUp = false;

    $scope.showCall = function(){
        $scope.popUp == false ? $scope.popUp = true : "";
    }; 

    $scope.closePopUp = function(){
        $scope.popUp == true ? $scope.popUp = false : "";
    }; 

    $scope.closeModal = function(){
        $scope.popUp = false;
    }; 

    $scope.showResponsivePopUp = function(){
        if($scope.smallBtn == false) {
            menuBtnActive.classList.add('menu-btn-active');
            $scope.responsNav = { height: '100%', zIndex:'2' };
            
            $scope.smallBtn = true;
         } 
         else if($scope.smallBtn == true){
             menuBtnActive.classList.remove('menu-btn-active');
             $scope.responsNav = { height: 0, zIndex:'0' };
            
             $scope.smallBtn = false;            
         }
    };
    
   

    $scope.sendMessage = function() {
        
        $location.path('/contact-success');
        
        
    };

    $scope.users = ['Alex','Fisk','Mat'];
}]);