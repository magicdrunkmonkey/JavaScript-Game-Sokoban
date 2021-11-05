// JavaScript source code

// ASSIGNMENT
// Store the players X & Y position in global variables.

//Global variables
var playerCurrentPosition = "x.11.y.11";  //Spelarens startpunkt x.11.y.11
var playerNextposition = "x.11.y.11";
var boxCurrentPosition = "0";
var boxNextPosition = "0";
var carryingBox = false;

// ASSSIGNMENT
// 5. Create a function to generate the elements that will represent the tiles from the map array.
//      a) Give them an id and CSS.
//      b) Append them into your map element.
// 
// Use the multidimensional map array index´s as X & Y coordinates and assign 
// them as id´s on the html elements in the map (Ex. id=”x3y7”).

function drawBoard(tileMap) {       //Skriver ut innehållet i arrayerna som innehåller kartbitarna 
    for (let x = 0; x < tileMap.height; x++) {          
        
        for (let y = 0; y < tileMap.width; y++) {
            let newDiv = document.createElement("div");
            newDiv.setAttribute("id", "x."+x+".y."+y);       // Skapar ett unikt ID till div ex: <div id="x2y3"></div> 
            document.getElementById("map").appendChild(newDiv);            
        }        
    }    
}

function addMapPieces(tileMap) {       //Skriver ut innehållet i arrayerna som innehåller kartbitarna 
    for (let x = 0; x < tileMap.height; x++) {    
        
        for (let y = 0; y < tileMap.width; y++) { 

            document.getElementById("x."+x+".y."+y).innerHTML = tileMap.mapGrid[x][y];

            //Ge klasser till alla fasta object
            if (tileMap.mapGrid[x][y] == "W") //Ge unik class till alla väggarna
            {                
                document.getElementById("x."+x+".y."+y).classList.add(Tiles.Wall);
            }
            else if (tileMap.mapGrid[x][y] == " ") //Ge unik class till alla tomrummen
            {                
                document.getElementById("x."+x+".y."+y).classList.add(Tiles.Space);
            }
            else if (tileMap.mapGrid[x][y] == "G") //Ge unik class till alla målområden
            {                
                document.getElementById("x."+x+".y."+y).classList.add(Tiles.Goal);
            }

            //Ge klasser till alla rörliga object
            if (tileMap.mapGrid[x][y] == "P") //Ge unik class till spelare
            {                
                document.getElementById("x."+x+".y."+y).classList.add(Entities.Character);
                playerPosition = "x."+x+".y."+y;                
            }
            else if (tileMap.mapGrid[x][y] == "B") //Ge unik class till alla lådor (Boxes) och "box i mål class"
            {                
                document.getElementById("x."+x+".y."+y).classList.add(Entities.Block, Entities.BlockDone);
            }             
        }        
    }    
}

function movement() {
    const log = document.getElementById('entity-player');
    document.addEventListener('keyup', movementChange);

    function checkIfAllBlocksInGoal()
    {
        //Goaltiles
        let Row1Left = "x.9.y.16";
        let Row1Right = "x.9.y.17";
        let Row2Left = "x.10.y.16";
        let Row2Right = "x.10.y.17";
        let Row3Left = "x.11.y.16";
        let Row3Right = "x.11.y.17";

        let parkedBox1L = document.getElementById(Row1Left).textContent;
        let parkedBox1R = document.getElementById(Row1Right).textContent;
        let parkedBox2L = document.getElementById(Row2Left).textContent;
        let parkedBox2R = document.getElementById(Row2Right).textContent;
        let parkedBox3L = document.getElementById(Row3Left).textContent;
        let parkedBox3R = document.getElementById(Row3Right).textContent;  
        
        if (parkedBox1L=="B" && parkedBox1R=="B" && parkedBox2L=="B" &&
            parkedBox2R=="B" && parkedBox3L=="B" && parkedBox3R=="B")
        {
            alert("You have won the game!");
        }
    }

    function boardMovement()
    {
        //Brädspels förflyttning
        let nextMovePlayer = document.getElementById(playerNextposition).textContent;
        let nextMoveBox = document.getElementById(boxNextPosition).textContent;
        
        if (nextMovePlayer === "B" && nextMoveBox === "B")
        {
            //Enda lösning jag kom på som lådan inte raderar andra lådor vid flytt
        }
        else if (nextMovePlayer === "B" && nextMoveBox !== "W")
        {                                
            document.getElementById(playerCurrentPosition).innerHTML = " ";            
            document.getElementById(playerNextposition).innerHTML = "P";
            playerCurrentPosition = playerNextposition;
            document.getElementById(boxNextPosition).innerHTML = "B";
            boxCurrentPosition= boxNextPosition;                 
        }            
        else if (nextMovePlayer === "B" && nextMoveBox == "W")
        {
            //Enda lösning jag kom på som begränsar att lådan knuffas genom väggen
        }
        else if (nextMovePlayer !== "W" && carryingBox == false)
        {
            document.getElementById(playerCurrentPosition).innerHTML = " ";            
            document.getElementById(playerNextposition).innerHTML = "P";
            playerCurrentPosition = playerNextposition;                
        }        
        checkIfAllBlocksInGoal();
    }
    
    function movementChange(e) {
        
        e = e || window.event;        
        
        if (e.keyCode == '38') {
            // up arrow                       

            //Next position player
            playerNextposition = document.getElementById(playerCurrentPosition)
            let positionArr = playerCurrentPosition.split(".");     //Har det formatet x.11.y.11 gör arrayen [x,11,y,11] 
            --positionArr[1];                                       //Minska X med 1 , ju högre upp desto lägre siffra
            playerNextposition = ("x."+positionArr[1]+".y."+positionArr[3]);                        

            //Next position box med offset
            boxNextPosition = document.getElementById(playerCurrentPosition)
            positionArr = playerCurrentPosition.split(".");            
            --positionArr[1];                                       //Minska X med 1 , ju högre upp desto lägre siffra
            --positionArr[1];           
            boxNextPosition = ("x."+positionArr[1]+".y."+positionArr[3]); 

            boardMovement();           
        }
        else if (e.keyCode == '40') {
            // down arrow
            
            //Next position player
            playerNextposition = document.getElementById(playerCurrentPosition)
            let positionArr = playerCurrentPosition.split(".");     //Har formatet x.11.y.11 gör arrayen [x,11,y,11]
            ++positionArr[1];                                       //Höja X med 1 , ju lägre position desto högre siffra
            playerNextposition = ("x."+positionArr[1]+".y."+positionArr[3]);            
            
            //Next position box med offset
            boxNextPosition = document.getElementById(playerCurrentPosition)
            positionArr = playerCurrentPosition.split(".");            
            ++positionArr[1];                                       //Höja X med 1 , ju lägre ner desto högre siffra
            ++positionArr[1];
            boxNextPosition = ("x."+positionArr[1]+".y."+positionArr[3]); 

            boardMovement();
        }
        else if (e.keyCode == '37') {
            // left arrow                        

            //Next position player
            playerNextposition = document.getElementById(playerCurrentPosition)
            let positionArr = playerCurrentPosition.split(".");     //Har formatet x.11.y.11 gör arrayen [x,11,y,11] 
            --positionArr[3];                                       //Minska Y med 1 , ju mer vänster desto lägre siffra
            playerNextposition = ("x."+positionArr[1]+".y."+positionArr[3]);            
            
            //Next position box med offset
            boxNextPosition = document.getElementById(playerCurrentPosition)
            positionArr = playerCurrentPosition.split(".");            
            --positionArr[3];                                       //Minska Y med 1 , ju mer vänster desto lägre siffra
            --positionArr[3];
            boxNextPosition = ("x."+positionArr[1]+".y."+positionArr[3]);

            boardMovement();            
        }
        else if (e.keyCode == '39') {
            // right arrow
            
            //Next position player
            playerNextposition = document.getElementById(playerCurrentPosition)
            let positionArr = playerCurrentPosition.split(".");     //Har formatet x.11.y.11 gör arrayen [x,11,y,11] 
            ++positionArr[3];                                       //Höja Y med 1 , ju mer höger desto högre siffra
            playerNextposition = ("x."+positionArr[1]+".y."+positionArr[3]);
                        
            //Next position box med offset
            boxNextPosition = document.getElementById(playerCurrentPosition)
            positionArr = playerCurrentPosition.split(".");            
            ++positionArr[3];                                       //Höja Y med 1 , ju mer höger desto högre siffra
            ++positionArr[3];
            boxNextPosition = ("x."+positionArr[1]+".y."+positionArr[3]);

            boardMovement();
        }
    }  
}