'use strict';
/***********************************************************
      Code below is where I am now
      - Three different functions, one for each character
************************************************************/
//function to show / hide peter griffin 
function togglePeter(){
	let peter = document.getElementById('peter');

    if(peter.classList.contains('isHidden')){
    	peter.classList.remove('isHidden');
    }else{
    	peter.classList.add('isHidden');
    }
    
}
let pg_btn = document.getElementById('pg_btn');
pg_btn.addEventListener('click', togglePeter);

//function to show / hide Chris griffin 
function toggleChris(){
	
    let chris = document.getElementById('chris');
    chris.classList.toggle('isHidden');
    
}
let cg_btn = document.getElementById('cg_btn');
cg_btn.addEventListener('click', toggleChris);

//function to show / hide Brian griffin 
function toggleBrian(){
	
	let brian = document.getElementById('brian');
        brian.classList.toggle('isHidden');
}
let bg_btn = document.getElementById('bg_btn');
bg_btn.addEventListener('click', toggleBrian);

/************************************************************
      Code below is where I want to go
      - single function to show/hide all character info
*************************************************************/

//This code loops through all charinfo divs and toggles isHidden. However it does it to all three at the same time.
//Need to figure out how to use nextSibling (or something similar).

/*
//show and hide image / paragraph for each character
function toggleDisplay(){

    let charInfo = document.getElementsByClassName('charInfo');

    for(var i = 0; i < charInfo.length; i++){
       charInfo[i].classList.toggle('isHidden');

    }
}

//reference for <h2 class="charHead"></h2> that I want to use as a button
let button = document.getElementsByClassName("charHead");
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', toggleDisplay, false);
}
*/
