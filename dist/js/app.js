let currentCalc = document.querySelector(".current-calc")
let containerButtons = document.querySelector(".container-buttons")

function eraseAll() {
    currentCalc.innerHTML = ''
    current = ''
}

let current = ''

function calculate(target) {
    current += target.innerHTML
    currentCalc.innerHTML = current
}

function deleteChar() {
    current = current.slice(0, current.length - 1)
    currentCalc.innerHTML = current
}

function calc() {
    current = eval(current)
    currentCalc.innerHTML = current
}

containerButtons.addEventListener("click", (e) => {
    let target = e.target

    if (target.className == 'number' || target.className == 'operator') {
        calculate(target)
    } else if (target.className == 'delete') {
        deleteChar()
    } else if (target.className == 'clear') {
        eraseAll()
    } else {
        calc()
    }
})