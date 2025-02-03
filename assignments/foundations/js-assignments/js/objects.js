let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

let schedule = {
};

function isEmpty(object) {
    for (let key in object) {
        return false;
    };
    return true;
};

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumValues(object) {
    let sum = 0;
    for (let key in object) {
        sum += object[key];
    }
    return sum;
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(object) {
    for (let key in object) {
        if (typeof object[key] == "number") {
            object[key] *= 2;
        };
    };
};

const arr = [1, 2, 3, 4, 5];
const productOfAllNums = arr.reduce((total, currentItem) => {
    //console.log(`total: ${total}`);
    //console.log(`current item: ${currentItem}`);
    return total * currentItem;
}, 1);
//console.log(productOfAllNums); // Outputs 120;
//console.log(arr); // Outputs [1, 2, 3, 4, 5]

// For each item in the array
// Check if it's evenly divisible by two
// If so, triple it (*= 3)
// And add it to a new array
// Declare a new variable 0
// Cycle through the new array, adding each value to our new variable
// Return the new variable
function sumOfTripledEvens(array) {
    let newArray = array.filter((num) => (num % 2) === 0);
    newArray = newArray.map((num) => num * 3);
    return newArray.reduce((total, currentItem) => total + currentItem);
}

// The answer
function sumOfTripledEvensTwo(array) {
    return array
      .filter((num) => num % 2 === 0)
      .map((num) => num * 3)
      .reduce((acc, curr) => acc + curr);
  }