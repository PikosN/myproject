import { typeA, typeB, typeC, typeD, typeE, typeF, typeG } from './dicts.js';
// список выбранных слов
const allWords = {
    typeA,
    typeB,
    typeC,
    typeD,
    typeE,
    typeF,
    typeG,
}
let words = []
// счетчики слов
let answerQty = 0
let correctAnswerQty = 0
let wrongAnswerQty = 0
// прошлое слово и правильный ответ
let correctLetter = ''
let previousWord = ''
// выбраны ли темы
let isTypes = false
// слово для удаления
let deleteWord = ''
// список из кнопок из index.html
const buttons = document.querySelectorAll('p.types')
// объект с состояниями кнопок: нажата или нет
const buttonsState = {}
// присвоение каждой кнопке состояния не нажата
buttons.forEach((item) => buttonsState[item.id] = false)
// список элементов
const elements = {
    answer: document.getElementById('answer'),
    alert: document.getElementById('alert'),
    word: document.getElementById('word'),
    correctAnswerQty: document.getElementById('correctAnswerQty'),
    wrongAnswerQty: document.getElementById('wrongAnswerQty'),
    answerQty: document.getElementById('answerQty'),
}
// есть ли слова в массиве
function isWordsFunc() {
    if (words.length === 0) {
        elements.answer.style.visibility = 'hidden'
        elements.alert.textContent = 'Вы правильно написали все слова!'
        elements.word.textContent = ''
        
        buttons.forEach(button => button.style.color = 'black')
        for (const a in buttonsState) {
            buttonsState[a] = false
        }
    }
}

// функция определяющая выбрана ли тема
function isTypesFunc() {
    if (Object.values(buttonsState).includes(true)) {
        isTypes = true
    } else {
        isTypes = false
    }
    if (isTypes) {
        elements.answer.style.visibility = 'visible'
        elements.alert.textContent = ''
    } else {
        elements.answer.style.visibility = 'hidden'
        elements.alert.textContent = 'Выберите тему'
        elements.word.textContent = ''
    }
} 
// случайное слово из выбранных тем + отображение прошлого слова + внесение в переменную правильного ответа
function newWord() {
    document.getElementById('previousWord').textContent = `Предыдущее слово:  ${previousWord}`
    
    document.getElementById('previousLetter').textContent = `Правильная буква:  ${correctLetter}`
    let word = words[Math.floor(Math.random() * (words.length))]
    try {document.querySelector('#word').textContent = word.text} catch {}
    try {correctLetter = word.letter} catch {}
    previousWord = document.getElementById('word').textContent
    try {deleteWord = word.text} catch {}
}
// создание функций при нажатии для кнопок
buttons.forEach(function(item) {
    item.onclick = function () {
        buttonsState[item.id] = !buttonsState[item.id]
        if (buttonsState[item.id]) {
            words = words.concat(allWords[item.id])
            item.style.color = 'green'
        } else {
            words = words.filter(a => !allWords[item.id].includes(a))
            item.style.color = 'black'
        }
        newWord()
        isTypesFunc()
    }
})
// ЗАМЕНА Ё НА Е В ПОЛЕ ОТВЕТА
elements.answer.addEventListener('input', function() {
    if ((elements.answer.value).toLowerCase() === 'ё') {
        elements.answer.value = 'е'
    }
    if (elements.answer.value === ' ') {
        elements.answer.value = ''
    }
})
// создание функции при введении ответа
document.getElementById('answerForm').addEventListener('submit', function() {
    event.preventDefault()
    answerQty += 1
    elements.answer.textContent = `Ответов: ${answerQty}`
    if ((elements.answer.value).toLowerCase() === correctLetter) {
        correctAnswerQty += 1
        elements.correctAnswerQty.textContent = `Правильных: ${correctAnswerQty}`
        // присвоение зеленого цвета правильным ответам
        elements.correctAnswerQty.style.color = 'green'
        // присвоение стандартного цвета неправильным ответам
        elements.wrongAnswerQty.style.color = 'black'
        // удаление правильно отвеченного слова
        words = words.filter(item => {
            return item.text != deleteWord
        })
        isTypesFunc()
        isWordsFunc()
        } else {
        // если ответ неправильный, то увеличение количества неправильных ответов на 1 и их отображение
        wrongAnswerQty += 1
        elements.wrongAnswerQty.textContent = `Неправильных: ${wrongAnswerQty}`
        // присвоение красного цвета неправильным ответам
        elements.wrongAnswerQty.style.color = 'red'
        // присвоение стандартного цвета правильным ответам
        elements.correctAnswerQty.style.color = 'black'
    }
    newWord()
    elements.answer.value = ''
})
console.log('Message')