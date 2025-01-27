# Scratch Pad

*For taking notes.*

let primeQuestion;

do {
    primeQuestion = prompt("Enter a number greater than 1 to see if it's prime.");
} while (primeQuestion <= 1 && num);

for (checkerNumber = 2; checkerNumber <= primeQuestion; checkerNumber++) {
    if (primeQuestion % checkerNumber > 0) {
        alert(`${primeQuestion} is not a prime number. Sorry.`)
        break;
    } else if (checkerNumber === checkerNumber) {
        alert(`${primeQuestion} is a prime number! Congratulations!`)
    }
}
