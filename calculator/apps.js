class Calculator{
    constructor(prevOperTextElement, currentOperTextElement){
        this.prevOperTextElement = prevOperTextElement
        this.currentOperTextElement = currentOperTextElement
        this.clear()
    }
    clear() {
        this.currentOperand = ''
        this.prevOperand = ''
        this.operation = undefined

    }

    delete(){

    }

    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if(this.prevOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.prevOperand = this.currentOperand
        this.currentOperand = ''
      }

    compute() {

    }

    updateDisplay(){
        this.currentOperTextElement.innerText = this.currentOperand
        this.prevOperTextElement.innerText = this.prevOperand

    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')

const prevOperTextElement = 
document.querySelector('[data-prev-operand]')

const currentOperTextElement =
 document.querySelector('[data-current-operand]')

const calculator = new Calculator(prevOperTextElement, currentOperTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})