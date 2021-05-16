var Aufgabe_8;
(function (Aufgabe_8) {
    window.addEventListener("load", function () {
        document.querySelector("#drum1").addEventListener("click", function () { playSample("assets/kick.mp3"); });
        document.querySelector("#drum2").addEventListener("click", function () { playSample("assets/snare.mp3"); });
        document.querySelector("#drum3").addEventListener("click", function () { playSample("assets/hihat.mp3"); });
        document.querySelector("#drum4").addEventListener("click", function () { playSample("assets/F.mp3"); });
        document.querySelector("#drum5").addEventListener("click", function () { playSample("assets/G.mp3"); });
        document.querySelector("#drum6").addEventListener("click", function () { playSample("assets/A.mp3"); });
        document.querySelector("#drum7").addEventListener("click", function () { playSample("assets/C.mp3"); });
        document.querySelector("#drum8").addEventListener("click", function () { playSample("assets/laugh-2.mp3"); });
        document.querySelector("#drum9").addEventListener("click", function () { playSample("assets/laugh-1.mp3"); });
        document.querySelector("#Play").addEventListener("click", PlayBeat);
        document.querySelector("#Record").addEventListener("click", RecordBeat);
        document.querySelector("#Delete").addEventListener("click", DeleteBeat);
        document.querySelector("#Remix").addEventListener("click", MixBeat);
    });
    var mp3 = ["assets/kick.mp3", "assets/snare.mp3", "assets/hihat.mp3", "assets/F.mp3", "assets/G.mp3", "assets/A.mp3", "assets/C.mp3", "assets/laugh-2.mp3", "assets/laugh-1.mp3"];
    var sequence = [];
    sequence[0] = "assets/kick.mp3";
    sequence[1] = "assets/hihat.mp3";
    sequence[2] = "assets/kick.mp3";
    sequence[3] = "assets/snare.mp3";
    var kick;
    var record = false;
    function playSample(mp3) {
        var sound = new Audio(mp3);
        sound.play();
        if (record == true) {
            sequence.push(mp3);
        }
    }
    function PlayBeat() {
        var index = 0;
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
        function mytone() {
            playSample(sequence[index]);
            index += 1;
            if (index > (sequence.length - 1))
                index = 0;
            console.log(sequence[index]);
        }
    }
    function DeleteBeat() {
        sequence.length = 0;
        console.log("Deleting beat");
    }
    function RecordBeat() {
        record = true;
        console.log("Recording beat");
    }
    function MixBeat() {
        sequence.length = 0;
        for (var i = 0; i < 3; i++) {
            var index_1 = Math.floor(Math.random() * 8);
            console.log(index_1);
            playSample(mp3[index_1]);
            console.log("Remix beat");
        }
    }
})(Aufgabe_8 || (Aufgabe_8 = {}));
//# sourceMappingURL=script.js.map