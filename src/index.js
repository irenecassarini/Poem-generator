function generatePoem(event){
event.preventDefault();

let poemElement = document.querySelector("#poem");
poemElement.innerHTML = "ACAB";

new Typewriter("poem",{
    strings: "ACAB",
    autostart: true,
    cursor: "",
}

)

}

let poemFormElement = document.querySelector("poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);