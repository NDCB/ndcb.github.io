$(function(){

   openNavigation = function(){
       console.log("Opening navigation.");
        $('#nav-close').removeClass('hidden').addClass('displayed');
        $('#nav-open').removeClass('displayed').addClass('hidden');
   }

   closeNavigation = function(){
        console.log("Closing navigation.");
        $('#nav-close').removeClass('displayed').addClass('hidden');
        $('#nav-open').removeClass('hidden').addClass('displayed');
   }

});