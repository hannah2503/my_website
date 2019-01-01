$(() => {

  const $menu = $('.menu');


  $menu.on('scroll', function() {
    $menu.hide();
  });



  function animationHover(element, animation){
    element = $(element);
    element.hover(
      function() {
        element.addClass('animated ' + animation);
      },
      function(){
        //wait for animation to finish before removing classes
        window.setTimeout( function(){
          element.removeClass('animated ' + animation);
        }, 2000);
      });
  }

  $(document).ready(function(){
    $('h1').each(function() {
      animationHover(this, 'pulse');
    });

  });


});
