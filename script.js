const colorName = document.querySelectorAll(".color");

colorName.forEach(function (element, index) {
    const decrease = document.querySelectorAll(".decrease")[index];
    const increase = document.querySelectorAll(".increase")[index];
    const inputRange = document.querySelectorAll('input[type="range"]')[index];
    const inputElement = document.querySelectorAll('input[type="number"]')[
        index
    ];

    const checkInput = function () {
        if (inputElement.value !== "") {
            inputRange.value = inputElement.value;
        }

        if (inputElement.value <= -1) {
            inputElement.value = inputRange.min;
        }

        if (inputElement.value >= 254) {
            inputElement.value = inputRange.max;
        }
    };

    const buttonDecrease = function () {
        if (inputElement.value >= 1) {
            inputElement.value--;
            inputRange.value--;
        }
    };

    const buttonIncrease = function () {
        if (inputElement.value <= 254) {
            inputElement.value++;
            inputRange.value++;
        }
    };

    const controlRange = function () {
        inputElement.value = event.currentTarget.value;
    };

    inputElement.addEventListener("keyup", checkInput);
    decrease.addEventListener("click", buttonDecrease);
    increase.addEventListener("click", buttonIncrease);
    inputRange.addEventListener("change", controlRange);
});

function displayColor() {
	const colorOutput = document.getElementById("color-output");
	
	const red   = document.getElementById("red").value;
	const green = document.getElementById("green").value;
	const blue  = document.getElementById("blue").value;
	
	const target    = document.getElementById("target");
	const targetHex = document.getElementById("target-hex");
	
	if (red >= 0 && green >= 0 && blue >= 0) {
	    target.innerHTML = `rgb(${red}, ${green}, ${blue})`;
	    targetHex.innerHTML = '#'+Number(`${red}`).toString(16)+''+Number(`${green}`).toString(16)+''+Number(`${blue}`).toString(16);
	    colorOutput.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
	}
}

window.addEventListener("load", function () {
	return displayColor();
});

document.body.addEventListener("click", function () {
	return displayColor();
});

document.body.addEventListener("change", function () {
	return displayColor();
});
