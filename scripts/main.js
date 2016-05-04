var myimage=document.querySelector('img');

myimage.onclick = function(){
	
	if (myimage.getAttribute('src')==='images/trial-california.jpeg'){
		myimage.setAttribute('src','images/the-best-one-california.jpeg')
	} else {
		myimage.setAttribute('src','images/trial-california.jpeg')
	}
}

/*var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/trial-california.jpeg') {
      myImage.setAttribute ('src','images/the-best-one-california.jpeg');
    } else {
      myImage.setAttribute ('src','images/trial-california.jpeg');
    }
}*/

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Βενιζελικά, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Βενιζελικά, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}