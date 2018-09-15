'use strict';
//global variables that reference the charInfo div by its ID.
const peterEl = document.getElementById("peter");
const chrisEl = document.getElementById("chris");
const brianEl = document.getElementById("brian");

//function to show / hide image and paragraph for each character
function toggleDisplay(e){
    const charArray = [peterEl, chrisEl, brianEl];
    const btn_id = e.target.id;
    
    for(var i = 0; i < charArray.length; i++){
        if(btn_id === "pg_btn" && charArray[i].id === "peter"){
           peterEl.classList.toggle('isHidden');
        }else if(btn_id === "cg_btn" && charArray[i].id === "chris"){
           chrisEl.classList.toggle('isHidden');
        }else{
           brianEl.classList.toggle('isHidden');
        }
    }
    
}


/*************  BUTTON INITIALIZATION  ***************/

function buttonInit(){
      document.addEventListener('click', function(e){
          if(e.target.classList.contains('charHead')){
             toggleDisplay(e);
          }
      });
}
buttonInit();


/*
Source for toggle with classList and Switch
http://dh.obdurodon.org/javascript/classListToggle.xhtml
*/
