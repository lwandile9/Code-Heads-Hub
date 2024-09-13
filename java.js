function checkPassword(){

  let password = document.getElementById("password").value;
  let passConfirm = document.getElementById("passConfirm").value;
  console.log(password, passConfirm);
}









function validate()

{
    let password = document.getElementById("password");
    



    if(password.value.length <= 5){

        alert("Password must be longer than 5 characters");
        return false;

    }
    if(password.value.length >= 18){

        alert("Password must not be longer than 18 characters");
        return false;
    }
    if(!/[a-z]/.test(password)){
        return false;
     
    }
    if(!/[^^a-zA0-9]/.test(password)){
        return false;

    }
      return true;
}
function validate(){


   let email = document.getElementById("email");
   

   

   let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return regex.test(email);}
   
     if (validateEmail(email)) {
    console.log("Valid email address");
  } else {
    console.log("Invalid email address");
  }