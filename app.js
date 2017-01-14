/**
 * Created by sanjay on 2017-01-14.
 *
 *
 */


const inputs = document.querySelectorAll(".controls input");
// console.log(inputs);

function handleUpdates() {
    //dataset is an object created for our custom data-sizing attribute in input
    // console.log(this.dataset.sizing);

    const suffix = this.dataset.sizing || ''; //data-sizing is defined only for two input
    // data-sizing or nothing

    // console.log(suffix);

    //give us the name attribute in the input object
    // console.log(this.name);

    //select the root of the document... applies to the whole document not just to one element
    //following is a valid statement in ES6... somehow WebStorm is showing it as error
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener("change", handleUpdates));
// inputs.forEach(input => input.addEventListener("mousemove", handleUpdates));