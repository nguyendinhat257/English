var listChars = document.querySelectorAll(".char");
console.log(listChars);
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
