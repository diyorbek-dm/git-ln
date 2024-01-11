"use strict";
const age = 19;
const user = "Dior";
const bool = true;
// Array
const arr = ["Vue.js", "JavaScript", "TypeScript", "Nuxt.js"];
let unknown = 12;
unknown = "unknown";
// Tuple
const arrTuple = ["Dior", 19];
function sayHi(name, age, hasAJob, skills) {
    console.table(`Name: ${name}, Age: ${age}, Loofing for Job: ${hasAJob}, Skills: ${skills}`);
}
sayHi(user, age, bool, arr);
