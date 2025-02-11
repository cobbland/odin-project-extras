function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = (() => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;

    })
}

function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`)
};

function Player(name, marker) {
    this.name = name;
    this.market = marker;
}

Player.prototype.getMarker = function() {
    console.log(`My marker is '${this.marker}'.`);
};

Object.setPrototypeOf(Player.prototype, Person.prototype);