

function drawBoard(width, height) {
    let main = document.querySelector('.main');
    for(let i = 0; i < height; i++){
        main.appendChild(drawRow(width, i));
    }
}

function drawRow(width, row) {
    let rowLine = document.createElement('div');
    rowLine.classList.add('row');

    for(let i = 0; i < width; i++){
        rowLine.appendChild(createSquare(row, i));
    }
    return rowLine;
}

function createSquare(row, col){
    let sqWrapp = document.createElement('div');
    sqWrapp.classList.add('square');
    let square = document.createElement('div');
    square.classList.add('choosen');
    square.dataset.rowNum = row;
    square.dataset.colNum = col;
    sqWrapp.appendChild(square);
    return sqWrapp;
}









