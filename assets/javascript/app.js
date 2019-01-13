//1.Initialize FireBase
firebase.initializeApp(config);
console.log(config);



//Determine if connected to firebase
// let connectionsRef = database.ref("/connections");

//create variable to store client's connection state'.info/connect'  
// let connectedRef = database.ref(".info/connected");

var ref = firebase.database().ref('Trains');

// Grabs train info
// let trainName = $('#name-tr').val().trim() ;
// let trainDestination = $('#lugar').val().trim();
// let trainFreq = $('#freq').val().trim() ;
// let train_nextArr = $('#arv').val().trim() ;
// let train_minAway = $('#mins').val().trim() ;



//add event listener to #submit-newTrain
$("#submit-addTrain").on("click", function addNewTrain() {
  // takes information from form and stores it in firebase
  firebase.database().ref().update({
    // Grabs train info
    name: (
      trainName = $('#name-tr').val()
    ),
    destination: (
      trainDestination = $('#lugar').val().trim()
    ),
    frequency: (
      trainFreq = $('#freq').val().trim()
      ),
    arrival: (
      train_nextArr = $('#arv').val().trim()
      ),
    eta: (
      train_minAway = $('#mins').val().trim()
      )
  });
  console.log(addNewTrain);
});