// getting elements

const txtJoinElement = document.getElementById('txt-join');




// function 


/*
 this code mimic the user login since we dont have a databse yet 
 so we are using a checker that will check if a login button i clicked
 if it it  is clicked it will  create a local storage of yes to register a user log-in 

  this local storage will be used used later to determine  which content to display on the home page 
  just for presentation purposes  since we currently do not have a back end to our project
 */ localStorage.setItem('login-icon','yes');

if(!localStorage.getItem('login')){

 
 

}else{

txtJoinElement.innerHTML =`<h1 class="txt-call-for-action">Welcome to Code head hub learning platform</h1>
<p class="txt-call-for-action">Unlock Your Potential, One Skill at a Time! <br>Every step brings you closer to success. <br> a community that is future-focused</p>
<button id="btn-join-us" class="btn-join-us"><a href="#courses">Start Learning!</a></button>`;

document.getElementById('btn-log-out').style='display:block';
}




 const loginButtonElement = document.getElementById('btn-log-out');

 loginButtonElement.addEventListener('click', ()=>{

  localStorage.removeItem('login');
  localStorage.removeItem('login-icon');
 

 })

 <button id="btn-login" type="Submit" title ="click to sign in">SIGN IN</button>