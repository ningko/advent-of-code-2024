const fs = require('fs')

const day3Part1 = (input) => {
    const regex = /mul\((\d{1,3}),(\d{1,3})\)/g
    let match
    let sum = 0

    while((match = regex.exec(input)) !== null) {
        const first = parseInt(match[1], 10)
        const second = parseInt(match[2], 10)
        sum += first * second
    }
    return sum
}

const day3Part2 = (input) => {
    const regex = /mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\)/g
    let match
    let sum = 0
    let enabled = true

    while ((match = regex.exec(input)) !== null) {
        if (match[0] === 'do()') {
            enabled = true
        } else if (match[0] === "don't()") {
            enabled = false
        } else if (match[1] && match[2] && enabled) {
            const first = parseInt(match[1], 10)
            const second = parseInt(match[2], 10)
            sum += first * second
        }
    }
    return sum
}

fs.readFile('../input/day-3.txt', 'utf8', (err, txt) => {
    if (err) {
        //console.error("!!!")
        return
    }
    console.log(day3Part1(txt))
    console.log(day3Part2(txt))
})