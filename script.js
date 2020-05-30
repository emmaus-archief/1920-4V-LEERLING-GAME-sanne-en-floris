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


var xSpeler1 = 100; // x-positie van speler1
var ySpeler1 = 670; // y-positie van speler1

var xSpeler2 = 1180; // x-positie van speler2
var ySpeler2 = 670; // y-positie van speler2

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 0;   // x-positie van vijand
var vijandY = 0;   // y-positie van vijand

var scoreSpeler1 = "0"; // aantal behaalde punten speler 1
var scoreSpeler2 = "0"; // aantal behaalde punten speler 2

var xEten = 0;
var yEten = 0;

var etenArrayX = new Array(25);
var etenArrayY = new Array(25);

/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/*
 * Tekent het speelveld
 */
var tekenVeld = function ()
{
  fill (78, 219, 255);
  rect (20, 20, width - 2 * 20, height - 2 * 20);
  
  if(xSpeler1 > 1210)
  {
    xSpeler1 = 1210;
  }
  if(xSpeler1 < 100)
  {
    xSpeler1 = 100;
  }
  if(xSpeler2 > 1180)
  {
    xSpeler2 = 1180;
  }
  if(xSpeler2 < 70)
  {
    xSpeler2 = 70;
  }
  if(ySpeler1 < 50)
  {
    ySpeler1 = 50;
  }
  if(ySpeler1 > 670)
  {
    ySpeler1 = 670;
  }
  if(ySpeler2 < 50)
  {
    ySpeler2 = 50;
  }
  if(ySpeler2 > 670)
  {
    ySpeler2 = 670;
  }
}


/*
 * Geeft locaties van het eten
 */
var locatiesEten = function()
{
    
    for(var eten = 0; eten < 25; eten++)
    {
        xEten = random(70,1180);
        yEten = random(50,620);
        etenArrayX[eten] = xEten;
        etenArrayY[eten] = yEten;
    }

}

/*
 * Tekent het eten
 */
var tekenEten = function()
{
    for(var eten = 0; eten < 25; eten++)
    {
        xEten = etenArrayX[eten];
        yEten = etenArrayY[eten];
        fill("brown");
        ellipse(xEten,yEten,20,20);
    }
}


/*
 * Tekent de speler1
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */

 var tekenSpeler1 = function()
 {
    fill("blue");
    triangle(xSpeler1-60, ySpeler1+25, xSpeler1-60, ySpeler1-25, xSpeler1-20, ySpeler1); // Staart
    fill("blue");
    ellipse(xSpeler1, ySpeler1, 50, 50); // Lichaam
    fill("white");
    ellipse(xSpeler1+10, ySpeler1-10, 15, 15); // Oog
    fill("black");
    ellipse(xSpeler1+10, ySpeler1-10, 7, 7); // Pupil
 }


/*
 * Tekent de speler2
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
*/

var tekenSpeler2 = function()
{ 
    fill("red");
    triangle(xSpeler2+60, ySpeler2+25, xSpeler2+60, ySpeler2-25, xSpeler2+20, ySpeler2); // Staart
    fill("red");
    ellipse(xSpeler2, ySpeler2, 50, 50); // Lichaam
    fill("white");
    ellipse(xSpeler2-10, ySpeler2-10, 15, 15); //Oog
    fill("black");
    ellipse(xSpeler2-10, ySpeler2-10, 7, 7); // Pupil
}

/*
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var scores = function()
{
    textSize(40);
    fill("blue");
    text(scoreSpeler1, 50, 40, 40, 40);
    fill("red");
    text(scoreSpeler2, 1200, 40, 40, 40);
    
}


/*
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function()
{

}


/*
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 * 
 */
var beweegSpeler1 = function()
{
     
    if(keyIsDown(68))
    {
        xSpeler1=xSpeler1+2; // Toets D
    }
    if(keyIsDown(65))
    {
        xSpeler1=xSpeler1-2; // Toets A
    }
    if(keyIsDown(83))
    {
        ySpeler1=ySpeler1+2; // Toets W
    }
    if(keyIsDown(87))
    {
        ySpeler1=ySpeler1-2; // Toets S
    }

}

var beweegSpeler2 = function(){
    
    if(keyIsDown(76))
    {
        xSpeler2=xSpeler2+2; // Toets L
    }
    if(keyIsDown(74))
    {
        xSpeler2=xSpeler2-2; // Toets J
    }
    if(keyIsDown(75))
    {
        ySpeler2=ySpeler2+2; // Toets I
    }
    if(keyIsDown(73))
    {
        ySpeler2=ySpeler2-2; // Toets K
    }

}


/*
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function()
{

  return false;
}


/*
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function()
{
    
  return false;
}


/*
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function()
{
    
  return false;
}


/*
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup()
{
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');

  // geef locaties van het eten
  locatiesEten();
}


/*
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw()
{
    switch (spelStatus) {
    case SPELEN:
      //beweegVijand();
      //beweegKogel();
      beweegSpeler1();
      beweegSpeler2();
      
      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenEten();
      //tekenKogel(kogelX, kogelY);
      tekenSpeler1();
      tekenSpeler2();
      scores();

      
      if (checkGameOver()) 
      {
        spelStatus = GAMEOVER;
      }
      break;
  }
}
