// create 16 rows containing 16 divs into the container
// default
let numSquares = 16;
drawBoard(numSquares);
draw();

function draw() {
    const box = document.querySelectorAll(".col");
    box.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = "rgb(" + getRed() + "," + getGreen() + "," + getBlue() + ")";
        });
    });

    function getRed() {
        return Math.floor(Math.random() * 255) + 1;
    }
    
    function getGreen() {
        return Math.floor(Math.random() * 255) + 1;
    }
    
    function getBlue() {
        return Math.floor(Math.random() * 255) + 1;
    }
}

let btn = document.querySelector("button");

btn.addEventListener('click', function(){
    numSquares = prompt("Enter the number of squares.");
    if(numSquares > 100){
        numSquares = prompt("Enter a number less than 100 please.");
    }
    console.log(numSquares);
    drawBoard(numSquares);
    draw();
});

function drawBoard(numSquares){
    let divContainer = document.querySelector('.container');
    // clear container before adding new divs
    divContainer.innerHTML = '';

    // first loop creates the rows. 
    for(let i = 0; i < numSquares; i++){
        let divRow = document.createElement('div');
        divRow.classList.add("row");

        for(let j = 0; j < numSquares; j++){
            let divCol = document.createElement('div');
            divCol.classList.add("col");
            divRow.appendChild(divCol);
        }
        divContainer.appendChild(divRow);
    }
}



