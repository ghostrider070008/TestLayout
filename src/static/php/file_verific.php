<?php
    class Checklist
{
    public $array;
    public $common_array;
    public $content;
    public $property = ["expense", "family", "name", "patronymic", "sum"];
    function __construct($path)
    {
        $this->encoding($path);
        $this->file_open($path);
    }
    // вывод массива
        function view(){
        print_r($this->array);
    }
    //добавление элемента в массив
    function add($mas, $k, $i){
        for($j=0;$j<count($this->property);$j++){
            $this->array[$k][$this->property[$j]] = $mas[$i];
            $i++;

        }
        return $i-1;
    }
    //расчет суммы
    function summa(){
        $sum = 0;
        for($i=1;$i<=count($this->array);$i++){
            $sum = $sum + (float)$this->array[$i]["sum"];

        };
        return $sum;
    }
    //вывод суммы
    function view_sum($sum){
        echo "<br>";
        echo "Сумма равна = ".$sum;
    }
    //удаление лишних символов
    function delete_characters(){
        $this->content = str_replace("\r", ';', $this->content);
        $this->content = str_replace(["\r","\n"], '', $this->content);
        $this->content = str_replace(",", '.', $this->content);
        }
        //перевод из строки в массив
    function string_to_array(){
        $this->delete_characters();
        $this->common_array = explode(";", $this->content);
        array_unshift($this->common_array, '');
    }
    //открытие файла
    function file_open($path){
        $filename = $path;
        $handle = fopen($filename, "rb");
        $this->content = fread($handle, filesize($filename));
        fclose($handle);
    }
    function encoding($path){
        $file_string = file_get_contents ($path);
        $file_string = iconv("WINDOWS-1251", "UTF-8", $file_string);
        file_put_contents ($path, $file_string);
    }
}



