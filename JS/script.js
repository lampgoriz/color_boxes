let rowsNumber = inputCheck("rows", 3); // get number of rows from user
let columnsNumber = inputCheck("columns", 6); // get number of columns for each row from user

// validation of user input number
function inputCheck(name, maxElements) {
    let elementsNumber;
    if(name == "rows"){ // check what element adds user
        elementsNumber = Number(prompt(`Write a number of ${name} (less than ${maxElements + 1})`));
    } else if(name == "columns"){ // check what element adds user
        elementsNumber = Number(prompt(`Write a number of ${name} for each row (less than ${maxElements + 1})`));
    }

    /* recursive check the correctness of user input
    if user input are not a number or not a integer or more than maxElements
    we display an error notification and start the loop again*/
    if(isNaN(elementsNumber) || isInteger(elementsNumber) || elementsNumber > maxElements){
        alert(`number must to be integer and less than ${maxElements + 1}`)
        inputCheck(name, maxElements);
    }
    else {
        return elementsNumber;

    }
}

// check is number are integer
function isInteger(num) {
    return (num ^ 0) !== num;
}

/* get container element and start function that puts new elements inside a container */
const container = document.querySelector('.container');
addElements(rowsNumber, columnsNumber);

/* function that puts new elements inside a container */
function addElements(rows, columns) {
    for(let i = 0; i < rows; i++){ // add two rows with pre-made class
        container.insertAdjacentHTML(
            'beforeend',
            `<div class="row"></div>`
        )
        let row = document.querySelectorAll('.row'); // get row element to add a new element inside
        for(let j = 0; j < columns; j++){ // add three columns with pre-made class inside each row
            row[i].insertAdjacentHTML(
                'beforeend',
                `<div class="col"></div>`
            );
        }
    }
    container.insertAdjacentHTML( // add button
        'beforeend',
        `<button class="button">Change all borders color</button>`
    )
}

/* get array of a columns and button */
const arrBoxes = document.querySelectorAll(".col");
const colorChangeButton = document.querySelector('.button');

/* function that change border color of columns */
function changeALLColorsOnReload(arr) {
    if(arr.length == undefined){
        let color = getRandomColor();
        arr.currentTarget.style.borderColor = "#" + color;
    }else {
        for(let i = 0; i < arr.length - 1; i++){
            let color = getRandomColor();
            arr[i].style.borderColor = "#" + color;
        }
    }
}

function getRandomColor() {
    let randomNumber = getRandomNumber(1, 60000);
    let color = randomNumber.toString(16);
    return color;
}

function getRandomNumber (min, max){
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let changeALLColors = ()=>{changeALLColorsOnReload(arrBoxes)};
changeALLColors();

colorChangeButton.addEventListener("click", changeALLColors);

for(let i = 0; i < arrBoxes.length - 1; i++){
    arrBoxes[i].addEventListener("click", changeALLColorsOnReload);
}





