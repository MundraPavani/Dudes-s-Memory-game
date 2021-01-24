// test if javascrip file is reached or not
console.log("memory.js file reached");
// Array with tiles
// const: a variable with values that you cannot change
// var : a variable with values you can change whenever you want
const tiles_array = ["tile1","tile2","tile3","tile4","tile5","tile6","tile7","tile8","tile9","tile10"]; 
// the colors used
const color_array = ["red", "blue","yellow", "purple", "black"]; 
// arrays will hold, which tiles are the appropriate color
var red_array = [],
    blue_array = [],
    yellow_array = [],
    purple_array = [],
    black_array = [];
// the last tile color clicked,
var last_color = "";

// count the amount of clicks made by user when clicking on the tiles
var click = 0;

// store the tile clicked on this array
var clicked_tiles = [];

// bool if the same tile is clicked or not
var duplicate_click = false;

// game start variable true or false, true = game is active, 
var game_start = false;

// adding event listeners for tiles and buttons
// the start game button event listener (click)
document.getElementById("Start").addEventListener("click" , Start_game);
// the reset game button event listener (click)
document.getElementById("Reset").addEventListener("click" , Reset_game);

// ID tile1 eventlistener(click)
document.getElementById("tile1").addEventListener("click" , function(){
   tiles("tile1");
});
// ID tile2 eventlistener(click)
document.getElementById("tile2").addEventListener("click" , function(){
    tiles("tile2");
});
// ID tile3 eventlistener(click)
document.getElementById("tile3").addEventListener("click" , function(){
    tiles("tile3");
});
// ID tile4 eventlistener(click)
document.getElementById("tile4").addEventListener("click" , function(){
    tiles("tile4");
});
// ID tile5 eventlistener(click)
document.getElementById("tile5").addEventListener("click" , function(){
    tiles("tile5");
});
// ID tile6 eventlistener(click)
document.getElementById("tile6").addEventListener("click" , function(){
    tiles("tile6");
});
// ID tile7 eventlistener(click)
document.getElementById("tile7").addEventListener("click" , function(){
    tiles("tile7");
});
// ID tile8 eventlistener(click)
document.getElementById("tile8").addEventListener("click" , function(){
    tiles("tile8");
});
// ID tile9 eventlistener(click)
document.getElementById("tile9").addEventListener("click" , function(){
    tiles("tile9");
});
// ID tile10 eventlistener(click)
document.getElementById("tile10").addEventListener("click" , function(){
    tiles("tile10");
});

// Resetting variables that should be reset if you click play or reset game,a shallow variable reset
function reset_var_shallow(){
    // Resetting the last color clicked, amount of clicks, clicked tiles, duplicate tiles variable
    last_color = "",
    click = 0,
    clicked_tiles = [],
    duplicate_tiles = false;
    // start game, if variable is true then you can play the game
    game_start = true;

    for (var j = 1; j < 11; j++){
        var element = "tile" + j;
        document.getElementById(element).style.backgroundColor = "green";
    }
}

// Resetting variables associated with the randomisation of tiles placement, this is a deep reset
function reset_var_deep() {
    // Used in the for loop checking how many of each color is chosen
    var red = 0,
        blue = 0,
        yellow = 0,
        purple = 0,
        black = 0;
      // empty the arrays to store new tiles
    red_array = [],
        blue_array = [],
        yellow_array = [],
        purple_array = [],
        black_array = [];
    for (var i = 0; i < 10; i++){
        var nmbr = Math.floor(Math.random() * 5);   //if we get 3.1 4.1 numbers then it will be floored to whole number
        if (nmbr === 0){
            if (red < 2){
                red++;
                red_array.push(tiles_array[i]);
                
            }
            else {
                i--;
            }
        }
        else if (nmbr === 1){
            if (blue < 2){
                blue++;
                blue_array.push(tiles_array[i]);
                
            }
            else {
                i--;
            }
        }
        else if (nmbr === 2){
            if (yellow < 2){
                yellow++;
                yellow_array.push(tiles_array[i]);
            }
            else {
                i--;
            }
        }
        else if (nmbr === 3){
            if (purple < 2){
                purple++;
                purple_array.push(tiles_array[i]);
            }
            else {
                i--;
            }
        }
        else if (nmbr === 4){
            if (black < 2){
                black++;
                black_array.push(tiles_array[i]);
            }
            else {
                i--;
            }
        }
        console.log(red_array);
        console.log(blue_array);
        console.log(yellow_array);
        console.log(purple_array);
        console.log(black_array);
            
    }
}    
// onload function, getting the game ready when the web page has loaded
window.onload = function(){
    reset_var_deep();

    console.log("onload function is complete");
}

// clicking play, you can try again, tiles have same placement
function Start_game(){
    // this function is used to start game and reset game
    reset_var_shallow();
    

    //console.log("Game has Started!!");
}

// completely resets the game,changig placement of tiles

function Reset_game(){
    // this function is used to start game and reset game
    reset_var_shallow();
    reset_var_deep();
    console.log("Game has Reset!!");
}

// main functionality of the game
function tiles(tile){
    // if game is active
    if(game_start){
        console.log("The game has started");
        // Checking the array if the tile clicked has been clicked previously
        for (var i = 0; i < clicked_tiles.length; i++) {
            if (tile == clicked_tiles[i]) {
                duplicate_click = true;
                console.log("Duplicate tile clicked");
            }
        }

        // If tile clicked has not been clicked previously during the game
        if (!duplicate_click) {
            clicked_tiles.push(tile);
            // if the tile clicked is red
            if (tile == red_array[0] || tile == red_array[1]){   //if tile clicked is inside red array 0 index  or 1 index,then tile clicked will be red
                //document.getElementById(tile).style.backgroundColor = "red";
                // checking if a tile was previously clicked
                if (last_color.length > 2){
                    // if the previous color is matching (red)
                    if (last_color == "red"){
                        document.getElementById(tile).style.backgroundColor = color_array[0];
                        last_color = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = color_array[0];
                        game_start = false;
                        setTimeout(function(){
                            Start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = color_array[0];
                    last_color = "red";
                }
            }   
            // if the tile clicked is blue
            else if (tile == blue_array[0] || tile == blue_array[1]){
                // checking if a tile was previously clicked
                if (last_color.length > 2){
                    // if the previous color is matching (blue)
                    if (last_color == "blue"){
                        document.getElementById(tile).style.backgroundColor = color_array[1];
                        last_color = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = color_array[1];
                        game_start = false;
                        setTimeout(function(){
                            Start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = color_array[1];
                    last_color = "blue";
                }
            }
            // if the tile clicked is yellow
            else if (tile == yellow_array[0] || tile == yellow_array[1]){
                // checking if a tile was previously clicked
                if (last_color.length > 2){
                    // if the previous color is matching (yellow)
                    if (last_color == "yellow"){
                        document.getElementById(tile).style.backgroundColor = color_array[2];
                        last_color = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = color_array[2];
                        game_start = false;
                        setTimeout(function(){
                            Start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = color_array[2];
                    last_color = "yellow";
                }
            }
            // if the tile clicked is purple
            else if (tile == purple_array[0] || tile == purple_array[1]){
                // checking if a tile was previously clicked
                if (last_color.length > 2){
                    // if the previous color is matching (purple)
                    if (last_color == "purple"){
                        document.getElementById(tile).style.backgroundColor = color_array[3];
                        last_color = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = color_array[3];
                        game_start = false;
                        setTimeout(function(){
                            Start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = color_array[3];
                    last_color = "purple";
                }
            }
            // if the tile clicked is black
            else if (tile == black_array[0] || tile == black_array[1]){
                // checking if a tile was previously clicked
                if (last_color.length > 2){
                    // if the previous color is matching (black)
                    if (last_color == "black"){
                        document.getElementById(tile).style.backgroundColor = color_array[4];
                        last_color = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = color_array[4];
                        game_start = false;
                        setTimeout(function(){
                            Start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = color_array[4];
                    last_color = "black";
                }
            }

            click++;
        }

        // resetting the duplicate click
        duplicate_click = false;
    }   
    //if game is not active
    else {
        console.log("The game has not started yet");
    }
   

}
   