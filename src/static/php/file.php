<html>
<head>
    <title>Загрузка файлов на сервер</title>
</head>
<body>

<?php
if (  ! $_FILES  )
{
    echo '
		  <h2>Форма для загрузки файлов</h2>
		  <form action="" method="post" enctype="multipart/form-data">
		  <input type="file" name="filename"><br>
		  <input type="submit" value="Загрузить"><br>
		  </form>
	';
    echo "<br>";
}
else
{
    if ( $_FILES['filename']['type'] =="text/plain" ){
    echo "<pre>",  print_r($_FILES),  "</pre>";
        include "file_verific.php";
        $check = new Checklist($_FILES['filename']['tmp_name']);
        $k = 1;
        $check->string_to_array();
        for($i=1;$i<count($check->common_array)-1;$i++){
            $i = $check->add($check->common_array,$k,$i);
            $k++;
        }
        echo "<br>";
        echo "Массив равен из функции = ";
        $check->view();
        $check->view_sum($check->summa());

    }
    else
    {
        echo "файл не является списком";
    }
}
?>

</body>
</html>






<?php
