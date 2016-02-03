Parse.initialize("uled1sX5MMHVBtzypumN39gBKwX9FsK2NtJBhU2k", "ntOlTUKEc0j9KTFX37uScDh8fxdd64ug1MyQbELQ");

function signUpUser() {
	var user = new Parse.User();
	user.set("username", document.getElementById('username-text').value);
	user.set("password", document.getElementById('password-text').value);

	user.signUp(null, {
		success: function(user) {
			//Hooray! Let them use the app now.
			window.location.replace("game.html");
		},
		error: function(user, error) {
			//Show the error message somewhere and let the user try again.
			alert("Error: " + error.message);
		}
	});
}

function logInUser() {
	var user = new Parse.User();
	user.set("username", document.getElementById('username-text').value);
	user.set("password", document.getElementById('password-text').value);

	Parse.User.logIn(document.getElementById('username-text').value, document.getElementById('password-text').value, {
		success: function(user) {
			//Do stuff after successful login.
			window.location.replace("game.html");
		},
		error: function(user, error) {
			//The login failed. Check error to see why.
			alert("Error: " + error.message);
		}
	});
}