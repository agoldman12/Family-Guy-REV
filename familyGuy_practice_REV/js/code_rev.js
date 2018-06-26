'use strict';
/***********************************************************
      Code below is where I am now
      - Three different functions, one for each character
************************************************************
//function to show / hide peter griffin 
function togglePeter(){
    const peter = document.getElementById('peter');
    peter.classList.toggle('isHidden');
    
}
const pg_btn = document.getElementById('pg_btn');
pg_btn.addEventListener('click', togglePeter);

//function to show / hide Chris griffin 
function toggleChris(){
    
    const chris = document.getElementById('chris');
    chris.classList.toggle('isHidden');
    
}
const cg_btn = document.getElementById('cg_btn');
cg_btn.addEventListener('click', toggleChris);

//function to show / hide Brian griffin 
function toggleBrian(){
    
    const brian = document.getElementById('brian');
        brian.classList.toggle('isHidden');
}
const bg_btn = document.getElementById('bg_btn');
bg_btn.addEventListener('click', toggleBrian);

/************************************************************
      Code below is where I want to go
      - single function to show/hide all character info
*************************************************************/

//This code loops through all charinfo divs and toggles isHidden. However it does it to all three at the same time.
//Need to figure out how to use nextSibling (or something similar).

//reference for <h2> that I want to use as a button
const button = document.getElementsByClassName("charHead");
for (var i = 0; i < button.length; i++) {
      button[i].addEventListener('click', toggleDisplay, false);
   }

function toggleDisplay(){
      let charInfo = document.getElementsByClassName('charInfo');
      for(var i = 0; i < charInfo.length; i++){
        charInfo[i].classList.toggle('isHidden');
      }
}
