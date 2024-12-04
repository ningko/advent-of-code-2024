const fs = require('fs')

const day4Part1 = (input) => {
    const word = 'XMAS'
    const directions = [
        [0, 1],    
        [0, -1],   
        [1, 0],    
        [-1, 0],   
        [1, 1],    
        [1, -1],   
        [-1, 1],   
        [-1, -1]   
    ]

    const rows = input.length
    const columns = input[0].length
    let count = 0

    const found = (r, c, d) => {
        for (let i = 0; i < word.length; i++) {
            const newRow = r + d[0] * i
            const newColumn = c + d[1] * i

            if (newRow < 0 || newRow >= rows || newColumn < 0 || newColumn >= columns) {
                return false
            }

            if (input[newRow][newColumn] !== word[i]) {
                return false
            }
        }
        return true
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            for (const d of directions) {
                if (found(r, c, d)) {
                    count++
                }
            }
        }
    }
    return count
}

fs.readFile('../input/day-4.txt', 'utf8', (err, txt) => {
    if (err) {
        //console.error("!!!")
        return
    }

    const input = txt.trim().split('\n').map(line => line.split(''))

    console.log(day4Part1(input))
})