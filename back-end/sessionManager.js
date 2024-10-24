// Set session storage data
export function setSessionData(email, name) {
  sessionStorage.setItem('email', email);
  sessionStorage.setItem('name', name);
}

// Get session storage data
export function getSessionData() {
  return [sessionStorage.getItem('email'), sessionStorage.getItem('name')];
}

// Logout function to remove session storage items
export function userLogout() {
  sessionStorage.removeItem('email');
  sessionStorage.removeItem('name');
  alert("Logging out the user");
}
