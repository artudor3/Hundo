function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // Check to see if values are integers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //generate a list of numbers
        let numbers = generateNumbers(startValue, endValue);

        displayNumbers(numbers)

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Only Integers are allowed for Hundo, please enter both values'
        });
    }
}

function generateNumbers(start, end){
    let numbers = [];

    for (let i = start; i <= end; i++){
        numbers.push(i);
        //console.log(i);
    }

    return numbers;
}

function displayNumbers(numArr){
    let templateRows = '';
    for (let i = 0; i < numArr.length; i++){
        
        if (i % 2 == 0 && i > 0){
            className = "even";
        } else {
            className = "odd";
        }
        
        let row = `<tr><td class="${className}">${i}</td></tr>`;
        templateRows += row;
    }
    
    document.getElementById("results").innerHTML = templateRows;
}