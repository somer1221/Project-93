var firebaseConfig = {
    apiKey: "AIzaSyC_qldD0ixhRXoHkh6EpQvkcSv2aqvJvAY",
    authDomain: "kwitterv2.firebaseapp.com",
    databaseURL: "https://kwitterv2-default-rtdb.firebaseio.com",
    projectId: "kwitterv2",
    storageBucket: "kwitterv2.appspot.com",
    messagingSenderId: "510845754223",
    appId: "1:510845754223:web:4050ee8fdc7261837a269a"
  };
  firebase.initializeApp(firebaseConfig);

  function addRoom() {
    room_name = document.getElementById("room_name").value
    firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
    });
    localStorage.setItem("room_Name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("The room name is … " + Room_names);
row = "<div  id="+Room_names +"onclick='redirectToRoomName(this.id)>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML = row;
//End code
});});}
getData();


function redirectToRoomName(name) {
    localStorage.setItem("Room_Name",name)
    window.location = "kwitter_page.html";
}
  
user_name = localStorage.getItem("Username"); 
room_name = localStorage.getItem("Room_name");

function sendmessage() {
  message = document.getElementById("message").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:message,
    like:0
  })
  document.getElementById("msg").value = "";
  }

function logout() {
localStorage.removeItem("Username");
localStorage.removeItem("Room_name"); 
window.location = "index.html";
}
