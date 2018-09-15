$(document).ready(function(){
	
//Initial Display
	$('ul span').css({
		width: '0',
		opacity: '0', 
		height: '0'
	});


//Click Function 
	$('h2').on('click', function(){
		if ($(this).siblings('span').is(':visible')){

// hide everything
			$('ul span').animate({
				width: '0',
				opacity: '0', 
				height: '0'
			});

		} else {

//show this one and hide others
			$(this).next('span').stop(true).animate({
				width: '100%',
				opacity : '1',
				height : '250px'
			 }, {
			 	duration: 2000,
			 	easing: 'swing',
			 	complete: function(){
			 		$(this).parents('li').siblings('li').children('span').animate({
						width: '0',
						opacity: '0', 
						height: '0'
			 		});
					//console.log('yo');
				}
			});

		}

	});

});

/*Initial Display

//Click Function
	$('h2').on('click', function(){
		var clickSelector = $(this);
		var clickHeight = $(this).siblings('span').children('img').height() +90 + 'px';
		$('ul span').stop(true).animate({
			opacity: '0',
			height: '0'
		}, {
			duration: 1000,
			complete: function(){ 
				clickSelector.siblings('span').stop(true).css('opacity', '0').animate({
					opacity: '1',
					height: clickHeight
				}, 2000);
			}
		});
	});*/



//.animate({properties}, {options});