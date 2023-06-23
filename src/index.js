import "./css/styles.css";

import GalacticAge from "./galactic.js";

function handleAge (event) {
    event.preventDefault();
    const currentAge = parseInt(document.getElementById("age").value);
    const spaceAge = new GalacticAge(age);
    const input1 = spaceAge.check
}