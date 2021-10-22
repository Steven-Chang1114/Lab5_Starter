// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const button = document.getElementsByTagName("button")[0]
  const image = document.getElementsByTagName("img")[0];
  const speechSynthesis = window.speechSynthesis

  populateVoiceList();
  
  button.addEventListener("click", () => {
    while (speechSynthesis.speaking) {
      image.src = `assets/images/smiling-open.png`
    }

    image.src = `assets/images/smiling.png`
  })
}

function populateVoiceList() {
  if(typeof speechSynthesis === 'undefined') {
    return;
  }
  var voices = speechSynthesis.getVoices();
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

