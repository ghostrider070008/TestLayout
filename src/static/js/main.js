"use strict";
$(document).ready(function (){
    $('.slider').slick();
});

let files;

// Вешаем функцию на событие
// Получим данные файлов и добавим их в переменную

$('input[type=file]').change(function(){
    files = this.files;
   console.log(files);
   console.log(peremen);
});
let n = "/ЭЛ.ЭНЕРГИЯ.txt",
    peremen;
$.get(n, function(data) {
    peremen = data;
}, "text");

//
$('.submit.button').click(function( event ){
    event.stopPropagation(); // Остановка происходящего
    event.preventDefault();  // Полная остановка происходящего

    // Создадим данные формы и добавим в них данные файлов из files

    var data = new FormData();
    $.each( files, function( key, value ){
        data.append( key, value );
    });
});

/*Получить текущий месяц*/
const date = new Date();  
const month = date.toLocaleString('ru-RU', { month: 'long' });//month
console.log(month); 
let d = new Date();
let year = d.getFullYear();
let month1 = d.getUTCMonth();
let first_day = new Date();
    d.setDate(d.getDate() + 1 );
console.log(d.getDate());

/* Вывод месяца */
let appMonth = new Vue({
    el: '#app-month',
    data: {
      message: month
    }
  })
/* Вывод года */
 let appYear = new Vue({
    el: '#app-year',
    data: {
        message: year
    }
});
let appWeekday = new Vue({
    el: '#app-weekday',
    data:{
        weekdays: [
            {text: 'Пн'},
            {text: 'Вт'},
            {text: 'Ср'},
            {text: 'Чт'},
            {text: 'Пт'},
            {text: 'Сб'},
            {text: 'Вс'}

        ]
    }
});
/* Функция первого дня месяца */
function receptionFirstDay(){
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    return firstDay;
}
/* Функция дня месяца */
function receptionDay(i){
    let Day = new Date(date.getFullYear(), date.getMonth(), i);
    return Day;
}
/* Функция последнего дня месяца */
function receptionLasttDay(){
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return lastDay;
}
let firstDay = receptionFirstDay();
let lastDay = receptionLasttDay();
console.log(firstDay.getDate());
console.log(lastDay.getDate());

let days = [];
let day = firstDay.getDate();
day = parseInt(day);
console.log(day);
for(let i = firstDay.getDate(); i <= lastDay.getDate();i++){
    days[i] = receptionDay(i);
}
console.log(days);
let differenceDay = 0;
let mas = [];
/* проверка на номер дня недели */
if(firstDay.getDay() !== 1){
    differenceDay = 7 - firstDay.getDay() - 1;
    console.log(differenceDay);
    mas = gettingPreviousMonth(firstDay, differenceDay );
}
//for(let i = 1; i <= differenceDay; i++){
    console.log(mas);
//}

/* Функция поиска чисел предыдущего месяца */
function gettingPreviousMonth(firstDay, differenceDay){
    let mas = [];
    firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    for(let i = 0; i < differenceDay; i++){
        mas[i] = new Date(date.getFullYear(), date.getMonth(), firstDay.getDay() - i);
    }
    return mas;

}

/* Функция поиска чисел следующего месяца */
function gettingNextMonth(lastDay, differenceDay){
    let mas = [];
    lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    for(let i = 0; i <= differenceDay; i++){
        mas[i] = new Date(date.getFullYear(), date.getMonth() + 1, 1 + i );
    }
    return mas;

}

differenceDay = 7 - lastDay.getDay() - 1;
let next_month = gettingNextMonth(lastDay, differenceDay);
console.log(next_month);