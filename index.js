const inputForm = document.querySelector("#inputForm");
const taskList = document.querySelector("#taskList");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = document.querySelector("#taskInput").value.trim();

  // !No Input Alert
  if (!inputValue) {
    alert("Empty Value! Please enter a valid activity");
    taskInput.style.borderColor = "blue";
    taskInput.style.borderWidth = "3px";
    return;
  }

  // ALERT Max #
  const input_number = document.getElementById("taskInput");
  input_number.addEventListener("change", function () {
    if (inputValue.value > 4) {
      alert("Max. number is 4!");
    }
  });

  addToList(inputValue);
  document.querySelector("#taskInput").value = "";
});

function addToList(inputValue) {
  let newListItem = document.createElement("li");
  newListItem.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  let taskSpan = document.createElement("span");
  taskSpan.textContent = inputValue;
  newListItem.appendChild(taskSpan);

  let buttonContainer = document.createElement("div");
  buttonContainer.classList.add("btn-group");

  //DONE
  let doneButton = document.createElement("button");
  doneButton.textContent = "DONE";
  doneButton.classList.add("btn");
  doneButton.addEventListener("click", function (e) {
    e.preventDefault();
  });
  buttonContainer.appendChild(doneButton);

  //DELETE
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "DELETE";
  deleteButton.classList.add("btn", "btn-sm");
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(newListItem);
  });
  buttonContainer.appendChild(deleteButton);
  newListItem.appendChild(buttonContainer);
  taskList.appendChild(newListItem);
}

//I'M JUST TRYING IF MAG WORK PO YUNG DUPLICATE DETECTOR:)

/* function getResults() {
  var radios = document.getElementsByTagName("input");
  var dupDetector = {};
  var value;

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      // value = radios[i].value; // add a prefix to avoid built-in property names
      value = "I_" + radios[i].inputValue;
      if (dupDetector[inputValue]) {
        alert(radios[i].inputValue);
        return;
      }
      dupDetector[inputValue] = true;
    }
  }
}
*/
