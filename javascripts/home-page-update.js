// getting elements

const txtJoinElement = document.getElementById('txt-join');
import {getSessionData, userLogout}  from '../back-end/sessionManager.js';


const sessionDataNow =  getSessionData(); 

  let name = sessionDataNow[0];
  let  email = sessionDataNow[1];

  if(name  && txtJoinElement){

    
     txtJoinElement.innerHTML =`<h1 class="txt-call-for-action">Welcome <p class="user-name">${name}</p> to Code head hub learning platform</h1>
      <p class="txt-call-for-action">Unlock Your Potential, One Skill at a Time! <br>Every step brings you closer to success. <br>a community that is future-focused</p>
      <button id="btn-join-us" class="btn-join-us"><a href="#courses">Start Learning!</a></button>`;

     document.getElementById('btn-log-out').style='display:block';

  }else{

    let htmlLearn = document.getElementById('html-start-learning');
    if(htmlLearn){



 
       htmlLearn.addEventListener('click',()=>{


        alert('You must be singed in to view LMS');
     })

      let cssLearn= document.getElementById('css-start-learning');

       cssLearn.addEventListener('click',()=>{


        alert('You must be singed in to view LMS');
     })

     let jsLearn= document.getElementById('js-start-learning');
     jsLearn.addEventListener('click',()=>{

        alert('You must be singed in to view LMS');

     })

    }

     

      
  }

  
 const btnLogOut = document.getElementById('btn-log-out')
 
 if(btnLogOut){

   btnLogOut.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission or default behavior
    window.location.href = '../lms/profile.html'; // Redirect to the login page
});

 }




const btnLogOut2 =document.getElementById('btn-log-out2')

if(btnLogOut2){  // log out  the user onclick of button


btnLogOut2.addEventListener('click', () => {
     userLogout();
    window.location.href = '../index.html'; // Redirect to the home page
});


}
