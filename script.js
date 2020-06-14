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
    fill (33, 245, 117);
    rect (20, 20, width - 2 * 20, height - 2 * 20);
    
    // knop aan scherm toevoegen "Start Spel" om het spel te starten als je er op klikt
    // dus als met de muis op de knop geklikt wordt moet de spelStatus = SPELEN worden gezet
    if (mouseIsPressed && mouseX < 840 && mouseX > 440 && mouseY < 560 && mouseY > 360) 
    { 
        fill(142, 41, 21); // kleur verandert
        spelStatus = SPELEN; // spel begint
        resetAlleVariabelen();
        startSpel();
    }
    fill(225, 60, 27);
    rect(440, 360, 400, 200);  // de knop
    // knop met tekst
    fill(0, 0, 0);
    textSize(75);
    text("Start Spel",470, 410, 770, 510);

    // kleur toetsen
    fill(163, 164, 166);
    // toetsen Speler 1
    rect(200, 150, 100, 100);
    rect(100, 250, 100, 100);
    rect(200, 250, 100, 100);
    rect(300, 250, 100, 100);
    // toetsen Speler 2
    rect(980, 150, 100, 100);
    rect(880, 250, 100, 100);
    rect(980, 250, 100, 100);
    rect(1080, 250, 100, 100);
    
    // letters op toetsen
    fill(0, 0, 0);
    textSize(50);
    // letters Speler 1
    text("W", 225, 175, 275, 225);
    text("A", 130, 275, 175, 325);
    text("S", 232, 275, 275, 325);
    text("D", 330, 275, 375, 325);
    // letters Speler 2
    text("I", 1020, 175, 1055, 225);
    text("J", 915, 275, 955, 325);
    text("K", 1013, 275, 1055, 325);
    text("L", 1115, 275, 1155, 325);

    // tekst boven toetsen
    text("Toetsen Speler 1", 75, 75, 400, 125);
    text("Toetsen Speler 2", 850, 75, 950, 125);
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
        xEten = random(100, 1180);
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
    fill (33, 245, 117);
    rect (20, 20, width - 2 * 20, height - 2 * 20);
    
    // knop "Speel Opnieuw" aan scherm toevoegen om het spel opnieuw te starten als je er op klikt
    // dus als met de muis op de knop geklikt wordt moet de spelStatus = SPELEN worden gezet
    if (mouseIsPressed && mouseX < 440 && mouseX > 40 && mouseY < 560 && mouseY > 360) 
    { 
        fill(142, 41, 21); // kleur verandert
        spelStatus = SPELEN; // spel begint
        resetAlleVariabelen();
        startSpel();
    }
    fill(225, 60, 27);
    rect(40, 360, 400, 200);  // de knop
    // knop met tekst
    fill(0, 0, 0);
    textSize(50);
    text("Speel Opnieuw", 75, 430, 395, 510);

    // knop "Toon Uitleg" aan scherm toevoegen om het uitleg scherm te tonen als je er op klikt
    // dus als met de muis op de knop geklikt wordt moet de spelStatus = UITLEG worden gezet
    if (mouseIsPressed && mouseX < 1240 && mouseX > 840 && mouseY < 660 && mouseY > 360) 
    { 
        fill(142, 41, 21); // kleur verandert
        spelStatus = UITLEG; // toont uitleg scherm
    }
    fill(225, 60, 27);
    rect(840, 360, 400, 200);  // de knop
    // knop met tekst
    fill(0, 0, 0);
    textSize(50);
    text("Toon Uitleg", 900, 430, 395, 510);

    // toon op het scherm welke speler gewonnen heeft
    textSize(75);
    if (scoreSpeler1 > scoreSpeler2)
    {
        // speler1 wint!
        text("Speler 1 heeft gewonnen!", 200, 75, 1200, 125);
    }
    else
    {
        // speler2 wint!
        text("Speler 2 heeft gewonnen!", 200, 75, 1200, 125);
    }
    // toon de uitslag op het scherm
    
}

/*
 * Zet alle spel variabelen weer gelijk aan hun begin waarde / positie
 */
var resetAlleVariabelen = function()
{
    xSpeler1 = 100; // x-positie van speler1
    ySpeler1 = 670; // y-positie van speler1

    xSpeler2 = 1180; // x-positie van speler2
    ySpeler2 = 670; // y-positie van speler2

    scoreSpeler1 = 0; // aantal behaalde punten speler 1
    scoreSpeler2 = 0; // aantal behaalde punten speler 2

    xEten = 0; // x-positie van eten
    yEten = 0; // y-positie van eten
    etenGevonden = false;
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
            if (checkGameOver()) 
            {
                spelStatus = GAMEOVER;
            }
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
            break;
        case GAMEOVER:
            tekenGameOverScherm();
            break;    
    }
}
