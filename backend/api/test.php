<?php
// 開啟原始文件
$myfile = fopen("webdictionary.css", "r") or die("Unable to open file!");
// 輸出文件
$outputFile = fopen("output.css", "w");

// 讀取原始文件
$file = fread($myfile, filesize("webdictionary.css"));
// 取代空格
$file = preg_replace('/\s(?=)/', '', $file);
// 搜尋字串
$search = ['color:#404c51', 'h1,h2'];
// 預期
$replaceString = ['color:#fff', 'h2,h1'];
// 更改
$replace = preg_split ('({(.*?)})e', $file);

// 顯示
print_r ($replace);

// 寫入輸出檔案
fwrite($outputFile, $replace);

// 關閉文件
fclose($myfile, $outputFile);
