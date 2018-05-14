var myImage = document.querySelector ('img');
myImage.onclick =  function() {
    var mySrc = myImage.getAttribute ('src');
    if(mySrc === 'images/smiling-lauren.jpg') {
        myImage.setAttribute ('src', 'images/peace-lauren.jpg');
    } else {
        myImage.setAttribute ('src', 'images/smiling-lauren.jpg');
    }

}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Lauren welcomes you, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Lauren welcomes you, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }