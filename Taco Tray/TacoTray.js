// JavaScriptmas from Scrimba Day 6
//Review Challenge 4: Taco Tray
// - Help our chef fill a tray with tacos! 

function getRandomNumberOfTacos() {
    /*
    Make this function return an array that contains 
    between one and ten taco emojis 🌮
    Use the following JavaScript concepts:
        - Math.random()
        - Math.floor()
        - new Array()
        - Array.fill()
    */
    let min = Math.min(1)
    let max = Math.max(10)
    let random = Math.floor(Math.random() * (max - min) + min)
    console.log(random)
    let arr = new Array(random).fill("🌮")
    return [arr] // replace this empty tray array

}

function putTacosOnTray() {
    return getRandomNumberOfTacos().map(function (taco) {
        return `<div class="taco">${taco}</div>`
    }).join('')
}

document.getElementById('tray').innerHTML = putTacosOnTray()