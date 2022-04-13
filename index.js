let currentResults = document.querySelector(".scheduletable")
console.log(currentResults)

let homeElements = document.getElementsByClassName('home')
let awayElements = document.getElementsByClassName('away')
let resultElements = document.getElementsByClassName('score')

let results = []
for (let i = 1; i < resultElements.length; i++) {
    const item = {
        home: homeElements[i].textContent,
        away: awayElements[i].textContent,
        result: resultElements[i].textContent
    }
    results.push(item)
}
console.log(results)

const lastGame = (
    results.find(c => c.result === '-') ?
    results[results.indexOf(results.find(c => c.result === '-')) - 1] :
    results[results.length - 1]
)

console.log(lastGame)