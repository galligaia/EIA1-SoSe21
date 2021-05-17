namespace Aufgabe_8 {
  window.addEventListener("load", function (): void {
  
      document.querySelector("#drum1").addEventListener("click", function (): void { playSample("assets/kick.mp3"); });
      document.querySelector("#drum2").addEventListener("click", function (): void  { playSample("assets/snare.mp3"); });
      document.querySelector("#drum3").addEventListener("click", function (): void  { playSample("assets/hihat.mp3"); });
      document.querySelector("#drum4").addEventListener("click", function (): void  { playSample("assets/F.mp3"); });
      document.querySelector("#drum5").addEventListener("click", function (): void  { playSample("assets/G.mp3"); });
      document.querySelector("#drum6").addEventListener("click", function (): void  { playSample("assets/A.mp3"); });
      document.querySelector("#drum7").addEventListener("click", function (): void  { playSample("assets/C.mp3"); });
      document.querySelector("#drum8").addEventListener("click", function (): void  { playSample("assets/laugh-2.mp3"); });
      document.querySelector("#drum9").addEventListener("click", function (): void { playSample("assets/laugh-1.mp3"); });
      document.querySelector("#Play").addEventListener("click", PlayBeat);
      document.querySelector("#Record").addEventListener("click", RecordBeat);
      document.querySelector("#Delete").addEventListener("click", DeleteBeat);
      document.querySelector("#Remix").addEventListener("click", MixBeat);
  });
  
  var mp3: string[] = ["assets/kick.mp3", "assets/snare.mp3", "assets/hihat.mp3", "assets/F.mp3", "assets/G.mp3", "assets/A.mp3", "assets/C.mp3", "assets/laugh-2.mp3", "assets/laugh-1.mp3"];
  var sequence = [];
  sequence[0] = "assets/kick.mp3";
  sequence[1] = "assets/hihat.mp3";
  sequence[2] = "assets/kick.mp3";
  sequence[3] = "assets/snare.mp3";
  var kick: number;
  var record: boolean = false;
  
  
  function playSample(mp3: string): void {
      var sound: HTMLAudioElement = new Audio(mp3);
      sound.play();
      if (record == true) {
          sequence.push(mp3);
      }
  }
  
  function PlayBeat(): void {
      var index: number = 0;
      if (document.getElementById("Play").classList.contains("fa-play")) {
          document.getElementById("Play").classList.remove("fa-play");
          document.getElementById("Play").classList.add("fa-pause");
          kick = setInterval(mytone, 500);
          record = false;
          console.log("Play");
      }
      else {
          document.getElementById("Play").classList.remove("fa-pause");
          document.getElementById("Play").classList.add("fa-play");
          clearInterval(kick);
          console.log("Pause");
      }
  
      function mytone(): void {
          playSample(sequence[index]);
          index += 1;
          if (index > (sequence.length - 1)) index = 0;
          console.log(sequence[index]);
      }
  }
  
  function DeleteBeat(): void {
      sequence.length = 0;
      console.log("Deleting beat");
  }
  
  function RecordBeat(): void {
      record = true;
      console.log("Recording beat");
  }
  
  function MixBeat(): void {
      sequence.length = 9;
      for (var i: number = 0; i < 3; i++) {
          const index: number = Math.floor(Math.random() * 9);
          console.log(index);
          playSample (mp3 [index] ); 
          console.log("Remix beat");
      }
  }
  }