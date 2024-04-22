
$(function() {
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder', $(this).data('holder'));
		});
	}); // placehoder
	// $('[data-bs-toggle="dropdown"]').on('click', function(){
	// 	let dropdown = $(this).closest('.dropdown')
	// 	dropdown.find('[data-bs-toggle="dropdown"]').not($(this)).attr("aria-expanded", "false");
	// 	if($(this).attr("aria-expanded") == "true") {
	// 		$(this).attr("aria-expanded", "false");
	// 	} else {
	// 		$(this).attr("aria-expanded", "true");
	// 	}
	// });//dropdown
	// $('[data-toggle="modal"]').on('click', function(){
	// 	$("#" + $(this).attr('data-target')).addClass('active');
	// });//modal-open
	// $('.modal').find('.modal-button-closed').on('click', function(){
	// 	$(this).closest('.modal').removeClass('active');
	// });//modal-closed

	//aside
	$('.lnb-toggle').on('click', function(){
		let aside = $(this).closest('.aside');
		if( aside.attr("aria-expanded") == "true") {
			aside.attr("aria-expanded", "false");
		} else {
			aside.attr("aria-expanded", "true");
		}
	});

	//tab
	$('.tab-buttons').on('click', function(){
		let tab = $(this).closest('.tab-group');
		tab.find('.tab-buttons').removeClass('active');
		$(this).addClass('active');
	});
});