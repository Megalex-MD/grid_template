
$(document).ready(function(){
	$('.header-navbar__burger').click(function(){
		$(this).toggleClass('active');
		$('.header-navbar__list').toggleClass('active');
	});
});