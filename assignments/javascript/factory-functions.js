let myArray = [1,1,2,3,5,8,13];
let [a,b,c,d] = myArray;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

let [x,y,...z] = myArray;
console.log(x);
console.log(y);
console.log(z);

function createUser (name) {
    const discordName = "@" + name;

    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;

    return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
    discordName: josh.discordName,
    reputation: josh.getReputation()
});

console.log(josh);

console.log(josh.reputation)

function createPlayer (name, level) {
    const { getReputation, giveReputation } = createUser(name);
  
    const increaseLevel = () => level++;
    return { name, getReputation, giveReputation, increaseLevel };
}

// function createPlayer (name, level) {
//     const user = createUser(name);
  
//     const increaseLevel = () => level++;
//     return Object.assign({}, user, { increaseLevel });
// }

const bob = createPlayer('bob');

console.log(bob);