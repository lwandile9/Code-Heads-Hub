

export function setSessionData(email, name){

sessionStorage.setItem('email', email);
sessionStorage.setItem('name',  name);

}
export function getSessionData(email, name){

sessionStorage.getItem('email', email);
sessionStorage.getItem('name',  name);

}



export function  userLogout(email, name){

// Remove a session storage item
sessionStorage.removeItem(email);
sessionStorage.removeItem(name);

}
