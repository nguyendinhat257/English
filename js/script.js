var listChars = document.querySelectorAll(".char");
var i = 0;
 var goback = setInterval( function(){
        console.log(i);
        listChars[i].classList.add("animate");
        i++;
        if (i == listChars.length) {
            clearInterval(goback);
            let title = document.querySelector(".title");
           setTimeout(()=>{
            title.style.display = "none";
            title = document.querySelector(".container");
            title.classList.add("show");
           },2000)
        }
    },200);
var listParas = document.querySelectorAll("p");
listParas.forEach(item=>{
    item.addEventListener("mouseover", (e)=>{
        console.log(e.target.innerHTML.trim());
    })
})
var btnSummit = document.querySelector("button");
var gg = document.querySelector(".person-message");
var wapperChatBox = document.querySelector(".chatbox");
var abcd = document.querySelector("input");


function chatBoxReply() {
    var newChatBoxRep = document.createElement("div");
    var newContentChatBoxRep = document.createElement("p");
    newChatBoxRep.classList.add("chatbox-message");
    newContentChatBoxRep.classList.add("content-message");
    var keyChar = abcd.value[abcd.value.length-1];
    fetch("https://api.datamuse.com/words?sp=" + keyChar + "*")  
    .then(response => response.json())
    .then(data => 
        {
            console.log(keyChar);
            newContentChatBoxRep.innerHTML = data[0].word;
            newChatBoxRep.appendChild(newContentChatBoxRep);
            wapperChatBox.appendChild(newChatBoxRep);

        }
    );
}

btnSummit.addEventListener("click", ()=>{
    var newWapper = document.createElement("div");
    newWapper.classList.add("person-message");
    var newContent = document.createElement("p");
    newContent.classList.add("content-message");
    newContent.innerHTML = abcd.value;
    newWapper.appendChild(newContent);   
    wapperChatBox.appendChild(newWapper);
    document.querySelector(".end").scrollIntoView();
    listParas = document.querySelectorAll("p");
    console.log(listParas); 
    newContent.addEventListener("mouseover", (e)=>{
        console.log(e.target.innerHTML.trim());
    });
    chatBoxReply();
    abcd.value = "";
});

var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   btnSummit.click();
  }
});

var containers = document.querySelector(".container")

