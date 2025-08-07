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

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "334ff5a8425o317bf171aa4a1a6b3b0t";
    let context = "You are a wise old spirit that hates capitalism";
    let prompt = `Please create a short poem with an anticapitalist perspective about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`; 

    axios(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
