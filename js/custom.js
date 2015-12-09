$('#accordion').hide();
$(window).scroll(function() {
    if ($(this).scrollTop() > 600)
     {
        $('#accordion').fadeIn();
     }
    else
     {
      $('#accordion').fadeOut();
     }
 });