//Translate border-left-width to borderLeftWidth
//My solution
function myCamelize(str) {
    let arr = str.split("-");
    arr = arr.map((each) => {
        let firstChar = each.charAt(0).toUpperCase();
        return firstChar + each.slice(1);
    });
    str = arr.join("");
    let firstChar = str.charAt(0).toLowerCase();
    str = firstChar + str.slice(1);
    return str;
}

// Answer
function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

// Filter Range
// My solution
function myFilterRange(arr, num1, num2) {
    return arr
        .filter((item) => {
            if (item >= num1 && item <= num2) {
                return item;
            }
        })
}

// Answer
function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
}

// Filter range "in place"
// My solution — it didn't work
// Even when trying to account for the changing length of "arr", this method won't work
function myFilterRangeInPlace(arr, a, b) {
    let adjustment = 0;
    for (item in arr) {
        console.log(arr.length + adjustment);
        if (arr[(item - adjustment)] < a || arr[(item - adjustment)] > b) {
            arr.splice((item - adjustment), 1);
            adjustment++;
        }
    }
}

// Answer — I was failing to account for the length of the array shrinking as it went
// The answer does this by using index "i" and adjusting "i" if something is removed
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
  
        // remove if outside of the interval
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
  
}

// Sort in decreasing order
// My solution
function mySortInDecreasingOrder(arr) {
    return arr.sort((a, b) => a - b).reverse();
}

// Answer — did what I did but without the .reverse(), which obviously wasn't needed
function sortInDecreasingOrder(arr) {
    return arr.sort((a, b) => b - a);
}

/** Copy and sort array */
// My code
function myCopySorted(arr) {
    newArr = arr.slice();
    return newArr.sort();
}

/** Map to names
You have an array of user objects, each one has user.name. 
Write the code that converts it into an array of names. */

// My code
function arrayOfNames(users) {
    let names = [];
    for (let arr in users) {
        names.push(users[arr]["name"]);
    }
    return names;
}

// Solution — I completely forgot about map...
// let names = users.map(item => item.name);

/** Map to objects
You have an array of user objects, each one has name, surname and id.
Write the code to create another array from it, of objects with id and 
fullName, where fullName is generated from name and surname. */

// My code
// let usersMapped = users.map((item => {
//     console.log(item);
//     return {
//         fullName: item.name + " " + item.surname,
//         id: item.id,
//     }
// }))

// Solution
/** 
let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
*/

/** Sort users by age
Write the function sortByAge(users) that gets an array of objects with the age property 
and sorts them by age. */

// My code

function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
}

/** Shuffle an array
Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
Multiple runs of shuffle may lead to different orders of elements. */

// My code
// I have no idea why this doesn't work
function shuffle(arr) {
    arr.sort(() => {
        Math.random() - 0.5;
    })
}

// Solution
/*
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
*/


// My crapy code
function myGetAverageAge(users) {
    let ages = 0;
    let count = 0;
    for (let user in users) {
        ages += users[user].age;
        count += 1;
    }
    ages = ages / count;
    return ages;
}

// Solution (better code)
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}


