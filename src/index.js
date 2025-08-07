function displayPoem(response){
new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

    let apiKey = "334ff5a8425o317bf171aa4a1a6b3b0t";
    let context = "Please create a short poem with an anticapitalist perspective";
    let prompt = "Create a short poem about this topic";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`; 

    axios(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
