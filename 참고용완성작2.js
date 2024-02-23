function addContents() {
    let newItem = document.createElement("div");
    let $in1 = document.querySelector(".in1");
    let $in2 = document.querySelector(".in2");
    let $in3 = document.querySelector(".in3");
    let text = `이름: ${$in1.value}, 연락처: ${$in2.value}, 한마디: ${$in3.value}`;
    let newText = document.createTextNode(text);
    newItem.appendChild(newText);
    let $itemList = document.querySelector("#inpo");
    $itemList.appendChild(newItem);

    $in1.value = "";
    $in2.value = "";
    $in3.value = "";
    newItem.addEventListener("click", function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    })
}
function toggleUnderline(event) {
    if (event.target.tagName.toLowerCase() === 'li') {
        event.target.classList.toggle("throughline");
    }
}

var body = document.body;
var toggleDarkMode = document.getElementById("toggleDarkMode");
var toggleDarkModeButton = document.getElementById("toggleDarkMode");

toggleDarkModeButton.onclick = function () {
    body.classList.toggle("dark-mode");
    toggleDarkMode.innerText = body.classList.contains("dark-mode") ? "Dark Mode On" : "Dark Mode Off";
};

function newRegister() {
    let newItem = document.createElement("li");
    let $subject = document.querySelector("#subject");
    let newText = document.createTextNode($subject.value);
    newItem.appendChild(newText);

    let $itemList = document.querySelector("#itemList");
    $itemList.insertBefore(newItem, $itemList.childNodes[0]);
    $subject.value = "";
    newItem.style.cursor = "pointer"
}