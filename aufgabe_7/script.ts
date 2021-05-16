function playSample(sounds: string) {
  var sound: HTMLAudioElement = new Audio(sounds); 
  sound.play();
}

var beats: string[] = ["assets/kick.mp3", "assets/snare.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/hihat.mp3"];

var index: number = 0;

document.querySelector("#drum1").addEventListener("click", function () { playSample("assets/kick.mp3"); });
document.querySelector("#drum2").addEventListener("click", function () { playSample("assets/snare.mp3"); });
document.querySelector("#drum3").addEventListener("click", function () { playSample("assets/hihat.mp3"); });
document.querySelector("#drum4").addEventListener("click", function () { playSample("assets/F.mp3"); });
document.querySelector("#drum5").addEventListener("click", function () { playSample("assets/G.mp3"); });
document.querySelector("#drum6").addEventListener("click", function () { playSample("assets/A.mp3"); });
document.querySelector("#drum7").addEventListener("click", function () { playSample("assets/C.mp3"); });
document.querySelector("#drum8").addEventListener("click", function () { playSample("assets/laugh-2.mp3"); });
document.querySelector("#drum9").addEventListener("click", function () { playSample("assets/laugh-1.mp3"); });
document.querySelector("#playbutton").addEventListener("click", function () {

  var interval: number = setInterval(function () {
      var beat: HTMLAudioElement = new Audio(beats[index]); 
      beat.play();

      index = index + 1;

      if (index == 5) {
          index = 0;
      }

  },                                 300);
});
