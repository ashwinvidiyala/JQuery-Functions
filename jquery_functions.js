$(document).ready(function(){
    $('.button[value="AddClass"]').click(function() {
      $('.section:nth-of-type(1)').addClass('red');
    });

    $('.button[value="SlideToggle"]').click(function() {
      $('.section:nth-of-type(2) img').slideToggle("slow");
    });


  })
