const fs = require('fs')

const day2Part1 = (report) => {
    const differences = report.slice(1).map((num, i) => num - report[i])
    if (!differences.every(diff => Math.abs(diff) >= 1 && Math.abs(diff) <= 3)) {
        return false
    }
    const inc = differences.every(diff => diff > 0)
    const dec = differences.every(diff => diff < 0)
    return inc || dec
}

const isSafe = (data) => {
    return data.filter(day2Part1).length
}

const day2Part2 = (report) => {
    if(day2Part1(report)) {
        return true
    }

    for (let i = 0; i < report.length; i++) {
        const modReport = report.slice(0, i).concat(report.slice(i + 1))
        if (day2Part1(modReport)) {
            return true
        }
    }
    return false
}

const isSafeDamp = (data) => {
    return data.filter(day2Part2).length;
}

fs.readFile('../input/day-2.txt', 'utf8', (err, txt) => {
    if (err) {
        //console.error("!!!")
        return
    }
    const data = txt.trim().split('\n').map(line => line.split(' ').map(Number))
    console.log(isSafe(data))
    console.log(isSafeDamp(data))
})