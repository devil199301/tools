<?php
// 解析輸入資料
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$path = 'C:\Users\YenChih\Downloads\MZ001-01\slot';

//print_r(json_encode($request));
//$path = $request -> $path;

$output = array();

getDirList($path);

print_r(json_encode($output));

function getDirList($dir)
{
    global $output;
    $lobbygame = array();
    $gamelist = array();
    $i = 0;
    if (is_dir($dir)) {
        $dh = opendir($dir);
        chdir($dir);
        while (($file = readdir($dh)) !== false) {
            $i++;
            if (is_dir($file) && basename($file) != '.' && basename($file) != '..') {
                getDirList($file);
            } else if (filename($file) != "." && filename($file) != "..") {
                
                // 過濾掉檔案副檔名
                $name = pathinfo($file, PATHINFO_FILENAME);

                // 塞到陣列
                array_push($gamelist, $name);

                // 組合 { "資料夾名稱":[圖片名稱,圖片名稱..] }
                $output[$dir] = $gamelist;

            }
        }
        chdir("../");
        closedir($dh);
    }
}

function filename($file)
{
    $path_parts = pathinfo($file);
    return basename($file);
}
