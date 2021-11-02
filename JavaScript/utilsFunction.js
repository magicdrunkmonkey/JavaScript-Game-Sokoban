// JavaScript source code

// ASSIGNMENT
// Store the players X & Y position in global variables.

//Global variables
var player_X_position;
var player_Y_position;
var mapContainer = [];

//Functions for functions
function addNode()  //Experiement att skapa element som har id=" "
{
    for(let i=0; i < 5; i++)
    {
        let newDiv = document.createElement("div");
        document.getElementById("body").append(newDiv);      //Lägger in <div></div> efter </script> längst ned i <body>   
    }
    //document.getElementById("body").appendChild(newDiv);
}
addNode();

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

// ASSSIGNMENT
// 5. Create a function to generate the elements that will represent the tiles from the map array.
//      a) Give them an id and CSS.
//      b) Append them into your map element.

// ASIGNMENT
// Use the multidimensional map array index´s as X & Y coordinates and assign 
// them as id´s on the html elements in the map (Ex. id=”x3y7”).

function drawBoard(tileMap) {       //Skriver ut innehållet i arrayerna som innehåller kartbitarna 
    for (let x = 0; x < tileMap.width; x++) {

        var board = new Array(tileMap.width)        //Skapa raden på spelbrädan
        for (let i=0; i < tileMap.height; i++){     //Loopa igenom raderna 
            board[x] = tileMap.mapGrid[0][x][i];
        }
        console.log(board);

        //MISSLYCKADE FÖRSÖK
        //document.getElementById("map").innerHTML = x; //Funkar inte
        //let mapElements = []; //Funkar inte
        
        for (let y = 0; y < tileMap.height; y++) {
            console.log("id= x"+x+"y"+y);      //Skapar id med koordinater
            //mapContainer.append("<div id= x"+x+"y"+y+">"+tileMap.mapGrid[x][y]+"</div>"); //Funkar inte

            //MISSLYCKADE FÖRSÖK
            //document.getElementById("map").innerHTML = y;  //Funkar inte
            //mapElements.push(tileMap[x]);    //Funkar inte
            //document.getElementById("map").innerHTML = tileMap.mapGrid[x][y]; //Funkar inte
        }
        //document.getElementById("map").innerHTML = mapElements;
    }
    //document.getElementById("map").innerHTML = mapElements;
}
//document.getElementById("map").innerHTML = board; //Funkar inte

drawBoard(tileMap01);     //Kallar på funktionen drawBoard med inparametern tileMap01 som fanns i SokobanBase.js

document.getElementById("map").innerHTML = tileMap01.mapGrid[4][4]; //Visar W om står ensamt

//document.getElementById("map").innerHTML = JSON.stringify(tileMap01.mapGrid);  //Visar kartbitarna på fult sätt

//document.getElementById("map").innerHTML = JSON.stringify(drawBoard(tileMap01)); //Funkar inte
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