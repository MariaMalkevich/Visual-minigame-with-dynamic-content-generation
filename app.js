const board = document.querySelector('#board')
const colors = ['#3333ff', '#33ff33', '#ff33ff', '#666666', '#ffff33']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 00 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#fff'
    element.style.boxShadow = `0 0 2px #1d1d1d`
}

function getRandomColor(){
    const index = Math.floor(Math.random()* colors.length)
    return colors[index]
}