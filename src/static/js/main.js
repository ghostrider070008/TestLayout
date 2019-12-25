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
    d.setDate(d.getDate() + 8 ); 
console.log(d.getDate());


var app = new Vue({
    el: '#app-month',
    data: {
      message: month
    }
  })
