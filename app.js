$("#user-page").hide();
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      $("#log-in-div").hide();
      $("#user-page").show();
    } else {
        $("#log-in-div").show();
        $("#user-page").hide();
    }
  });

$("#log-in").on("submit", function(){
    var userEmail = $("#userEmail").val().trim();
    var userPassword = $("#userPassword").val().trim();

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
})