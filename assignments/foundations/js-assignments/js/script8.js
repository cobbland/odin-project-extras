const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redText = document.createElement("p");
redText.textContent = "Hey, I'm red!";
redText.style.color = "red";
container.appendChild(redText);

const blueText = document.createElement("h3");
blueText.textContent = "I'm a blue h3!";
blueText.style.color = "blue"
container.appendChild(blueText);

const newDiv = document.createElement("div");
newDiv.style.cssText =
    "border: 5px solid black; background-color: pink; padding: 5px; margin-bottom: 10px";
container.appendChild(newDiv);

const newHOne = document.createElement("h1");
newHOne.textContent = "I'm in a div";
newDiv.appendChild(newHOne);

const newP = document.createElement("p");
newP.textContent = "ME TOO!";
newDiv.appendChild(newP);

/** 
Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:
- a <p> with red text that says “Hey I’m red!”
- an <h3> with blue text that says “I’m a blue h3!”
- a <div> with a black border and pink background color with the following elements inside of it:
    - another <h1> that says “I’m in a div”
    - a <p> that says “ME TOO!”
    - Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it 
    before adding it to the container.
*/

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});