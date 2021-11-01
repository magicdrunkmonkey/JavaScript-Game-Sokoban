// JavaScript source code

// Store the players X & Y position in global variables.
var player_X_position;
var player_Y_position;

/* Attempt 1 Grid fail : Creating JavaScript constructor
export default class MapGrid
{
    constructor(root)
    {
        this.root = root;
        this.root.innerHTML = `
                            
        `;
    }
}*/



// 5. Create a function to generate the elements that will represent the tiles from the map array.
//      a) Give them an id and CSS.
//      b) Append them into your map element.



//var mapElements = [];
// Från demo med Simon
function drawBoard(tileMap) {       //Skriver ut innehållet i arrayerna som innehåller kartbitarna 
    for (let x = 0; x < tileMap.width; x++) {
        //document.getElementById("map").innerHTML = x; //Funkar inte
        let mapElements = [];
        
        for (let y = 0; y < tileMap.height; y++) {
            console.log("x: " + x + " y: " + y);      //Visar kartpositioner i webläsarens console
            //document.getElementById("map").innerHTML = y;  //Funkar inte
            //mapElements.push(tileMap[x]);    //Funkar inte
            //document.getElementById("map").innerHTML = tileMap.mapGrid[x][y]; //Funkar inte

        }
        //document.getElementById("map").innerHTML = mapElements;
    }
    //document.getElementById("map").innerHTML = mapElements;
}

drawBoard(tileMap01);     //Kallar på funktionen drawBoard med inparametern tileMap01 som fanns i SokobanBase.js
//document.getElementById("map").innerHTML = tileMap01.mapGrid[4][4]; //Visar W om står ensamt
document.getElementById("map").innerHTML = JSON.stringify(tileMap01.mapGrid);
/*  Attempt 1 Board Funkar inte
function drawBoardTest1(tileMapTest1)
{
    for (let x = 0; x < tileMap.width; x++) 
    {
        document.getElementById("map").innerHTML = tileMapTest1[i]
    }
}*/

function moveUp() {
     
}

function moveDown() {
     
}

function moveleft() {
     
}

function moveright() {
     
}