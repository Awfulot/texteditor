//test

function makeBold(){
    document.getElementById("userText").style.fontWeight="bold";
}

function makeItalic(){
    document.getElementById("userText").style.fontStyle="italic";
}

function leftAlign(){
    document.getElementById("userText").style.textAlign="left";
}

function rightAlign(){
    document.getElementById("userText").style.textAlign="right";
}


function centerAlign(){
    document.getElementById("userText").style.textAlign="center";
    
}


function upperCase(){
    document.getElementById("userText").style.textTransform = "uppercase";
}

function lowerCase(){
    document.getElementById("userText").style.textTransform = "lowercase";
}
function capitalize(){
    document.getElementById("userText").style.textTransform = "capitalize";
}
function clearText(){
    document.getElementById("userText").style.textDecoration.none;
}