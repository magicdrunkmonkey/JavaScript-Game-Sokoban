// JavaScript source code

// ASSIGNMENT
// Store the players X & Y position in global variables.

//Global variables
//var positionFormat = "\"x\"+x+\"y\"+y";   //Funkar inte
var playerCurrentPosition = "x.11.y.11";  //Spelarens startpunkt x.11.y.11
var playerNextposition;

//var player_X_position;  //X och Y var för sig ersätts som en koordinat
//var player_Y_position;

//var mapContainer = [];     //Verkar inte behövas längre

//Functions for functions
function addNode()  //Experiement att skapa element som har id=" "
{
    for(let i=0; i < 5; i++)
    {
        let newDiv = document.createElement("div");
        
        document.getElementById("map").appendChild(newDiv);      //Lägger in <div></div> efter </script> längst ned i <body>
        
        //document.getElementById("body").insertAdjacentHTML(newDiv);  
    }
    //document.getElementById("body").appendChild(newDiv);
}


/* Överblivet experiment
function createANodeWithId()
{
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id","game-board");      //Skapar ett id="game-board"
    newDiv.appendChild(addNode());
    document.getElementById("body").append(newDiv);      
}*/

//createANodeWithId();
//addNode();   // Flyttade till Game.js
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

        //Nedan var ingen lösning 
        //var board = new Array(tileMap.width)        //Skapa raden på spelbrädan
        //for (let i=0; i < tileMap.height; i++){     //Loopa igenom raderna /*
        //    board[x] = tileMap.mapGrid[0][x][i];
        //}
        //console.log(board); 

        //MISSLYCKADE FÖRSÖK
        //document.getElementById("map").innerHTML = x; //Funkar inte
        //let mapElements = []; //Funkar inte
        
        for (let y = 0; y < tileMap.height; y++) {
            let newDiv = document.createElement("div");
            newDiv.setAttribute("id", "x."+x+".y."+y);       // Skapar ett unikt ID till div ex: <div id="x2y3"></div>

            //document.getElementById("x"+x+"y"+y).innerHTML = tileMap01.mapGrid[4][4].toString(); //Funkar inte

            document.getElementById("map").appendChild(newDiv);
            //document.getElementById("id","x"+x+"y"+y).innerHTML = tileMap01.mapGrid[4][4]; //Funkar inte

            //console.log("id= x"+x+"y"+y);      //Skapar id med koordinater
            //mapContainer.append("<div id= x"+x+"y"+y+">"+tileMap.mapGrid[x][y]+"</div>"); //Funkar inte

            //MISSLYCKADE FÖRSÖK
            //document.getElementById("map").innerHTML = y;  //Funkar inte
            //mapElements.push(tileMap[x]);    //Funkar inte
            //document.getElementById("map").innerHTML = tileMap.mapGrid[x][y]; //Funkar inte
        }
        //document.getElementById("id","x"+x+"y"+y).innerHTML = tileMap01.mapGrid[4][4];
        //document.getElementById("map").innerHTML = mapElements;
    }
    //document.getElementById("map").innerHTML = mapElements;
}

function addMapPieces(tileMap) {       //Skriver ut innehållet i arrayerna som innehåller kartbitarna 
    for (let x = 0; x < tileMap.width; x++) {    
        
        for (let y = 0; y < tileMap.height; y++) {
            /*let newDiv = document.createElement("div");
            newDiv.setAttribute("id","x"+x+"y"+y);      */ // Skapar ett unikt ID till div ex: <div id="x2y3"></div>

            //document.getElementById("x"+x+"y"+y).innerHTML = tileMap01.mapGrid[4][4].toString(); //Funkar inte
            

            document.getElementById("x."+x+".y."+y).innerHTML = tileMap.mapGrid[y][x];

            //Ge klasser till alla fasta object
            if (tileMap.mapGrid[y][x] == "W") //Ge unik class till alla väggarna
            {                
                document.getElementById("x."+x+".y."+y).classList.add(Tiles.Wall);
            }
            else if (tileMap.mapGrid[y][x] == " ") //Ge unik class till alla tomrummen
            {                
                document.getElementById("x."+x+".y."+y).classList.add(Tiles.Space);
            }
            else if (tileMap.mapGrid[y][x] == "G") //Ge unik class till alla målområden
            {                
                document.getElementById("x."+x+".y."+y).classList.add(Tiles.Goal);
            }

            //Ge klasser till alla rörliga object
            if (tileMap.mapGrid[y][x] == "P") //Ge unik class till spelare
            {                
                document.getElementById("x."+x+".y."+y).classList.add(Entities.Character);
                playerPosition = ".x."+x+".y."+y;
                //console.log(playerPosition);         //Funkar ok   //Testar om sparats
            }
            else if (tileMap.mapGrid[y][x] == "B") //Ge unik class till alla lådor (Boxes) och "box i mål class"
            {                
                document.getElementById("x."+x+".y."+y).classList.add(Entities.Block, Entities.BlockDone);
            }
            /*else if (tileMap.mapGrid[y][x] == "B") //Ge unik class till alla lådor om kommer till målområden
            {                
                document.getElementById("x"+x+"y"+y).classList.add(Entities.BlockDone);
            }*/

            //console.log(tileMap);
            
            
        }
        
    }
    
}


// FAILED JUNK CODES
//document.getElementById("map").innerHTML = board; //Funkar inte

//drawBoard(tileMap01);     //Kallar på funktionen drawBoard med inparametern tileMap01 som fanns i SokobanBase.js
                            // Flyttad till Game.js

//document.getElementById("map").innerHTML = tileMap01.mapGrid[4][4]; //Visar W om står ensamt

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

/*
    • You must use event listeners to handle key presses to make the player move.
        1. The key press event listener should be able to handle the up, down, left and right 
        arrow keys
        2. The normal effect of those keys should be suppressed, to make sure that the 
        page does not scroll when you press them.

*/

function movement() {
    const log = document.getElementById('entity-player');

    document.addEventListener('keyup', movementChange);
    
    function movementChange(e) {
        //log.textContent += ` ${e.code}`;
        //console.log(e);
        e = e || window.event;
        //let layerText = document. .getElementById("newtext");

        if (e.keyCode == '38') {
            // up arrow
            console.log("up");
        }
        else if (e.keyCode == '40') {
            // down arrow
            console.log("down")
        }
        else if (e.keyCode == '37') {
            // left arrow
            console.log("left");

            //Current position
            //playerCurrentPosition = document.get
            //playerCurrentPosition.indexOf("x");
            

            //Next position
            playerNextposition = document.getElementById(playerCurrentPosition)
            let positionArr = playerCurrentPosition.split(".");
            console.log("x: "+ positionArr[1]);
            console.log("y: "+ positionArr[2]);

            //Städa föregående position
            //document.getElementById(playerCurrentPosition).innerHTML = str.replace("P", " ");
            

            
            
            //Testing values
            console.log("Current position: "+playerCurrentPosition);         //Testa vad det innehåller
            console.log("Next position: "+playerNextposition);

            //Delar jag tror jag kommer behöva justera in
            //document.getElementById("x"+x+"y"+y).innerHTML = tileMap.mapGrid[y][x];
            //document.getElementById("x"+x+"y"+y).classList.add(Tiles.Space);
            //document.getElementById("x"+x+"y"+y).classList.add(Tiles.Wall);
            //document.getElementById("x"+x+"y"+y).classList.add(Entities.Block, Entities.BlockDone);
        }
        else if (e.keyCode == '39') {
            // right arrow
            console.log("right");
        }
    }    
}

// REMOVED CODE ARCHIVED
/*
function moveright() {
     
}

function moveUp() {
     
}

function moveDown() {
     
}
*/