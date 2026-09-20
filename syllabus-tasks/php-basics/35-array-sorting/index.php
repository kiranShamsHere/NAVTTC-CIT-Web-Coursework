<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task35</title>
</head>

<body>
    <?php
    $num = [1, 3, 5, 4, 8, 9, 0, 2, 6, 7];
    echo "Before Sorting An Array<br>";
    var_dump($num);
    sort($num);
    echo "<br>After Sorting An Array In Ascending Order<br>";
    var_dump($num);



    $alphabets = ['Orange', 'Banana', 'Apple', 'Mango', 'Kiwi'];
    echo "<br>Before Sorting An Array Of Fruits<br>";
    var_dump($alphabets);
    sort($alphabets);
    echo "<br>After Sorting The Array Of Fruits<br>";
    var_dump($alphabets);

    ?>
</body>

</html>