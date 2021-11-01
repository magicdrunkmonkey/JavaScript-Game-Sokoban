// JavaScript source code

// Store the players X & Y position in global variables.
var player;

// 5. Create a function to generate the elements that will represent the tiles from the map array.
//      a) Give them an id and CSS.
//      b) Append them into your map element.

function drawBoard(tileMap) {       //Skriver ut innehållet i arrayerna som innehåller kartbitarna 
    for (let x = 0; x < tileMap.width; x++) {
        for (let y = 0; y < tileMap.height; y++) {
            console.log("x: " + x + " y: " + y);      //Visar bitarna i webläsar konsollen
        }
    }
}

drawBoard(tileMap01);     //Kallar på funktionen drawBoard med inparametern tileMap01 som fanns i SokobanBase.js



function moveUp() {
     
}

function moveDown() {
     
}

function moveleft() {
     
}

function moveright() {
     
}