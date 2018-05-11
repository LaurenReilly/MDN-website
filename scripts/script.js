var myImage = document.querySelector ('img');
myImage.onclick =  function() {
    var mySrc = myImage.getAttribute ('src');
    if(mySrc === 'images/smiling-lauren.jpg') {
        myImage.setAttribute ('src', 'images/peace-lauren.jpg');
    } else {
        myImage.setAttribute ('src', 'images/smiling-lauren.jpg');
    }

}