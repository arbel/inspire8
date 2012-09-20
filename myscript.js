	console.log("click");

$(document).ready(function () {
	console.log("click");

$(".add-type-tabs li a").click(function() {
	console.log("click");
	$(this).toggleClass("active");
	$(".add-new-selection").slideToggle("fast");
	$(".add-from-list-section").slideToggle("fast");

}



});