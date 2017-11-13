// Greeter.js
import config from './config.json';

export default function() {
    console.log("greet")
    let greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
};