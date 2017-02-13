$(function() {


$('.liHome').mouseenter(function() {
  $(this).fadeTo(1,0.25);
});

$('.liHome').mouseleave(function() {
  $(this).fadeTo(1,1.0);
});
$('.liAbout').mouseenter(function() {
  $(this).fadeTo(1,0.25);
});

$('.liAbout').mouseleave(function() {
  $(this).fadeTo(1,1.0);
});
$('.liTumerick').mouseenter(function() {
  $(this).fadeTo(1,0.25);
});

$('.liTumerick').mouseleave(function() {
  $(this).fadeTo(1,1.0);
});

//CLICKED

$('.liHome').click(function() {
  $(this).css('background-color','pink');
  $(this).text('CLICKED!');
});

$('.liAbout').click(function() {
  $(this).css('background-color','pink');
  $(this).text('CLICKED!');
});
$('.liTumerick').click(function() {
  $(this).css('background-color','pink');
  $(this).text('CLICKED!');
});

//TOGGLE

$( ".img3" ).click(function() {
  $( ".img2" ).toggle( "slow", function() {
    // Animation complete.
  });
});
$( ".img2" ).click(function() {
  $( ".img3" ).toggle( "slow", function() {
    // Animation complete.
  });
});


$( ".img1" ).click(function() {
  $( ".img2" ).toggle( "slow", function() {
    // Animation complete.
  });
});
$( ".img1" ).click(function() {
  $( ".img3" ).toggle( "slow", function() {
    // Animation complete.
  });
});

$( ".img2" ).dblclick(function() {
  $( ".img1" ).toggle( "slow", function() {
    // Animation complete.
  });
});
$( ".img3" ).dblclick(function() {
  $( ".img1" ).toggle( "slow", function() {
    // Animation complete.
  });
});





});
