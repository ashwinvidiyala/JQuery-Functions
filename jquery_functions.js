$(document).ready(function(){
    $('.button[value="AddClass"]').click(function() {
      $('.section:nth-of-type(1)').addClass('red');
    });

    $('.button[value="SlideToggle"]').click(function() {
      $('.section:nth-of-type(2) img').slideToggle("slow");
    });

    $('.button[value="Append"]').click(function() {
      $('.section:nth-of-type(3)').append("<p> This is the new appended paragraph!</p>");
    });

    $('.button[value="Hide"]').click(function () {
      $('.section:nth-of-type(4) h1').hide();
    });

    $('.button[value="Show"]').click(function () {
      $('.section:nth-of-type(4) h1').show();
    });

    $('.button[value="Toggle"]').click(function () {
      $('.section:nth-of-type(5) img').toggle();
    });

    $('.button[value="SlideUp"]').click(function () {
      $('.section:nth-of-type(6) img').slideUp();
    });

    $('.button[value="SlideDown"]').click(function () {
      $('.section:nth-of-type(6) img').slideDown();
    });

    $('.button[value="fadeIn"]').click(function () {
      $('.section:nth-of-type(7) img').fadeIn();
    });

    $('.button[value="fadeOut"]').click(function () {
      $('.section:nth-of-type(7) img').fadeOut();
    });

    $('.button[value="before"]').click(function () {
      $('.section:nth-of-type(8)').before("<p>This text has been added before div</p>");
    });

    $('.button[value="after"]').click(function () {
      $('.section:nth-of-type(8)').after("<p>This text has been added before div</p>");
    });

    $('.button[value="HTML"]').click(function () {
      var display = $('.section:nth-of-type(9)').html();
      console.log(display);
    });

    $('.button[value="Attr"]').click(function () {
      var display2 = $('.section:nth-of-type(10)').attr("input");
      console.log(display2);
    });

    var value = $('.red').val();
    console.log(value);

  })
