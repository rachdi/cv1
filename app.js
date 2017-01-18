$(document).ready(function(){

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
$('.special.cards .image').dimmer({
	on: 'hover'
});
$('.overlay.example .overlay')
.visibility({
	type   : 'fixed',
    offset : 15 // give some space from top of screen
})
;

