// This function checks the username and password
function checkCredentials(username, password) {
  var correctUsername = "your_username";
  var correctPassword = "your_password";

  if (username === correctUsername && password === correctPassword) {
    return true;
  } else {
    return false;
  }
}

// This function is called from the client-side to check credentials
function doGet(e) {
  var params = e.parameter;
  var isValid = checkCredentials(params.username, params.password);
  return ContentService.createTextOutput(isValid);
}
