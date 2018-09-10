'use strict';
//global variables that reference the charInfo div by its ID.
const peterEl = document.getElementById("peter");
const chrisEl = document.getElementById("chris");
const brianEl = document.getElementById("brian");

const charArray = [peterEl, chrisEl, brianEl];
//reference for <h2> that I want to use as a button
const button = Array.from(document.querySelectorAll(".charHead"));
for (var i = 0; i < button.length; i++) {
      button[i].addEventListener('click', toggleDisplay);
   }


//function to show / hide image and paragraph for each character
function toggleDisplay(e){
    const charInfo = document.getElementsByClassName('charInfo');
    const btn_id = e.target.id;
    
    for(var i = 0; i < charInfo.length; i++){
        if(btn_id === "pg_btn" && charInfo[i].id === "peter"){
           peterEl.classList.toggle('isHidden');
        }else if(btn_id === "cg_btn" && charInfo[i].id === "chris"){
           chrisEl.classList.toggle('isHidden');
        }else{
           brianEl.classList.toggle('isHidden');
        }
    }
    
}


/*
Source for toggle with classList and Switch
http://dh.obdurodon.org/javascript/classListToggle.xhtml
*/
