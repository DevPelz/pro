// alert("It works!")

// 'speechSynthesis' in window ? console.log("Web Speech API supported!") : console.log("Web Speech API not supported :-(")

if('speechSynthesis' in window){
	console.log("Web Speech API supported!")
} else {
	console.log("Web Speech API not supported :-(")   
}

'speechSynthesis' in window ? console.log("Web Speech API supported!") : console.log("Web Speech API not supported :-(")

const synth = window.speechSynthesis
let ourText = "Hey there what's good!!!!"
const utterThis = new SpeechSynthesisUtterance(ourText)

synth.speak(utterThis)

// making my app dynamic
const textInputField = document.querySelector("#text-input")
const form = document.querySelector("#form")
const utterthis = new SpeechSynthesisUtterance()
const synt = window.speechSynthesis
let ourtext = ""

const checkBrowserCompatibility = () => {
  "speechSynthesis" in window
    ? console.log("Web Speech API supported!")
    : console.log("Web Speech API not supported :-(")
}

checkBrowserCompatibility()

form.onsubmit = (event) => {
  event.preventDefault()
  ourText = textInputField.value
  utterThis.text = ourText
  synth.speak(utterThis)
  textInputField.value = ""
}

// pitch test

// const synth = window.speechSynthesis;

const inputForm = document.querySelector('form');
const inputTxt = document.querySelector('input');
const voiceSelect = document.querySelector('select');

const voices = synth.getVoices();

// ...

inputForm.onsubmit = (event) => {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
//   const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for (let i = 0; i < voices.length ; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  utterThis.pitch = 1.5;
  synth.speak(utterThis);
  inputTxt.blur();
}