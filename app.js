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
function change(){
	$("input").on("change",function(){
		var red = $("#red").val();
		var green =$("#green").val();
		var blue = $("#blue").val();
		var alpha=$("#alpha").val();
		var redh = red.toString(16);
		var greenh = green.toString(16);
		var blueh = blue.toString(16);
		var alphah = alpha.toString(16);

		
		$("body").css("background-color","rgba("+redh+","+greenh+","+blueh+","+alphah+")");
		$("#valeur").html("RGBA("+redh+","+greenh+","+blueh+","+alphah+")");
	});
}
change();

