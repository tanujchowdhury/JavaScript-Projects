function drawBoard() {
    const sudokuBoard = document.querySelector("#puzzle")
    const squares = 81

    for (let i=0; i<squares; i++) {
        const inputElement = document.createElement("input")
        
        inputElement.setAttribute('type', 'number')
        inputElement.setAttribute('min', '1')
        inputElement.setAttribute('max', '9')

        if (
            ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i < 21) ||
            ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i < 27) ||
            ((i % 9 == 3 || i % 9 == 4 || i % 9 == 5) && (i > 27 && i < 53)) ||
            ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i > 53) ||
            ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i > 53)
        ) {
            inputElement.classList.add('odd-section')
        }

        sudokuBoard.appendChild(inputElement)
    }
}

let board = []

function insertValues() {
    const inputs = document.querySelectorAll('input')
    
    inputs.forEach((input) => {
        if(input.value) {
            board.push(parseInt(input.value))
            input.classList.add('input-el') 
        } else {
            board.push(0)
            input.classList.add('empty-el')
        }
    })
}

// index of 1d array to row and column
const indexToRowCol = (index) => { 
    return {row: Math.floor(index/9), col: index%9} 
}

// row, column back to index 
const RowColToindex = (row, col) => (row * 9 + col)

const acceptable = (board, index, value) => {
    let { row, col } = indexToRowCol(index)
    for (let r = 0; r < 9; ++r) {
        if (board[RowColToindex(r, col)] == value) return false
    }
    for (let c = 0; c < 9; ++c) {
        if (board[RowColToindex(row, c)] == value) return false
    }

    let r1 = Math.floor(row / 3) * 3
    let c1 = Math.floor(col / 3) * 3
    for (let r = r1; r < r1 + 3; ++r) {
        for (let c = c1; c < c1 + 3; ++c) {
            if (board[RowColToindex(r, c)] == value) return false
        }
    }
    return true
}

const getChoices = (board, index) => {
    let choices = []
    for (let value = 1; value <= 9; ++value) {
        if (acceptable(board, index, value)) {
            choices.push(value)
        }
    }
    return choices
}

const bestBet = (board) => {
    let index, moves, bestLen = 100
    for (let i = 0; i < 81; ++i) {
        if (!board[i]) {
            let m = getChoices(board, i)
            if (m.length < bestLen) {
                bestLen = m.length
                moves = m
                index = i
                if (bestLen == 0) break
            }
        }
    }
    return { index, moves }
}

const solve = () => {
    let { index, moves } = bestBet(board) 
    if (index == null) return true          
    for (let m of moves) {
        board[index] = m                  
        if (solve()) return true        
    }
    board[index] = 0
    return false
}

function populateValues() {
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input, i) => input.value = board[i])
}

const solveButton = document.querySelector("#solve-button")
const clearButton = document.querySelector("#clear-button")

function main() {
    drawBoard()
    solveButton.addEventListener('click', () => {
        insertValues()
        if(solve()) {
            populateValues()
        } else {
            alert("Can't solve this puzzle!")
        }
    })
    clearButton.addEventListener('click', () => window.location.reload(true))
}
main()