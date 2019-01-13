//1.Initialize FireBase
firebase.initializeApp(config);
console.log(config);



//Determine if connected to firebase
// let connectionsRef = database.ref("/connections");

//create variable to store client's connection state'.info/connect'  
// let connectedRef = database.ref(".info/connected");

var ref = firebase.database().ref('Trains');

//variables for  train info
let trainName;
let trainDestination;
let trainFreq;
let train_nextArr;





//add event listener to #submit-newTrain
$("#submit-addTrain").on("click", function addNewTrain() {
  // takes information from form and stores it in firebase
  firebase.database().ref().update({
    name:(
    trainName = $("#Input1").val().trim()
    ),
    destination: (
    trainDestination = $("#Input2").val().trim()
    ),
    frequency : (
    trainFreq = $("#Input3").val().trim()
    ),
    arrival : (
    train_nextArr = $("#Input4").val().trim()
    )
  });

  console.log(addNewTrain);
});