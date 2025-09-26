import { typeA, typeB, typeC, typeD, typeE, typeF, typeG } from './dicts.js';

let words = [
    // {text: '', letter: ''},

]

let valueA = false
let valueB = false
let valueC = false
let valueD = false
let valueE = false
let valueF = false
let valueG = false

let answerQty = 0
let correctAnswerQty = 0
let wrongAnswerQty = 0
let correctLetter = ''

let form = document.getElementById('answerForm')

const createWord = function () {

    // Отображение предыдущего слова
    document.getElementById('previousWord').textContent = `Предыдущее слово: ${document.getElementById('word').textContent}`
    // Объявление переменной равной случайному слову из списка слов
    const word = words[Math.floor(Math.random() * words.length)]
    // Отображение слова
    try { document.getElementById('word').textContent = word.text } catch { }
    // Костыль какой-то
    try { correctLetter = word.letter } catch { }
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    answerQty += 1
    document.getElementById('answerQty').textContent = `Ответов: ${answerQty}`
    if ((document.getElementById('answer').value).toLowerCase() === correctLetter) {
        correctAnswerQty += 1
        document.getElementById('correctAnswerQty').textContent = `Правильных: ${correctAnswerQty}`
        document.getElementById('correctAnswerQty').style.color = 'green'
        document.getElementById('wrongAnswerQty').style.color = '#91a189'
    } else {
        wrongAnswerQty += 1
        document.getElementById('wrongAnswerQty').textContent = `Неправильных: ${wrongAnswerQty}`
        document.getElementById('wrongAnswerQty').style.color = 'red'
        document.getElementById('correctAnswerQty').style.color = '#91a189'
    }
    createWord()
    document.getElementById('answer').value = ''
})

document.getElementById('typeA').onclick = function () {
    valueA = !valueA
    if (valueA) {
        words = words.concat(typeA)
        createWord()
        document.getElementById('typeA').style.color = '#b3b183'
    } else {
        words = words.filter((item) => !typeA.includes(item))
        createWord()
        document.getElementById('typeA').style.color = '#91a189'
    }
}
document.getElementById('typeB').onclick = function () {
    valueB = !valueB
    if (valueB) {
        words = words.concat(typeB)
        createWord()
        document.getElementById('typeB').style.color = '#b3b183'
    } else {
        words = words.filter((item) => !typeB.includes(item))
        createWord()
        document.getElementById('typeB').style.color = '#91a189'
    }
}
document.getElementById('typeC').onclick = function () {
    valueC = !valueC
    if (valueC) {
        words = words.concat(typeC)
        createWord()
        document.getElementById('typeC').style.color = '#b3b183'
    } else {
        words = words.filter((item) => !typeC.includes(item))
        createWord()
        document.getElementById('typeC').style.color = '#91a189'
    }
}
document.getElementById('typeD').onclick = function () {
    valueD = !valueD
    if (valueD) {
        words = words.concat(typeD)
        createWord()
        document.getElementById('typeD').style.color = '#b3b183'
    } else {
        words = words.filter((item) => !typeD.includes(item))
        createWord()
        document.getElementById('typeD').style.color = '#91a189'
    }
}
document.getElementById('typeE').onclick = function () {
    valueE = !valueE
    if (valueE) {
        words = words.concat(typeE)
        createWord()
        document.getElementById('typeE').style.color = '#b3b183'
    } else {
        words = words.filter((item) => !typeE.includes(item))
        createWord()
        document.getElementById('typeE').style.color = '#91a189'
    }
}
document.getElementById('typeF').onclick = function () {
    valueF = !valueF
    if (valueF) {
        words = words.concat(typeF)
        createWord()
        document.getElementById('typeF').style.color = '#b3b183'
    } else {
        words = words.filter((item) => !typeF.includes(item))
        createWord()
        document.getElementById('typeF').style.color = '#91a189'
    }
}
document.getElementById('typeG').onclick = function () {
    valueG = !valueG
    if (valueG) {
        words = words.concat(typeG)
        createWord()
        document.getElementById('typeG').style.color = '#b3b183'
    } else {
        words = words.filter((item) => !typeG.includes(item))
        createWord()
        document.getElementById('typeG').style.color = '#91a189'
    }
}