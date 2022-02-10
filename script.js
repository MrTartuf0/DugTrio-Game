var randX;
var randX2;
var randY;
var randY2;
var talpa = document.getElementById("dugtrio");
var talpa2 = document.getElementById("dugtrio2");

setInterval(changePosition, 400);
setInterval(secondaTalpa, 2000);

function changePosition(){
    randX = Math.floor(Math.random() * window.innerWidth);
    randY = Math.floor(Math.random() * window.innerHeight);

    console.log(`Larghezza casuale : ${randX}`);
    console.log(`Altezza casuale : ${randY}`);

    talpa.style.left = randX + "px";
    talpa.style.top = randY + "px";
}

function changePosition2(){
    randX2 = Math.floor(Math.random() * window.innerWidth);
    randY2 = Math.floor(Math.random() * window.innerHeight);

    console.log(`Larghezza casuale : ${randX}`);
    console.log(`Altezza casuale : ${randY}`);

    talpa2.style.left = randX2 + "px";
    talpa2.style.top = randY2 + "px";
}

function secondaTalpa(){
    talpa2.style.display="block";
    changePosition2();
    talpa2.style.display="none";
}

function hitted(){
    document.getElementById("titolo").innerText="OH NO! CI HA PRESO!";
    document.getElementById("win").style.display="flex";
}
