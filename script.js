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
var spelStatus = UITLEG;

var xSpeler1 = 100; // x-positie van speler1
var ySpeler1 = 670; // y-positie van speler1

var xSpeler2 = 1180; // x-positie van speler2
var ySpeler2 = 670; // y-positie van speler2

var scoreSpeler1 = 0; // aantal behaalde punten speler 1
var scoreSpeler2 = 0; // aantal behaalde punten speler 2

var xEten = 0; // x-positie van eten
var yEten = 0; // y-positie van eten
const aantalEten = 25; // aantal stukjes eten dat getekend wordt
const isOpgegeten = 0; // waarde voor xEten en yEten als het is opgegeten
var etenGevonden = false;
var etenArrayX = new Array(aantalEten);
var etenArrayY = new Array(aantalEten);

/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */

/*
 * Tekent het uitleg scherm
 */
var tekenUitlegScherm = function()
{
    // nog te maken: dit is een testje
    fill (0, 0, 255);
    rect (20, 20, width - 2 * 20, height - 2 * 20);
    // knop aan scherm toevoegen "Start Spel" om het spel te starten als je er op klikt
    // dus in onClick event moet de spelStatus = SPELEN worden gezet
    // volgende regel moet dus vervangen worden door bovenstaande
    spelStatus = SPELEN;
}

/*
 * Tekent het speelveld
 */
var tekenSpeelVeld = function ()
{
    fill (78, 219, 255);
    rect (20, 20, width - 2 * 20, height - 2 * 20);
}

/*
 * Zorgt dat speler1 in het speelveld blijft
 */
var blijftSpeler1InHetSpeelVeld = function()
{
    if(xSpeler1 > 1220)
    {
        xSpeler1 = 1220;
    }
    if(xSpeler1 < 100)
    {
        xSpeler1 = 100;
    }
    if(ySpeler1 < 50)
    {
        ySpeler1 = 50;
    }
    if(ySpeler1 > 670)
    {
        ySpeler1 = 670;
    }
}

/*
 * Zorgt dat speler2 in het speelveld blijft
 */
var blijftSpeler2InHetSpeelVeld = function()
{
    if(xSpeler2 > 1180)
    {
        xSpeler2 = 1180;
    }
    if(xSpeler2 < 60)
    {
        xSpeler2 = 60;
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
 * Definieert de locaties van het eten mbv de random functie
 */
var locatiesEten = function()
{
    for(var eten = 0; eten < aantalEten; eten++)
    {
        xEten = random(70, 1180);
        yEten = random(50, 620);
        etenArrayX[eten] = xEten;
        etenArrayY[eten] = yEten;
    }
}

/*
 * Tekent het eten op het scherm
 */
var tekenEten = function()
{
    for(var eten = 0; eten < aantalEten; eten++)
    {
        xEten = etenArrayX[eten];
        if (xEten !== isOpgegeten)
        {
            yEten = etenArrayY[eten];
            fill("brown");
            ellipse(xEten, yEten, 20, 20);
        }
    }
}

/*
 * Tekent de speler1
 */
 var tekenSpeler1 = function()
 {
    fill("blue");
    triangle(xSpeler1 - 60, ySpeler1 + 25, xSpeler1 - 60, ySpeler1 - 25, xSpeler1 - 20, ySpeler1); // Staart
    fill("blue");
    ellipse(xSpeler1, ySpeler1, 50, 50); // Lichaam
    fill("white");
    ellipse(xSpeler1 + 10, ySpeler1 - 10, 15, 15); // Oog
    fill("black");
    ellipse(xSpeler1 + 10, ySpeler1 - 10, 7, 7); // Pupil
 }

/*
 * Tekent de speler2
*/
var tekenSpeler2 = function()
{ 
    fill("red");
    triangle(xSpeler2 + 60, ySpeler2 + 25, xSpeler2 + 60, ySpeler2 - 25, xSpeler2 + 20, ySpeler2); // Staart
    fill("red");
    ellipse(xSpeler2, ySpeler2, 50, 50); // Lichaam
    fill("white");
    ellipse(xSpeler2 - 10, ySpeler2 - 10, 15, 15); //Oog
    fill("black");
    ellipse(xSpeler2 - 10, ySpeler2 - 10, 7, 7); // Pupil
}

/*
 * Teken de scores op het scherm
 */
var tekenScoresOpScherm = function()
{
    textSize(40);
    fill("blue");
    text(scoreSpeler1.toString(), 50, 40, 40, 40);
    fill("red");
    text(scoreSpeler2.toString(), 1200, 40, 40, 40);
}

/*
 * Kijkt of de beweeg toetsen van speler1 zijn ingedrukt (D, A, W en S)
 * en update de globale variabele xSpeler1 en ySpeler1
 */
var beweegSpeler1 = function()
{
    if(keyIsDown(68))
    {
        xSpeler1 = xSpeler1 + 2; // Toets D: beweeg stukje naar links
    }
    if(keyIsDown(65))
    {
        xSpeler1 = xSpeler1 - 2; // Toets A: beweeg stukje naar rechts
    }
    if(keyIsDown(83))
    {
        ySpeler1 = ySpeler1 + 2; // Toets W: beweeg stukje omhoog
    }
    if(keyIsDown(87))
    {
        ySpeler1 = ySpeler1 - 2; // Toets S: beweeg stukje omlaag
    }
}

/*
 * Kijkt of de beweeg toetsen van speler2 zijn ingedrukt (L, J, I en K)
 * en update de globale variabele xSpeler2 en ySpeler2
 */
var beweegSpeler2 = function()
{
    if(keyIsDown(76))
    {
        xSpeler2 = xSpeler2 + 2; // Toets L: beweeg stukje naar links
    }
    if(keyIsDown(74))
    {
        xSpeler2 = xSpeler2 - 2; // Toets J: beweeg stukje naar rechts
    }
    if(keyIsDown(75))
    {
        ySpeler2 = ySpeler2 + 2; // Toets I: beweeg stukje omhoog
    }
    if(keyIsDown(73))
    {
        ySpeler2 = ySpeler2 - 2; // Toets K: beweeg stukje omlaag
    } 
}

/*
 * Zoekt uit of speler1 over voer gaat en het dus op eet
 * @returns {boolean} true als hij met zijn kop over voer gaat
 */
var checkSpeler1EetVoer = function()
{
    etenGevonden = false;
    for(var eten = 0; eten < aantalEten; eten++)
    {
        xEten = etenArrayX[eten];
        if ((xSpeler1 - 25 <= xEten) && (xEten <= xSpeler1 + 25))
        {
            yEten = etenArrayY[eten];
            if ((ySpeler1 - 25 <= yEten) && (yEten <= ySpeler1 + 25))
            {
                etenArrayX[eten] = isOpgegeten;
                etenArrayY[eten] = isOpgegeten;
                etenGevonden = true;
            }
        }
    }
    if (etenGevonden === true)
    {
        return true;
    }
    else
    {
        return false;
    }
}

/*
 * Zoekt uit of speler2 over voer gaat en het dus op eet
 * @returns {boolean} true als hij met zijn kop over voer gaat
 */
var checkSpeler2EetVoer = function()
{
    etenGevonden = false;
    for(var eten = 0; eten < aantalEten; eten++)
    {
        xEten = etenArrayX[eten];
        if ((xSpeler2 - 25 <= xEten) && (xEten <= xSpeler2 + 25))
        {
            yEten = etenArrayY[eten];
            if ((ySpeler2 - 25 <= yEten) && (yEten <= ySpeler2 + 25))
            {
                etenArrayX[eten] = isOpgegeten;
                etenArrayY[eten] = isOpgegeten;
                etenGevonden = true;
            }
        }
    }
    if (etenGevonden === true)
    {
        return true;
    }
    else
    {
        return false;
    }
}

/*
 * Bepaalt of het spel is afgelopen:
 * dat is zo als al het voer is opgegeten, dus als alle waarden in
 * etenArrayX op "isOpgegeten" (nul) staan (dat is dan automatisch ook zo voor etenArrayY)
 * @returns {boolean} true als dat zo is en het spel dus is afgelopen
 */
var checkGameOver = function()
{
    var eten = 0;
    etenGevonden = false;
    while((eten < aantalEten) && (etenGevonden === false))
    {
        xEten = etenArrayX[eten];
        if (xEten !== isOpgegeten)
        {
            etenGevonden = true;
        }
        eten = eten + 1;
    }
    if (etenGevonden === true)
    {
        return false;
    }
    else 
    {
        return true;
    }
}

/*
 * Tekent het gameover scherm
 */
var tekenGameOverScherm = function()
{
    // nog te maken
    if (scoreSpeler1 > scoreSpeler2)
    {
        // speler1 wint!
    }
    else
    {
        // speler2 wint!
    }
    // vraag om rematch (spel opnieuw starten mbv startSpel functie) of stoppen (dan terug naar uitleg scherm)
}


/*
 * Start het spel door het speelveld te tekenen en de voer locaties te definieren
 */
var startSpel = function()
{
    // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
    createCanvas(1280, 720);
    // Kleur de achtergrond blauw, zodat je het kunt zien
    background('blue');
    // bepaal de locaties van het eten
    locatiesEten();
}

/*
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup()
{
    startSpel();
}

/*
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw()
{
    switch (spelStatus)
    {
        case UITLEG:
            tekenUitlegScherm();
            break;
        case SPELEN:
            tekenSpeelVeld();
            tekenEten();
            tekenSpeler1();
            tekenSpeler2();
            tekenScoresOpScherm();
            beweegSpeler1();
            beweegSpeler2();
            blijftSpeler1InHetSpeelVeld();
            blijftSpeler2InHetSpeelVeld();
            if (checkSpeler1EetVoer()) 
            {
                // punt bij de score van speler1
                scoreSpeler1 = scoreSpeler1 + 1;
            }
            if (checkSpeler2EetVoer()) 
            {
                // punt bij de score van speler2
                scoreSpeler2 = scoreSpeler2 + 1;
            }
            if (checkGameOver()) 
            {
                spelStatus = GAMEOVER;
            }
            break;
        case GAMEOVER:
            tekenGameOverScherm();
            break;    
    }
}
