let inputBox = document.getElementById("input_Box");

let listContainer = document.getElementById("list-content");
function AddContent() {
    if(inputBox.value.trim() === '') {
        alert("Something must be written!!!");
    }
    else {
        let list = document.createElement('li');
        list.textContent = inputBox.value;
        listContainer.appendChild(list);
        console.log(list);
        let spanTag = document.createElement('span');
        spanTag.textContent = '\u00d7';
        list.appendChild(spanTag);
        inputBox.value = ' ';
        saveData();
    }
}
// For all things which are kept in this listContainer
listContainer.addEventListener("click",function(d) {
    if(d.target.tagName === "LI") {
        d.target.classList.toggle("checked");
    } else if(d.target.tagName === "SPAN") {
       d.target.parentElement.remove();
    }

},false)
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
} 
function loadData() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}
loadData();
