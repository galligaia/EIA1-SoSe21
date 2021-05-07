var sounds = [];
sounds[0] = new Audio("assets/kick.mp3");
sounds[1] = new Audio("assets/snare.mp3");
sounds[2] = new Audio("assets/hihat.mp3");
sounds[3] = new Audio("assets/F.mp3");
sounds[4] = new Audio("assets/G.mp3");
sounds[5] = new Audio("assets/A.mp3");
sounds[6] = new Audio("assets/C.mp3");
sounds[7] = new Audio("assets/laugh-2.mp3");
sounds[8] = new Audio("assets/laugh-1.mp3");
document.querySelector(".drumpad").addEventListener("click", function (e) {
    var target = e.target;
    switch (target.id) {
        case "drum1":
            playSample(0);
            break;
        case "drum2":
            playSample(1);
            break;
        case "drum3":
            playSample(2);
            break;
        case "drum4":
            playSample(3);
            break;
        case "drum5":
            playSample(4);
            break;
        case "drum6":
            playSample(5);
            break;
        case "drum7":
            playSample(6);
            break;
        case "drum8":
            playSample(7);
            break;
        case "drum9":
            playSample(8);
            break;
        default:
            break;
    }
});
function playSample(x) {
    sounds[x].play();
}
var beat = [];
beat[0] = new Audio("assets/kick.mp3");
beat[1] = new Audio("assets/snare.mp3");
beat[2] = new Audio("assets/hihat.mp3");
var myIntervall;
document.querySelector("#playbutton").addEventListener("click", function () {
    definedBeat();
});
function definedBeat() {
    beat[0].play();
    beat[1].play();
    myIntervall = setInterval(definedBeat, 500);
}
//# sourceMappingURL=drumset.js.map