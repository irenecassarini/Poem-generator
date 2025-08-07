function generatePoem(event){
event.preventDefault();

let poemElement = document.querySelector("#poem");
poemElement.innerHTML = "ACAB";
alert("generating Poem");
}

let poemFormElement = document.querySelector("poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);