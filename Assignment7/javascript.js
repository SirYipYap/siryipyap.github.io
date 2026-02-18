let counter = 0;

function updateCounterDisplay() {
    document.getElementById("counter").textContent = counter;
}

function tickUp() {
    counter++;
    updateCounterDisplay();
}

function tickDown() {
    counter--;
    updateCounterDisplay();
}

function runForLoop() {
    let result = "";
    for (let i = 0; i <= counter; i++) {
        result += i + " ";
    }
    document.getElementById("forLoopResult").textContent = result.trim();
}

function showOddNumbers() {
    let result = "";
    let i = 1;

    while (i <= counter) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
        i++;
    }

    document.getElementById("oddNumberResult").textContent = result.trim();
}

// 1pt: Arrays
function addMultiplesToArray() {
    let multiples = [];

    if (counter >= 5) {
        for (let i = counter; i >= 5; i--) {
            if (i % 5 === 0) {
                multiples.push(i);
            }
        }
    }

    console.log(multiples);
}

function printCarObject() {
    let type = document.getElementById("carType").value;
    let mpg = document.getElementById("carMPG").value;
    let color = document.getElementById("carColor").value;

    let carObject = {
        cType: type,
        cMPG: mpg,
        cColor: color
    };

    console.log(carObject);
}

function loadCar(carNumber) {
    let car;

    if (carNumber === 1) {
        car = carObject1;
    } else if (carNumber === 2) {
        car = carObject2;
    } else if (carNumber === 3) {
        car = carObject3;
    }

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}

function changeColor(colorNumber) {
    let paragraph = document.getElementById("styleParagraph");

    if (colorNumber === 1) {
        paragraph.style.color = "red";
    } else if (colorNumber === 2) {
        paragraph.style.color = "green";
    } else if (colorNumber === 3) {
        paragraph.style.color = "blue";
    }
}
