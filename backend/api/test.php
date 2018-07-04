<?php

$file = 'example.txt';
$newfile = 'example.png';
$dir = 'D:/MZ001-01/opt/ag';
if (mkdir($dir, 0700)) {
    echo "成功建立資料夾" . "<br>";
} else {
    echo "建立資料夾失敗" . "<br>";
}
if (!copy('D:/MZ001-01/slot/ag/补鱼王2代.png', $dir .'/'. $newfile)) {
    echo "failed to copy $file...\n";
}
