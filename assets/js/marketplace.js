$(document).ready(function(){
    $('.herosearchButton').focus(function(){
        $('.dropdown-contents').fadeIn(1000);
    }).focusout(function(){
        $('.dropdown-contents').fadeOut(1000);
    });
  });

  $(document).ready(function(){
    $('.herosearchTerm').focus(function(){
        $('.dropdown-contents').fadeIn(1000);
    }).focusout(function(){
        $('.dropdown-contents').fadeOut(1000);
    });
  });