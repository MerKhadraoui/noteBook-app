const list = document.querySelector("#List");
const listArr = document.querySelectorAll("#list li");
list.style.display = "none";
const addToList = () => {
  let userData = document.querySelector("#userData").value;
  //   console.log(userData);
  if (userData != "") {
    let newLi = document.createElement("li");
    let text = document.createTextNode(userData);
    newLi.appendChild(text);
    document.querySelector(".result").appendChild(newLi);
    document.querySelector("#userData").value = "";
    const listItem = document.querySelectorAll("li");
  } else {
    document.querySelector("#userData").placeholder = "Please Enter text first";
  }
};
const colorGen = () => {
  let result = "#";
  let colorCod = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += colorCod[Math.floor(Math.random() * 16)];
  }
  return result;
};
