// When a user inputs a number
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// Add it to the answer response
let answerResponse = ""

// Loop from 1 to the entered number
for (let i = 1; i <= answer; i++) {

    // If the current number is divisible by 3 and 5 print and add "FizzBuzz"
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        answerResponse = answerResponse + ", FizzBuzz";
    }

    // If the current number is divisible by 3 then print and add "Fizz"
    else if (i % 3 === 0) {
        console.log("Fizz");
        answerResponse = answerResponse + ", Fizz";
    } 

    // If the current number is divisible by 5 then print and add "Buzz"
    else if (i % 5 === 0) {
        console.log("Buzz");
        answerResponse = answerResponse + ", Buzz";
    }
    
    // Otherwise print and add the current number
    else {
        console.log(i);
        if (answerResponse !== "") {
            answerResponse = answerResponse + ", " + i;
        } else {
            answerResponse = answerResponse + i;
        }
    }
}

// Tell the user the answer response
alert(answerResponse);