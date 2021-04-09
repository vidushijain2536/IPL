var firebaseConfig = {
    apiKey: "AIzaSyAnDe9jCD_Ba8YztZ47TuTiVP2E4zAUSiA",
    authDomain: "ipl-a9c2e.firebaseapp.com",
    databaseURL: "https://ipl-a9c2e-default-rtdb.firebaseio.com",
    projectId: "ipl-a9c2e",
    storageBucket: "ipl-a9c2e.appspot.com",
    messagingSenderId: "99948879283",
    appId: "1:99948879283:web:95d6255f5963cebfdc7fc6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


document.getElementById('datavalue').addEventListener('submit',submitForm);
function submitForm(e){
    e.preventDefault();
    var year =getInputVal('year');
    readResults(year);
}
    function getInputVal(id){
    return document.getElementById(id).value;
}

function readResults(year){
    
    var results=firebase.database().ref(year);
    results.on('value', (data) => {
     var ranks = data.val(); 
     var finalranks=ranks.toString().split(',');
     document.getElementById("result1").innerHTML ="<br > 1. " +finalranks[1];
     document.getElementById("result2").innerHTML ="<br > 2. " +finalranks[2];
     document.getElementById("result3").innerHTML ="<br > 3. " +finalranks[3];
     document.getElementById("result4").innerHTML ="<br > 4. " +finalranks[4];
     document.getElementById("result5").innerHTML ="<br > 5. " +finalranks[5];
     document.getElementById("result6").innerHTML ="<br > 6. " +finalranks[6];
     document.getElementById("result7").innerHTML ="<br > 7. " +finalranks[7];
     document.getElementById("result8").innerHTML ="<br > 8. " +finalranks[8];

    
})
}