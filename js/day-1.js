const fs = require('fs')

const day1Part1 = (left, right) => {
    left.sort((a, b) => a - b)
    right.sort((a, b) => a - b)

    let distance = 0
    for (let i = 0; i < left.length; i++) {
        distance += Math.abs(left[i] - right[i])
    }
    return distance
}

const day1Part2 = (left, right) => {
    const inputMap = new Map()
    for (const num of right) {
        inputMap.set(num, (inputMap.get(num) || 0) + 1)
    } 
    let simScore = 0
    for (const num of left) {
        const count = inputMap.get(num) || 0
        simScore += num * count
    }
    return simScore
}

fs.readFile('../input/day-1.txt', 'utf8', (err, data) => {
    if (err) {
        //console.log("get a job")
        return
    }
    const lines = data.trim().split('\n')
    const left = lines.map(line => parseInt(line.split(/\s+/)[0], 10));
    const right = lines.map(line => parseInt(line.split(/\s+/)[1], 10))

    const result1 = day1Part1(left, right)
    const result2 = day1Part2(left, right)
    console.log(result1)
    console.log(result2)
})

