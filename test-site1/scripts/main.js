var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button')
//myHeading.innerHTML = 'Hello world!';
var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/qiandao1.jpg'){
        myImage.setAttribute('src','images/loudi2.jpg')
    }else{
        myImage.setAttribute('src', 'images/qiandao1.jpg')
    }
}
function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = myName;
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = '个人网页' + storedName;
}
myButton.onclick = function(){
    setUserName();
}