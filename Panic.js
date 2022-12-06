/* 
JavaScriptmas from Scrimba Day 1
Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/
function panic(s) {
    let splitString = s.toUpperCase().split("");
    splitString.push("!")
    for (let i = 0; i < splitString.length; i++) {
        if (splitString[i] === " ") {
            splitString[i] = " 😱 "
        }
    } return splitString.join('')
}

// Test your function
console.log(panic("Hello"))
console.log(panic("I'm almost out of coffee"));
console.log(panic("winter is coming"))


// function panic(phrase){
//    let pizza = phrase.toUpperCase().replaceAll(" ", " 😱 ")
//    return pizza+"!"
// }