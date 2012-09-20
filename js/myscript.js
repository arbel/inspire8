	console.log("click");
/* TODO: slides need to return to original place after they are removed */
$(document).ready(function () {
	function updateTotal() {
		var total = $("#bag .bag-list li").length
		$(".total").html(total);
	}
	updateTotal();

	  $('#bag').flexslider({
    	animation: "slide",
    	slideshow: false,
    	animationLoop: false,
    	itemWidth: 208,
    	itemMargin: 10,
    	minItems: 5,
    	maxItems: 0,
    	move:1,
    	controlNav: false,
    	mousewheel: true,
    	start: function(slider) {
    		$(".design-list li a").click(function() {
			    slider.flexAnimate(slider.count-5);

    			$("#bag").addClass("open");
    			$(this).closest("li").css('z-index', 5000);
    			$(this).closest("li").animate({
    				opacity:0,
    				bottom:'-=500',
    				width:0
    			}, 1000,  function() {
    				count =slider.count;
    				slider.addSlide($(this).closest("li"),count-1);
    				 updateTotal();

    				$(this).animate({
    					opacity:1,
    					bottom:0,
    					width:'208'
    				}, 1000);
    			});
	 			
			 });
			 $(".remove-button").click(function() {
			 	updateTotal();
				$(this).closest("li").animate({
					opacity:0,
					width:0

				}, 1000, function() {    			
    				slider.removeSlide($(this).closest("li"));
    			});
			 });
    	}

  });
	 

	$(".add-type-tabs li a").click(function() {
		$(".add-type-tabs li").toggleClass("active");
		$(".add-new-section").slideToggle("slow");
		$(".add-from-list-section").slideToggle("slow");

	});

	$("#qty").click(function() {
		$("#bag").toggleClass("open");
	});



});