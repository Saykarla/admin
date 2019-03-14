$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	nav:true,
  	items: 1
  });

  var dot = $('.owl-dot');
  dot.each(function(){
  	var index = $(this).index();
  	$(this).text(index+1);
  })
});