/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var xSpeler1 = 50; // x-positie van speler1
var ySpeler1 = 50; // y-positie van speler1

var xSpeler2 = 1225; // x-positie van speler2
var ySpeler2 = 50; // y-positie van speler2

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 0;   // x-positie van vijand
var vijandY = 0;   // y-positie van vijand

var score = 0; // aantal behaalde punten

/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill (78, 219, 255);
  rect (20, 20, width - 2 * 20, height - 2 * 20);
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(x, y) {
    

};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {


};


/**
 * Tekent de speler1
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */

function draw() {

    tekenVeld();

    if(keyIsDown(68)){
        xSpeler1=xSpeler1+2;
    }
    if(keyIsDown(65)){
        xSpeler1=xSpeler1-2;
    }
    if(keyIsDown(83)){
        ySpeler1=ySpeler1+2;
    }
    if(keyIsDown(87)){
        ySpeler1=ySpeler1-2;   
    }
    fill("blue");
    ellipse(xSpeler1, ySpeler1, 50, 50); 

    if(keyIsDown(76)){
        xSpeler2=xSpeler2+2;
    }
    if(keyIsDown(74)){
        xSpeler2=xSpeler2-2;
    }
    if(keyIsDown(75)){
        ySpeler2=ySpeler2+2;
    }
    if(keyIsDown(73)){
        ySpeler2=ySpeler2-2;   
    }
    fill("red");
    ellipse(xSpeler2, ySpeler2, 50, 50); 
}



 /*function draw() {
  fill("white");
  ellipse(x, y, 50, 50);
}

function keyPressed(){
  if (keyCode === "a") {
    x = x - 1;
  } else if (keyCode === 'd') {
    x = x + 1;
  } else if (keyCode === 'w'){
    y = y + 1;
  } else if (keyCode  === 's'){
    y = y - 1;
  }
}*/

/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function() {
    
};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function() {

};


/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
    
  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    
  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
/*function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegKogel();
      beweegSpeler();
      
      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenVijand(vijandX, vijandY);
      tekenKogel(kogelX, kogelY);
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}*/
