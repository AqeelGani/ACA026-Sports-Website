// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAlJnxnNayuW08Ek0W0FiueBqp_qwP8-JM",
    authDomain: "aca025-sports-website.firebaseapp.com",
    databaseURL: "https://aca025-sports-website-default-rtdb.firebaseio.com",
    projectId: "aca025-sports-website",
    storageBucket: "aca025-sports-website.appspot.com",
    messagingSenderId: "162884738688",
    appId: "1:162884738688:web:84f00b319ae6257bd55065"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  document.getElementById('options').addEventListener('submit',submitForm);
  
  function submitForm(e){
    e.preventDefault();
    var year = getinputval('year')
    readResults(year)
  }
function getinputval(id){
  alert (document.getElementById(id).value)
  return document.getElementById(id).value
}
function readResults(year){
  var results = firebase.database().ref(year);
  // document.getElementById('iplresults').addEventListener('submit',submitForm);
  results.on('value',(data) => {
      var ranks = data.val();
      var result2 = ranks.toString().split(',')
      document.getElementById("result1").innerHTML = "<br > 1" + result2[1];
      document.getElementById("result2").innerHTML = "<br > 1" + result2[2];
      document.getElementById("result3").innerHTML = "<br > 1" + result2[3];
      document.getElementById("result4").innerHTML = "<br > 1" + result2[4];
      document.getElementById("result5").innerHTML = "<br > 1" + result2[5];
      document.getElementById("result6").innerHTML = "<br > 1" + result2[6];
      document.getElementById("result7").innerHTML = "<br > 1" + result2[7];
      document.getElementById("result8").innerHTML = "<br > 1" + result2[8];
      document.getElementById("result9").innerHTML = "<br > 1" + result2[9];
      document.getElementById("result10").innerHTML = "<br > 1" + result2[10];
      document.getElementById("result11").innerHTML = "<br > 1" + result2[11];
      document.getElementById("result12").innerHTML = "<br > 1" + result2[12];
      document.getElementById("result13").innerHTML = "<br > 1" + result2[13];
  })
}