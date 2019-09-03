$(document).ready(function(){

    function handler(event) {
        // var hash = event.target.hash;
        var hash = $(this).attr("href");
        if (hash) {
          event.preventDefault();
          if ($(hash).length) {
            var offset = $(hash).offset().top - 10;
            $('html, body').stop().animate({scrollTop: offset},'slow');
          }else{
          }
        }
      }
      function handler2(event) {
        var hash = event.target.hash;
        // var hash = $(this).attr("href");
        if (hash) {
          if ($(hash).length) {
            event.preventDefault();
            var offset = $(hash).offset().top - 10;
            $('html, body').stop().animate({scrollTop: offset},'slow');
          }else{
          }
        }
      }

      $('a.innerId').on( "click", handler );
      $('#mainMenu a').on( "click", handler2 );
      
    // Scroll to ID from another page
    var HashValue = location.hash; 
    location.hash = ''; 
    if(HashValue[1] != undefined){ 
        $('html, body').animate({scrollTop: $(HashValue).offset().top - 10}, 'slow');
    };
    //End Scroll to ID from another page

});