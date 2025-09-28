import { typeA, typeB, typeC, typeD, typeE, typeF, typeG } from './dicts.js';
// список слов по выбранным темам
let words = [
    // {text: '', letter: ''},

]
// Есть ли тема в списке words
let valueA = false
let valueB = false
let valueC = false
let valueD = false
let valueE = false
let valueF = false
let valueG = false
// количество ответов
let answerQty = 0
let correctAnswerQty = 0
let wrongAnswerQty = 0
// правильный ответ
let correctLetter = '--'

// функция выбора рандомного слова из списка words
const createWord = function () {
    // Отображение предыдущего слова
    document.getElementById('previousWord').textContent = `Предыдущее слово: ${document.getElementById('word').textContent}`
    // Объявление переменной равной случайному слову из списка слов
    const word = words[Math.floor(Math.random() * words.length)]
    // Отображение слова
    try { document.getElementById('word').textContent = word.text } catch { }
    // корректный ответ к этому слову
    try { correctLetter = word.letter } catch { }
}
// функция выполняемая при введении ответа
document.getElementById('answerForm').addEventListener("submit", (event) => {
    // удаление перезагрузки после введения ответа
    event.preventDefault()
    // увеличение количества ответов на 1 и их отображение
    answerQty += 1
    document.getElementById('answerQty').textContent = `Ответов: ${answerQty}`
    // если ответ правильный, то увеличение количества правильных ответов на 1 и их отображение
    if ((document.getElementById('answer').value).toLowerCase() === correctLetter) {
        correctAnswerQty += 1
        document.getElementById('correctAnswerQty').textContent = `Правильных: ${correctAnswerQty}`
        // присвоение зеленого цвета правильным ответам
        document.getElementById('correctAnswerQty').style.color = 'green'
        // присвоение стандартного цвета неправильным ответам
        document.getElementById('wrongAnswerQty').style.color = 'black'
    } else {
        // если ответ неправильный, то увеличение количества неправильных ответов на 1 и их отображение
        wrongAnswerQty += 1
        document.getElementById('wrongAnswerQty').textContent = `Неправильных: ${wrongAnswerQty}`
        // присвоение красного цвета неправильным ответам
        document.getElementById('wrongAnswerQty').style.color = 'red'
        // присвоение стандартного цвета правильным ответам
        document.getElementById('correctAnswerQty').style.color = 'black'
    }
    // выбор следующего слова
    createWord()
    // удаление предыдущего ответа в поле ввода
    document.getElementById('answer').value = ''
})
// функция проверки есть ли хоть 1 выбранная тема, если true, то появляется поле ввода, если false, то поле ввода скрывается и появляется надпись "выберите тему"
const hasType = function () {
    if (valueA || valueB || valueC || valueD || valueE || valueF || valueG === true) {
        document.getElementById('answer').style.visibility='visible'
        document.getElementById('alert').textContent = ''
    } else {
        document.getElementById('answer').style.visibility='hidden'
        document.getElementById('word').textContent = ''
        document.getElementById('alert').textContent = 'Выберите тему'
    }
}

// функции выбора темы при клике
document.getElementById('typeA').onclick = function () {
    valueA = !valueA
    
    if (valueA) {
        words = words.concat(typeA)
        createWord()
        document.getElementById('typeA').style.color = '#008000'
    } else {
        words = words.filter((item) => !typeA.includes(item))
        createWord()
        document.getElementById('typeA').style.color = 'black'
    }
    hasType()
}
document.getElementById('typeB').onclick = function () {
    valueB = !valueB
    if (valueB) {
        words = words.concat(typeB)
        createWord()
        document.getElementById('typeB').style.color = '#008000'
    } else {
        words = words.filter((item) => !typeB.includes(item))
        createWord()
        document.getElementById('typeB').style.color = 'black'
    }
    hasType()
}
document.getElementById('typeC').onclick = function () {
    valueC = !valueC
    if (valueC) {
        words = words.concat(typeC)
        createWord()
        document.getElementById('typeC').style.color = '#008000'
    } else {
        words = words.filter((item) => !typeC.includes(item))
        createWord()
        document.getElementById('typeC').style.color = 'black'
    }
    hasType()
}
document.getElementById('typeD').onclick = function () {
    valueD = !valueD
    if (valueD) {
        words = words.concat(typeD)
        createWord()
        document.getElementById('typeD').style.color = '#008000'
    } else {
        words = words.filter((item) => !typeD.includes(item))
        createWord()
        document.getElementById('typeD').style.color = 'black'
    }
    hasType()
}
document.getElementById('typeE').onclick = function () {
    valueE = !valueE
    if (valueE) {
        words = words.concat(typeE)
        createWord()
        document.getElementById('typeE').style.color = '#008000'
    } else {
        words = words.filter((item) => !typeE.includes(item))
        createWord()
        document.getElementById('typeE').style.color = 'black'
    }
    hasType()
}
document.getElementById('typeF').onclick = function () {
    valueF = !valueF
    if (valueF) {
        words = words.concat(typeF)
        createWord()
        document.getElementById('typeF').style.color = '#008000'
    } else {
        words = words.filter((item) => !typeF.includes(item))
        createWord()
        document.getElementById('typeF').style.color = 'black'
    }
    hasType()
}
document.getElementById('typeG').onclick = function () {
    valueG = !valueG
    if (valueG) {
        words = words.concat(typeG)
        createWord()
        document.getElementById('typeG').style.color = '#008000'
    } else {
        words = words.filter((item) => !typeG.includes(item))
        createWord()
        document.getElementById('typeG').style.color = 'black'
    }
    hasType()
}

