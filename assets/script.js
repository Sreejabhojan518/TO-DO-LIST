const inputBox = document.getElementById("myInput");
const listContainer = document.getElementById("myUL");
function newElement(){
    if(inputBox.value === ''){
        alert("Write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
}
else if(ev.target.tagName === 'SPAN'){
    ev.target.parentElement.remove();
}
}, false);




