'use strict';

//reference for <h2> that I want to use as a button
const button = document.getElementsByClassName("charHead");
for (var i = 0; i < button.length; i++) {
      button[i].addEventListener('click', toggleDisplay, false);
   }

//show and hide image / paragraph for each character
function toggleDisplay() {
    let id = this.id;
    switch (id) {
        case "pg_btn": { //id of button
            const peter = document.getElementById("peter"); //id of charInfo div
            peter.classList.toggle("isHidden");
        };
        break;
        case "cg_btn": { //id of button
            const chris = document.getElementById("chris"); //id of charInfo div
            chris.classList.toggle("isHidden");
        };
        break;
        case "bg_btn": { //id of button
            const brian = document.getElementById("brian"); //id of charInfo div
            brian.classList.toggle("isHidden");
        };
        break;
    }
  }


/*
Source for toggle with classList and Switch
http://dh.obdurodon.org/javascript/classListToggle.xhtml
*/
