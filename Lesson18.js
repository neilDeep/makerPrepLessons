// FireBase Lesson
var firebase = new Firebase("https://scorching-torch-7358.firebaseio.com/");

firebase.on("child_added",function(snapshot){
  var data = snapshot.val();
  console.log(data);
});



$("button").click(function(){
  var userMessage = $(".message").val();
  firebase.push(userMessage);
});

var users = firebase.child("users");
var userName = prompt('Please Choose A UserName:');
users.push(username);
