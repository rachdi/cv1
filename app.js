$(document).ready(function(){
 	
 	$('ul.tabs li').click(function(){
 		var tab_id = $(this).attr('data-tab');

 		$('ul.tabs li').removeClass('current');
 		$('.tab-content').removeClass('current');

 		$(this).addClass('current');
 		$("#"+tab_id).addClass('current');
 	})

 })
 $(".ui.button").on("click",function(){
 	$("#representation").hide();
 })

// $("#arriere").on("click",function(){
// 	$(".ui.intert.shape").shape("flip left");
// })
// $("#avance").on("click",function(){
// 	$(".ui.intert.shape").shape("flip right");
// })

