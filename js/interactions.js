function logic(counter, array) {
    let choosen = document.querySelectorAll('.choosen');

    for (let i of choosen) {
        i.addEventListener('click', function (e) {

            if (notEmpty(e.target)) {
                if (counter % 2 === 0) {
                    addDataSign(e, 'choosenX', 'x');
                    getColRow(e, array, 'x');
                    counter++;
                } else {
                    addDataSign(e, 'choosenO', 'o');
                    getColRow(e, array, 'o');
                    counter++;
                };
            } else {
                console.log('error');

            }
            if (isItTheEnd(array)) {
                alert((`winner is: ${isItTheEnd(array)}`).toLocaleUpperCase());
                reloadLocation();
            }
            if(counter === 9){
                alert(('It\'s a draw').toUpperCase());
                reloadLocation();
            }

        });
    }
}

function notEmpty(target) {
    if (target.dataset.type === 'o' || target.dataset.type === 'x') {
        return false;
    } else {
        return true;
    }
}

function getColRow(e, array, sign) {
    let row = e.target.dataset.rowNum;
    let col = e.target.dataset.colNum;
    array[row][col] = sign;
}

function addDataSign(e, signClass, sign) {
    e.target.classList.add(signClass);
    e.target.dataset.type = sign;
}

function isItTheEnd(array) {
    if (array[0][0] !== '' && array[0][0] === array[0][1] && array[0][1] === array[0][2]) {
        return array[0][0];
    } else if (array[1][0] !== '' && array[1][0] === array[1][1] && array[1][1] === array[1][2]) {
        return array[1][0];
    } else if (array[2][0] !== '' && array[2][0] === array[2][1] && array[2][1] === array[2][2]) {
        return array[2][0];
    } else if (array[0][0] !== '' && array[0][0] === array[1][0] && array[1][0] === array[2][0]) {
        return array[0][0];
    } else if (array[0][1] !== '' && array[0][1] === array[1][1] && array[1][1] === array[2][1]) {
        return array[0][1];
    } else if (array[0][2] !== '' && array[0][2] === array[1][2] && array[1][2] === array[2][2]) {
        return array[0][2];
    } else if (array[0][0] !== '' && array[0][0] === array[1][1] && array[1][1] === array[2][2]) {
        return array[0][0];
    } else if (array[0][2] !== '' && array[0][2] === array[1][1] && array[1][1] === array[2][0]) {
        return array[0][2];
    }
}

function reloadLocation() {
    location.reload();
}