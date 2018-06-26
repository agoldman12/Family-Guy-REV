'use strict';
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

    if(chris.classList.contains('isHidden')){
    	chris.classList.remove('isHidden');
    }else{
    	chris.classList.add('isHidden');
    }
    
}
let cg_btn = document.getElementById('cg_btn');
cg_btn.addEventListener('click', toggleChris);

//function to show / hide Brian griffin 
function toggleBrian(){
	
	
    let brian = document.getElementById('brian');

    if(brian.classList.contains('isHidden')){
    	brian.classList.remove('isHidden');
    }else{
    	brian.classList.add('isHidden');
    }
    
}
let bg_btn = document.getElementById('bg_btn');
bg_btn.addEventListener('click', toggleBrian);
