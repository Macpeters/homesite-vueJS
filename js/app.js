$(function() {
		$('.pop').on('click', function(e) {
			e.preventDefault();
			var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
			if(width > 450){
				$('.imagepreview').attr('src', $(this).find('img').attr('src'));
				$('.imagepreview').attr('alt', $(this).find('img').attr('alt'));

				$('.imagepreview-title').text($(this).find('img').attr('title'));
				$('.imagepreview-description').text($(this).find('img').attr('data-description'));

				$('#imagemodal').modal('show');
			}
		});


});
