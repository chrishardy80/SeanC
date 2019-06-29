function main () {
 


anime({
targets: '.rightarrow',
translateX: 40,
opacity: 1,
easing: 'easeInOutQuad',
duration: 1000
});

$(".rightarrow").click(function() {
  anime({
  targets: '.rightarrow',
  translateX: 80,
  opacity: 0,
  easing: 'easeInOutQuad',
  duration: 1000
  });

  anime({
  targets: '.leftarrow',
  translateX: -40,
  opacity: 1,
  easing: 'easeInOutQuad',
  duration: 1000
  });

  $(".One").hide( "blind", {direction: "right", easing: "easeOutQuad"}, 500,function(){
    $(".Two").show( "blind", {direction: "right", easing: "easeOutQuad"}, 500);
  });

});

$(".leftarrow").click(function() {
  anime({
  targets: '.rightarrow',
  translateX: 40,
  opacity: 1,
  easing: 'easeInOutQuad',
  duration: 1000
  });

  anime({
  targets: '.leftarrow',
  translateX: 0,
  opacity: 0,
  easing: 'easeInOutQuad',
  duration: 1000
  });

  $(".Two").hide( "blind", {direction: "left", easing: "easeOutQuad"}, 500,function(){
  $(".One").show( "blind", {direction: "left", easing: "easeOutQuad"}, 500);
  });

});
}

$(document).ready(main);
