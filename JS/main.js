let cat = document.querySelector("#changeColour")
// changeColour - this ID was given on the html doc - line 8
//this allows Java to uniquely identify what is to be changed
// document.querySelector is the command for Java to select the "what" that was identified ie
//#changeColour
// let cat stops us typing out -  document.querySelector("#changeColour") repeatedly.
// Console. log lets us see what is happening in the browser
cat.style.color = "red"
console.log(cat.style)
// every element has properties - 
//all have style property eg let obj ={ style: {colour, fontsize}}
//Because the object selection within the curly brackets can be so large. use dots to 
//instruct Java where to go inside.
//if the property is empty use the = sign to assign the value ie color = "red"
//Anytime users does anything like clicking on mouse or tapping keys; this is called an event
//Built in Apis to the events are called event listeners. A function responds to the event.
//These are referred to as Call Back Functions. It called this because it takes in a function.
// function changeToBlue() {}
cat.addEventListener("click",changeToBlue)

function changeToBlue(click) {
    const h2 = click.target
    h2.style.color = "blue"
    h2.innerText = "Hey I'm Blue now"
}


const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
    console.log("pressed")
  output.textContent = `You pressed "${event.key}".`;
});

