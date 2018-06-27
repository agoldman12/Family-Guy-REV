'use strict';

//reference for <h2> that I want to use as a button
const button = document.getElementsByClassName("charHead");
for (var i = 0; i < button.length; i++) {
      button[i].addEventListener('click', toggleDisplay, false);
   }

//function to show / hide image and paragraph for each character
function toggleDisplay(){
    const charInfo = document.getElementsByClassName('charInfo');
    const btn_id = this.id;
    
    for(var i = 0; i < charInfo.length; i++){
        if(btn_id === "pg_btn" && charInfo[i].id === "peter"){
            const peter = document.getElementById("peter");
            peter.classList.toggle('isHidden');
        }else if(btn_id === "cg_btn" && charInfo[i].id === "chris"){
            const chris = document.getElementById("chris");
            chris.classList.toggle('isHidden');
        }else{
            const brian = document.getElementById("brian");
            brian.classList.toggle('isHidden');
        }
    }
}



/*
code above based on the following:
Source for toggle with classList and Switch 
http://dh.obdurodon.org/javascript/classListToggle.xhtml
*/
