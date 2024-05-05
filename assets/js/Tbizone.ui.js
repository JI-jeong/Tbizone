
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
	$('[data-toggle="modal"]').on('click', function(){
		$("#" + $(this).attr('data-target')).addClass('active');
	});//modal-open
	$('.modal').find('.modal-button-closed').on('click', function(){
		$(this).closest('.modal').removeClass('active');
	});//modal-closed

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

	$.datepicker.setDefaults({
		dateFormat: 'yy.mm.dd',
		prevText: '이전 달',
		nextText: '다음 달',
		monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
		monthNamesShort: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
		dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
		dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
		dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
		showMonthAfterYear: true,
		yearSuffix: '.'
	}); // datepicker KR
	$( ".datepicker" ).datepicker({
		//dateFormat: 'yy-mm-dd(DD)',
		dateFormat: 'yy-mm-dd',
		showOn: 'both',
		buttonImage: "../assets/img/icon_calendar.png",
		//buttonImageOnly: true,
		buttonText: "선택하세요"
	});//datepicker
});