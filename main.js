const continuebtn = document.getElementById("continue");
const container = document.getElementById("container");
const letter = document.getElementById("letter");

continuebtn.onclick = function(){
    letter.style.display = "block";
    setTimeout(function(){
        container.classList.toggle("active");
        letter.classList.toggle("active");
        setTimeout(function(){
            container.style.display = "none";
        },200)
    }, 1)
}