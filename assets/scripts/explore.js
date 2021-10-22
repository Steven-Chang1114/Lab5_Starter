// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const button = document.getElementsByTagName("button")[0]
  const image = document.getElementsByTagName("img")[0];
  const text = document.getElementsByTagName("textarea")[0]
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select")
  let voices;

  populateVoiceList();

  // synth.speaking.addEventListener("change", ()=> {
  //   console.log("Changed")
  // })

  button.addEventListener("click", () => {
    voices = speechSynthesis.getVoices();
    var utterThis = new SpeechSynthesisUtterance(text.value);
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(let i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);

    if (synth.speaking) {
      image.src = `assets/images/smiling-open.png`
    } 

    setTimeout(() => {
      image.src = `assets/images/smiling.png`
    }, 1000)
   //

    text.blur();
  })
}

  function populateVoiceList(voices) {
    if(typeof speechSynthesis === 'undefined') {
      return;
    }
    voices = speechSynthesis.getVoices();

    for(var i = 0; i < voices.length; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }




