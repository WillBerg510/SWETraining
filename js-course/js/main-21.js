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
  newDiv.classList.add("darkblue");
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

const oneSquare = view2.firstChild;
console.log(oneSquare);

const doSomething = () => {
  console.log("Beep!");
}

oneSquare.addEventListener("click", doSomething);
oneSquare.removeEventListener("click", doSomething);

oneSquare.addEventListener("click", function (event) {
  event.stopPropagation();
  event.target.textContent = "!!";
  oneSquare.addEventListener("mouseover", function (event) {
    oneSquare.classList.add("largertext");
  })
  oneSquare.addEventListener("mouseout", function (event) {
    oneSquare.classList.remove("largertext");
  })
})

document.addEventListener("readystatechange", function (event) {
  if (event.target.readyState === "complete") {
    console.log("Let's go!");
    initApp();
  }
})

function initApp() {
  const twoSquare = oneSquare.nextSibling;
  twoSquare.addEventListener("click", function (event) {
    event.stopPropagation();
    twoSquare.style.transition = "background-color 0.5s";
    twoSquare.style.backgroundColor = "#ee4444";
  });
  view2.addEventListener("click", function (event) {
    view2.style.transition = "background-color 0.5s";
    view2.style.backgroundColor = "#ffffff";
  });
  const threeSquare = twoSquare.nextSibling;
  console.log(threeSquare);
  threeSquare.addEventListener("click", function (event) {
    event.stopPropagation();
    threeSquare.style.transition = "background-color 0.5s";
    threeSquare.classList.toggle("green");
    threeSquare.classList.toggle("darkblue");
  })
};