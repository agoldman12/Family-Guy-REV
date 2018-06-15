'use strict';



//show picture and description
function toggleDisplay(){
	let button = document.getElementsByTagName('h2');
	let span1 = document.getElementById('span1');
	let span2 = document.getElementById('span2');
	let span3 = document.getElementById('span3');
    
    let spans = [span1, span2, span3];

	for(let i = 0; i < spans.length; i++) {
		if(spans[i].classList.contains('isHidden')){
			spans[i].classList.remove('isHidden');
			
		}
	}
	button.addEventListener('click', toggleDisplay);
}





//example of show and hide
//https://www.lifewire.com/show-and-hide-text-3467102 (but uses <a> tags and specific id's)