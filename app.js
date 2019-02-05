
$(function () {

    var user = firebase.auth().currentUser;
$("#show-trains").on("click",function(){
    
})
if (user) {
    $("#log-in-div").hide();
    $("#user-page").show();
} else {
    $("#log-in-div").show();
    $("#user-page").hide();
}

firebase.auth().onAuthStateChanged(function (user) {
    console.log("outside " +user)
    if (user) {
        $("#log-in-div").hide();
        $("#user-page").show();
        console.log("inside " +user)
        var user = firebase.auth().currentUser;
        if (user != null){
            var email_id= user.email;
        console.log(email_id)
        }
    } else {
        $("#log-in-div").show();
        $("#user-page").hide();
        console.log("else " +user)
    }
});

$("#log-in-button").on("click",function(){
 
    var userEmail = $("#userEmail").val().trim();
    var userPassword = $("#userPassword").val().trim();
console.log(userEmail + userPassword)

firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: "+errorMessage)
  });
//     firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function (error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // ...
//         window.alert("Error: "+errorMessage)

// }) 
   
})

$("#sign-out").on("click",function(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
})
});