let primeQuestion;

do {
    primeQuestion = prompt("Enter a number greater than 1 to see if it's prime.");
} while (primeQuestion <= 1 && primeQuestion);

for (let checkerNumber = 2; checkerNumber <= primeQuestion; checkerNumber++) {
    if (primeQuestion % checkerNumber == 0 && checkerNumber != primeQuestion) {
        alert(`${primeQuestion} is not a prime number. Sorry.`)
        break;
    } else if (checkerNumber == primeQuestion) {
        alert(`${primeQuestion} is a prime number! Congratulations!`)
    }
}
