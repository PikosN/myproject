import { typeA, typeB, typeC, typeD, typeE, typeF, typeG } from './dicts.js';
// список выбранных слов
let words = []
// счетчики слов
let answerQty = 0
let correctAnswerQty = 0
let wrongAnswerQty = 0
// правильный ответ
let correctLetter = '--'
// выбраны ли темы
let isTypes = false
// слово для удаления
// let deleteWord = ''
// функция определяющая выбрана ли тема
function isTypesFunc() {
    if (Object.values(buttonsState).includes(true)) {
        isTypes = true
    } else {
        isTypes = false
    }
    if (isTypes) {
        document.getElementById('answer').style.visibility = 'visible'
        document.getElementById('alert').textContent = ''
    } else {
        document.getElementById('answer').style.visibility = 'hidden'
        document.getElementById('alert').textContent = 'Выберите тему'
        document.getElementById('word').textContent = ''
    }
} 
// случайное слово из выбранных тем + отображение прошлого слова + внесение в переменную правильного ответа
function newWord() {
    document.getElementById('previousWord').textContent = `Предыдущее слово:  ${document.getElementById('word').textContent}`
    let word = words[Math.floor(Math.random() * (words.length))]
    try {document.querySelector('#word').textContent = word.text} catch {}
    try {correctLetter = word.letter} catch {}
}
// список из кнопок из index.html
const buttons = document.querySelectorAll('p.types')
// объект с состояниями кнопок: нажата или нет
const buttonsState = {}
// присвоение каждой кнопке состояния не нажата
buttons.forEach((item) => buttonsState[item.id] = false)
// создание функций при нажатии для кнопок
buttons.forEach(function(item) {
    document.getElementById(item.id).onclick = function () {
        buttonsState[item.id] = !buttonsState[item.id]
        if (buttonsState[item.id]) {
            words = words.concat(eval(item.id))
            document.getElementById(item.id).style.color = 'green'
        } else {
            words = words.filter(a => !eval(item.id).includes(a))
            document.getElementById(item.id).style.color = 'black'
        }
        newWord()
        isTypesFunc()
    }
})
// создание функции при введении ответа
document.getElementById('answer').addEventListener('input', function() {
    if ((document.getElementById('answer').value).toLowerCase() === 'ё') {
        document.getElementById('answer').value = 'е'
    }
})
document.getElementById('answerForm').addEventListener('submit', function() {
    event.preventDefault()
    answerQty += 1
    document.getElementById('answerQty').textContent = `Ответов: ${answerQty}`
    if ((document.getElementById('answer').value).toLowerCase() === correctLetter) {
        correctAnswerQty += 1
        document.getElementById('correctAnswerQty').textContent = `Правильных: ${correctAnswerQty}`
        // присвоение зеленого цвета правильным ответам
        document.getElementById('correctAnswerQty').style.color = 'green'
        // присвоение стандартного цвета неправильным ответам
        document.getElementById('wrongAnswerQty').style.color = 'black'
        // удаление правильно отвеченного слова
        // 
        } else {
        // если ответ неправильный, то увеличение количества неправильных ответов на 1 и их отображение
        wrongAnswerQty += 1
        document.getElementById('wrongAnswerQty').textContent = `Неправильных: ${wrongAnswerQty}`
        // присвоение красного цвета неправильным ответам
        document.getElementById('wrongAnswerQty').style.color = 'red'
        // присвоение стандартного цвета правильным ответам
        document.getElementById('correctAnswerQty').style.color = 'black'
    }
    newWord()
    document.getElementById('answer').value = ''
})