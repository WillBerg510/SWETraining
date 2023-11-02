const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.getElementById("view2");
view1.style.display = "flex";
view2.style.display = "none";

const views = document.getElementsByClassName("view");
console.log(views);

const divs = view1.querySelectorAll("div");
console.log(divs);

const oddDivs = view1.querySelectorAll("div:nth-of-type(2n+1)");
console.log(oddDivs);
for (let i = 0; i < oddDivs.length; i++) {
  oddDivs[i].style.backgroundColor = "darkblue";
}

const navText = document.querySelector("h1");
console.log(navText);
navText.textContent = "Hello world!";
const nav = document.querySelector("nav");
nav.innerHTML = "<h1>Hey!</h1> <p>Here's some smaller text.</p>";
console.log(nav.parentElement.children);

view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "column";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

while (view2.lastChild) {
  view2.lastChild.remove();
}

const createDivs = (parent, iter) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = iter;
  newDiv.style.backgroundColor = "#00f";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.margin = "10px";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  parent.append(newDiv);
}

for (let i = 1; i <= 3; i++) {
  createDivs(view2, i);
}