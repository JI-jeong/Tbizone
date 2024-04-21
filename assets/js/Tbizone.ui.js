const setVh = () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	// let hh =  document.getElementById('header').offsetHeight;
	// document.documentElement.style.setProperty('--hh', `${hh}px`);
	// let fh =  document.getElementById('footer').offsetHeight;
	// document.documentElement.style.setProperty('--fh', `${fh}px`);
};

window.onload = () => {
	setVh(); // 100vh 
	document.querySelectorAll('input, textarea').forEach((el) => {
		el.onfocus = function() {
			this._placeholder = this.getAttribute('placeholder');
			this.placeholder = '';
		};
		el.onblur = function() {
			this.placeholder = this._placeholder;
		}
	}); //placeholder

	document.querySelectorAll('[data-toggle="modal"]').forEach((el) => {
		el.onclick = function () {
			let target = document.getElementById(el.getAttribute('data-target'));
			target.classList.add('active');
		}
	}); // modal open
	document.querySelectorAll('.modal-button-closed').forEach((el) => {
		el.onclick = function () {
			this.closest('.modal').classList.remove('active');
		}
	}); // modal closed
}
window.addEventListener('resize', () => {
	setVh();
}); //resize event


// $(function() {
// 	$('input, textarea').each(function() {
// 		$(this).data('holder', $(this).attr('placeholder'));
// 		$(this).focusin(function(){
// 			$(this).attr('placeholder','');
// 		});
// 		$(this).focusout(function(){
// 			$(this).attr('placeholder', $(this).data('holder'));
// 		});
// 	}); // placehoder
// 	$('[data-bs-toggle="dropdown"]').on('click', function(){
// 		let dropdown = $(this).closest('.dropdown')
// 		dropdown.find('[data-bs-toggle="dropdown"]').not($(this)).attr("aria-expanded", "false");
// 		if($(this).attr("aria-expanded") == "true") {
// 			$(this).attr("aria-expanded", "false");
// 		} else {
// 			$(this).attr("aria-expanded", "true");
// 		}
// 	});//dropdown
// 	$('[data-toggle="modal"]').on('click', function(){
// 		$("#" + $(this).attr('data-target')).addClass('active');
// 	});//modal-open
// 	$('.modal').find('.modal-button-closed').on('click', function(){
// 		$(this).closest('.modal').removeClass('active');
// 	});//modal-closed
// });

