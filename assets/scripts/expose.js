// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const volume = document.querySelector("#volume");
  const button = document.getElementsByTagName("button")[0];
  const horn = document.getElementById("horn-select");
  const image = document.getElementsByTagName("img")[0]
  const volumeImg = document.getElementsByTagName("img")[1]
  const audio = document.getElementsByClassName("hidden")[0];
  const jsConfetti = new JSConfetti({button})

  let curHorn = null
  let curVolume = null

  horn.addEventListener("change", () => {
    curHorn = horn.value
    image.src = `http://127.0.0.1:5500/assets/images/${curHorn}.svg`
    audio.src = `assets/audio/${curHorn}.mp3`
  })

  volume.addEventListener("change", () => {
    curVolume = volume.value

    if (curVolume == 0) {
      volumeImg.src = `assets/icons/volume-level-${0}.svg`
    } else if (curVolume < 33) {
      volumeImg.src = `assets/icons/volume-level-${1}.svg`
    } else if (curVolume < 67) {
      volumeImg.src = `assets/icons/volume-level-${2}.svg`
    } else {
      volumeImg.src = `assets/icons/volume-level-${3}.svg`
    }

    audio.volume = curVolume/100
  })

  button.addEventListener("click", () => {
    if (curHorn) {
      if (curHorn === "party-horn") {
        jsConfetti.addConfetti()
      } 
      audio.load()
      audio.play()
    }
  })


}