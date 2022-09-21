//let button = document.getElementById("drum-pads");
//button.addEventListener("click", buttonPress);

//function buttonPress() {
//    alert("teehee you pressed a button 😂");
//}

//console.log(button);

//Cymbal button
const cymbalButton = document.getElementById("cymbal");
const cymbalSound = new Audio('drum-sounds/cymbal (4).wav');

cymbalButton.addEventListener("click", cymbalButtonPress);

function cymbalButtonPress() {
    cymbalSound.play();
}

//Clap button
const clapButton = document.getElementById("clap");
const clapSound = new Audio('drum-sounds/clap (3).wav');

clapButton.addEventListener("click", clapButtonPress);

function clapButtonPress() {
    clapSound.play();
}

//floor tom button
const floorTomButton = document.getElementById("floor-tom");
const floorTomSound = new Audio('drum-sounds/floor-tom.wav');

floorTomButton.addEventListener("click", floorTomButtonPress);

function floorTomButtonPress() {
    floorTomSound.play();
}

//mid tom button
const midTomButton = document.getElementById("mid-tom");
const midTomSound = new Audio('drum-sounds/mid-tom.wav');

midTomButton.addEventListener("click", midTomButtonPress);

function midTomButtonPress() {
    midTomSound.play();
}

//high tom button
const highTomButton = document.getElementById("high-tom");
const highTomSound = new Audio('drum-sounds/high-tom.wav');

highTomButton.addEventListener("click", highTomButtonPress);

function highTomButtonPress() {
    highTomSound.play();
}


//Kick button
const kickButton = document.getElementById("kick");
const kickSound = new Audio('drum-sounds/kick (4).wav');

kickButton.addEventListener("click", kickButtonPress);

function kickButtonPress() {
    kickSound.play();
}

//snare button
const snareButton = document.getElementById("snare");
const snareSound = new Audio('drum-sounds/snare (45).wav');

snareButton.addEventListener("click", snareButtonPress);

function snareButtonPress() {
    snareSound.play();
}

//high hat open
const hiHatOButton = document.getElementById("open-hi");
const hiHatOSound = new Audio('drum-sounds/hi hat (36).wav');

hiHatOButton.addEventListener("click", hiHatOButtonPress);

function hiHatOButtonPress() {
    hiHatOSound.play();
}


//high hat closed
const hiHatCButton = document.getElementById("closed-hi");
const hiHatCSound = new Audio('drum-sounds/hi hat (35).wav');

hiHatCButton.addEventListener("click", hiHatCButtonPress);

function hiHatCButtonPress() {
    hiHatCSound.play();
}