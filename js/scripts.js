/* public/js/scripts.js */
jQuery(document).ready(function(){
	$(document).foundation();

	// Full Height
	fullHeight($('.full-height'));

	// Dropzone
	Dropzone.autoDiscover = false;
	$("#imageUpload").dropzone({
		url: '/',
		dictDefaultMessage: "Drag your images",
		clickable: true,
		thumbnailWidth: null,
		thumbnailHeight: null,
	});

	$(document).on('click','.dz-image-preview', function(){
		$('.grid-viewer').show();
		var element = this;
		var mainImage = $(this).find('.dz-image img');
		$('.grid-viewer-image').html($(mainImage).clone());
		// Scroll to the image
		$(window).scrollTop($('.grid-viewer').offset().top);
	});
});

function fullHeight(elements){
	$(elements).each(function(){
		var element = this;
		var windowHeight = window.innerHeight;
		$(element).css('min-height', windowHeight);
	});
}
