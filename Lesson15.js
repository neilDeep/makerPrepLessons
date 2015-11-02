// EXERCISE 1
var fn = function () {
  console.log('Hey!');
};

var fn2 = function () {
  console.log('Beep!');
};

document.querySelector('#target').addEventListener('click', fn);

document.querySelector('button').addEventListener('click', fn2);

// EXERCISE 2
var fn = function () {
  console.log('Hey!');
};

var fn2 = function () {
  console.log('Beep!');
};
//JavaScript Way
document.querySelector('.target').addEventListener('click', fn);

document.querySelector('button').addEventListener('click', fn2);
//jQuery Way
$('.money').on('click', function(){
  $('.money').show().text("Cha-Ching!").css('color', 'lightgreen');
  $('.target').toggle();
  $('.honey').toggle();
  $('.OG').toggle();
  $('button').toggle();
  $('.target2').toggle();
});
$('.OG').on('click', function(){
  console.log('Burn slow!');
});
// shortcut
$('.honey').click(function(){
  var $text = $(this).text();
  $(this).text($text === "Show Me The Honeys!" ? "Who's Bitch is This?!" : "Show Me The Honeys!" );
});

// EXERCISE 3
$('.target2').on('mouseover', function(){
$('.target2').addClass('highlighted');
});

$('.target2').on('mouseleave', function(){
$('.target2').removeClass('highlighted');
});
