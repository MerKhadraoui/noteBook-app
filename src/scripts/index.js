const addToList = () => {
  let userData = document.querySelector("#userData").value;
  console.log(userData);
  // Checking my input if it has a text
  if (userData != "") {
    let newLi = document.createElement("li");
    let text = document.createTextNode(userData);
    newLi.appendChild(text);
    document.querySelector(".result").appendChild(newLi);
    document.querySelector("#userData").value = "";
    const newContainer = document.createElement("div");
    const doneButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    doneButton.innerHTML = "✓";
    deleteButton.innerHTML = "✗";
    newContainer.appendChild(doneButton);
    newContainer.appendChild(deleteButton);
    doneButton.classList.add("done");
    newLi.appendChild(newContainer);
    const check = () => newLi.classList.toggle("completed");

    deleteButton.addEventListener("click", () => newLi.remove());
    doneButton.addEventListener("click", check);
  } else {
    document.querySelector(
      "#userData"
    ).placeholder = `     Please Enter text first`;
  }
};
const colorGen = () => {
  let result = "#";
  let colorCode = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += colorCode[Math.floor(Math.random() * 16)];
  }
  return result;
};
