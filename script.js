let main = document.querySelector("main");
let menu = document.querySelector(".menus");
let navMenu = document.querySelector(".nav-menu");
let closer = document.querySelector(".shadow");
let menuBtn = document.querySelector(".menu-btn");
let content = document.getElementById("content");
let bar = document.querySelector(".name-status");
let viewer = document.querySelector(".view-status");
let loader = document.querySelector(".loader");
let inner = document.querySelector(".inner");
//main.style.display ="none";
window.addEventListener('load', function() {
  main.style.display = 'block';
})

setTimeout(()=>{
    loader.style.display="none";
},15000);
menuBtn.onclick =()=>{
menu.style.width ="100%";
    navMenu.style.width="150vw";
    closer.style.width= "100vw";
}
closer.onclick=()=>{
    navMenu.style.width = "0";
    closer.style.width ="0";
    menu.style.width ="0";
}
function check(me){
    me.style.animation ="none";
    me.children[0].style.animation ="none";
    me.style.borderBottom = "2px solid skyblue";
    viewer.style.display = "block";
    viewer.children[1].children[0].src = me.children[0].src;
}
const chatArea = document.querySelector(".chat-area");
const heading = document.querySelector("#name");
const namePic = document.getElementById("name-pic");
const receivedMsg = document.querySelector(".received");
const chatBox = document.querySelector(".chat-box");
function checkmessage(message){
setTimeout(() => {
    main.style.display ="none";
    heading.innerHTML = message.children[0].children[1].innerHTML;
    namePic.src = message.children[0].children[0].src;
    receivedMsg.innerHTML = message.children[1].innerHTML;
    chatArea.style.display = "block";
    },500);
}
function back(me){
    me.parentElement.style.display = "none";
    main.style.display= "block";
}

const input = document.querySelector("textarea");
function sendMessage(){
let text = input.value;
let bigBox = document.createElement("div");
    let box = document.createElement("pre");
    let textToSend = document.createTextNode(text);
    chatBox.appendChild(bigBox);
    bigBox.appendChild(box);
    box.setAttribute("class","sent");
    box.appendChild(textToSend);
    input.value="";
}