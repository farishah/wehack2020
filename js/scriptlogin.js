// Function for sign in button, checks to see if  user credentials entered are correct
// Fake parent ID for now: 
// Parent ID: kai.daniels || password = kaidaniels000

function validate() {
  var parentID = document.getElementById("parent-id").value;
  var parentPassword = document.getElementById("parent-password").value;
  
  if (parentID == "diana.adele" && parentPassword == "password") {
    // Redirects to parent home page
    window.location = "index.html"; 
    return true;
  }
  else if (parentID == "annie.barrett" && parentPassword == "password"){
  // Redirects to parent home page
  window.location = "teacherindex.html"; 
  return true;
  }
  else {
    alert("Login unsuccesful. Please try again.");
    return false;
  }
}

function returnToMain() {
  alert("Returning to previous page...");
  window.location = "mainMenu.html";
  return false;
}
