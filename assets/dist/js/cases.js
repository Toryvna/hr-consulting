$(document).ready(function(){

    $( ".selectmenu" ).selectmenu();
    $( "#datepicker" ).datepicker();
    $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );

    // Scroll to ID from another page
    var HashValue = location.hash; 
    location.hash = ''; 
    if(HashValue[1] != undefined){ 
      $('html, body').animate({scrollTop: $(HashValue).offset().top - 30}, 'slow');
    };
    //End Scroll to ID from another page

});