document.addEventListener("DOMContentLoaded", function (event) {

    let counter = 0;
    
    let gameArr = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    // drawboard
    drawBoard(3, 3);

    // logic
    logic(counter, gameArr);




});