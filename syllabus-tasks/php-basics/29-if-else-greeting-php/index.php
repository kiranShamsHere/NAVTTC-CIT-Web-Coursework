<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task-29</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<h1>
<?php
    date_default_timezone_set('Asia/Karachi');
    $time = date('H:i:s');
    if ($time >= 12 && $time < 17) {
        echo "Good Afternoon";
    } elseif ($time >= 17 && $time <= 5) {
        echo "<h3>Good Evening</h3>";
    } else {
        echo "Good Morning";
    }
    ?>

</h1>
 
</body>

</html>