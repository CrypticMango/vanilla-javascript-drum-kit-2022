//Cymbal button
const cymbalButton = document.getElementById("cymbal");
const cymbalSound = new Audio('drum-sounds/cymbal (4).wav');

cymbalButton.addEventListener("click", cymbalButtonPress);

function cymbalButtonPress() {
    cymbalSound.play();
    cymbalSound.currentTime = 0;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'q'){
        cymbalButtonPress();
        document.getElementById('cymbal').style.backgroundColor = '#C689C6';
    }
  });

document.addEventListener('keyup', function(event) {
    if (event.key === 'q'){
        document.getElementById('cymbal').style.backgroundColor = '#FFD1D1';
    }
  });

//Clap button
const clapButton = document.getElementById("clap");
const clapSound = new Audio('drum-sounds/clap (3).wav');

clapButton.addEventListener("click", clapButtonPress);

function clapButtonPress() {
    clapSound.play();
    clapSound.currentTime = 0;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'w'){
        clapButtonPress();
        document.getElementById('clap').style.backgroundColor = '#C689C6';
    }
  });

  document.addEventListener('keyup', function(event) {
    if (event.key === 'w'){
        document.getElementById('clap').style.backgroundColor = '#FFD1D1';
    }
  });
//floor tom button
const floorTomButton = document.getElementById("floor-tom");
const floorTomSound = new Audio('drum-sounds/floor-tom.wav');

floorTomButton.addEventListener("click", floorTomButtonPress);

function floorTomButtonPress() {
    floorTomSound.play();
    floorTomSound.currentTime = 0;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'e'){
        floorTomButtonPress();
        document.getElementById('floor-tom').style.backgroundColor = '#C689C6';
    }
  });

  document.addEventListener('keyup', function(event) {
    if (event.key === 'e'){
        document.getElementById('floor-tom').style.backgroundColor = '#FFD1D1';
    }
  });

//mid tom button
const midTomButton = document.getElementById("mid-tom");
const midTomSound = new Audio('drum-sounds/mid-tom.wav');

midTomButton.addEventListener("click", midTomButtonPress);

function midTomButtonPress() {
    midTomSound.play();
    midTomSound.currentTime = 0;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'a'){
        midTomButtonPress();
        document.getElementById('mid-tom').style.backgroundColor = '#C689C6';
    }
  });

  document.addEventListener('keyup', function(event) {
    if (event.key === 'a'){
        document.getElementById('mid-tom').style.backgroundColor = '#FFD1D1';
    }
  });

//high tom button
const highTomButton = document.getElementById("high-tom");
const highTomSound = new Audio('drum-sounds/high-tom.wav');

highTomButton.addEventListener("click", highTomButtonPress);

function highTomButtonPress() {
    highTomSound.play();
    highTomSound.currentTime = 0;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 's'){
        highTomButtonPress();
        document.getElementById('high-tom').style.backgroundColor = '#C689C6';
    }
  });

  document.addEventListener('keyup', function(event) {
    if (event.key === 's'){
        document.getElementById('high-tom').style.backgroundColor = '#FFD1D1';
    }
  });


//Kick button
const kickButton = document.getElementById("kick");
const kickSound = new Audio('drum-sounds/kick (4).wav');

kickButton.addEventListener("click", kickButtonPress);

function kickButtonPress() {
    kickSound.play();
    kickSound.currentTime = 0;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'd'){
        kickButtonPress();
        document.getElementById('kick').style.backgroundColor = '#C689C6';
    }
  });

  document.addEventListener('keyup', function(event) {
    if (event.key === 'd'){
        document.getElementById('kick').style.backgroundColor = '#FFD1D1';
    }
  });

//snare button
const snareButton = document.getElementById("snare");
const snareSound = new Audio('drum-sounds/snare (45).wav');

snareButton.addEventListener("click", snareButtonPress);

function snareButtonPress() {
    snareSound.play();
    snareSound.currentTime = 0;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'z'){
        snareButtonPress();
        document.getElementById('snare').style.backgroundColor = '#C689C6';
    }
  });

  document.addEventListener('keyup', function(event) {
    if (event.key === 'z'){
        document.getElementById('snare').style.backgroundColor = '#FFD1D1';
    }
  });

//high hat open
const hiHatOButton = document.getElementById("open-hi");
const hiHatOSound = new Audio('drum-sounds/hi hat (36).wav');

hiHatOButton.addEventListener("click", hiHatOButtonPress);

function hiHatOButtonPress() {
    hiHatOSound.play();
    hiHatOSound.currentTime = 0;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'x'){
        hiHatOButtonPress();
        document.getElementById('open-hi').style.backgroundColor = '#C689C6';
    }
  });

  document.addEventListener('keyup', function(event) {
    if (event.key === 'x'){
        document.getElementById('open-hi').style.backgroundColor = '#FFD1D1';
    }
  });


//high hat closed
const hiHatCButton = document.getElementById("closed-hi");
const hiHatCSound = new Audio('drum-sounds/hi hat (35).wav');

hiHatCButton.addEventListener("click", hiHatCButtonPress);

function hiHatCButtonPress() {
    hiHatCSound.play();
    hiHatCSound.currentTime = 0;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'c'){
        hiHatCButtonPress();
        document.getElementById('closed-hi').style.backgroundColor = '#C689C6';
    }
  });

  document.addEventListener('keyup', function(event) {
    if (event.key === 'c'){
        document.getElementById('closed-hi').style.backgroundColor = '#FFD1D1';
    }
  });




