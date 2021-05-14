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
var containers = document.querySelector(".container")

listParas.forEach(item=>{
    item.addEventListener("mouseover", (e)=>{
        console.log(e.target.innerHTML.trim());
    })
})
var btnSummit = document.querySelector("button");
var gg = document.querySelector(".person-message");
var wapperChatBox = document.querySelector(".chatbox");
var abcd = document.querySelector("input");
btnSummit.addEventListener("click", ()=>{
    var newWapper = document.createElement("div");
    newWapper.classList.add("person-message");
    var newContent = document.createElement("p");
    newContent.classList.add("content-message");
    newContent.innerHTML = abcd.value;
    newWapper.appendChild(newContent);   
    wapperChatBox.appendChild(newWapper);
    abcd.value = "";
    document.querySelector(".end").scrollIntoView();
});

var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   btnSummit.click();
  }
});