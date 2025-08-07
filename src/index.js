function generatePoem(event){
event.preventDefault();

new Typewriter("poem",{
    strings: "ACAB",
    autostart: true,
    cursor: "",
    delay: 10,
})

}

let poemFormElement = document.querySelector("poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);