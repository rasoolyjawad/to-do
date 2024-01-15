const inputBox = document.getElementById("input");
const listBox = document.getElementById("list-box");
const addButton = document.getElementById("addButton");

//capitalize first letter function
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// add to list
function addToList() {
  const inputValue = inputBox.value.trim();
  if (inputValue === "") {
    alert("Please write something to add..");
  } else {
    let li = document.createElement("li");

    //capitalize the first letter

    let capitalizedInput = capitalizeFirstLetter(inputBox.value);

    li.innerHTML = capitalizedInput;
    listBox.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }
  inputBox.value = "";
}

listBox.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// click enter to add to list function
addButton.addEventListener("click", addToList);

inputBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addToList();
  }
});

// saving and loading data
function saveData() {
  localStorage.setItem("data", listBox.innerHTML);
}

function showData() {
  listBox.innerHTML = localStorage.getItem("data");
}
showData();
