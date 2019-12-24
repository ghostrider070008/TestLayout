"use strict";
function outpt(json){
        let header = ["Расчетный счет", "Фамилия", "Имя", "Отчество", "Сумма"],
            per,
            summa = 0;
        $('#dom').empty();
        $('#dom').append('<div class="container" id="contain"></div>');
        $('#contain').append('<div class="row" id="table-header"></div>');
        header.forEach(header_out);
        $('#dom').append('<div class="container" id="string_table"></div>');

        for(let i=1;i<=Object.keys(json).length;i++){
                $('#string_table').append('<div class="row" id="table-'+i+'"></div>');
                per = '#table-'+i;
                for(let item in json[i]){
                        $(per).append('<div class="col-xl-2">'+json[i][item]+'</div>');
                }
                if (!isNaN(json[i].sum)) {
                        summa = summa + parseFloat(json[i].sum);
                        summa = Math.round(summa * 100) / 100;
                }
        }
        if (!isNaN(summa)) {
                $('#string_table').append('<div class="row" id="header-sum"></div>');
                $('#header-sum').append('<div class="col-xl-8 green"><h3>Итоговая сумма равна:</h3></div>')
                $('#header-sum').append('<div class="col-xl-2 green"><h3>' + summa + '</h3></div>');
        }
        else {
                $('#string_table').append('<div class="col-xl red"><h3>Документ содержит ошибки, ' +
                    'пожалуйста проверьте документ на ошибки</h3></div>');

        }

    
}
// Функция вывода значений массива
function header_out(value, index, array){
        $('#table-header').append('<div class="col-xl-2"><h3>'+value+'</h3></div>');
}