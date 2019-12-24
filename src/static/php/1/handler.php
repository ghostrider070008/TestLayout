<?php
include "../file_verific.php";
if(isset($_FILES['filename'])){
    $req = false; // изначально переменная для "ответа" - false
    // Приведём полученную информацию в удобочитаемый вид
      ob_start();
      $check = new Checklist($_FILES['filename']['tmp_name']);
      $k = 1;
      $check->string_to_array();
      for($i=1;$i<count($check->common_array)-1;$i++){
          $i = $check->add($check->common_array,$k,$i);
          $k++;
      }
      //echo "<br>";
      //echo "Массив равен из функции = ";
      $check->view();
      //$check->view_sum($check->summa());
      $req = ob_get_contents();
      ob_end_clean();
      echo (json_encode($check->array));
      //echo (json_encode($req));
      exit;

  }













    /*ob_start();
    echo '<pre>';
    echo 'Имя пользователя: <strong>' , $_POST['fio'] , '</strong><br>Данные загруженного файла:<br>';
    print_r($_FILES['file']);
    echo '</pre>';
    $req = ob_get_contents();
    ob_end_clean();
    echo json_encode($req); // вернем полученное в ответе
    exit;
}*/