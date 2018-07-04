<?php
// 解析輸入資料
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$path = $request->path;
$outputpath = 'D:/MZ001-01/opt/';

$gamedetail = array();
getDirList($path);

print_r(json_encode($gamedetail));

function getDirList($dir)
{
    global $gamedetail;
    global $outputpath;
    global $path;
    $lobbygame = array();
    $gamelist = array();
    $i = 1;
    if (is_dir($dir)) {
        $dh = opendir($dir);
        chdir($dir);
        while (($file = readdir($dh)) !== false) {

            if (is_dir($file) && basename($file) != '.' && basename($file) != '..') {
                getDirList($file);
            } else if (filename($file) != "." && filename($file) != "..") {
                // 過濾掉檔案副檔名
                $name = pathinfo($file, PATHINFO_FILENAME);
                // 副檔名 搬到新資料夾需要使用的
                $extension = pathinfo($file, PATHINFO_EXTENSION);
                // 塞到陣列
                array_push($gamelist, $name);

                // 組合 { "資料夾名稱":[圖片名稱,圖片名稱..] }
                $gamedetail[$dir] = $gamelist;

                // 新的資料夾路徑
                $folder = $outputpath . $dir;

                // 判斷有無資料夾，沒有就建
                if (!is_dir($folder)) {
                    mkdir($folder, 0700);
                }
                // 複製檔案到指定路徑 + 改檔名 $i
                copy($path . '/' . $dir . '/' . $file, $folder . '/' . $i . '.' . $extension);
                // 主要用於檔名 1.2.3.4 ... 
                $i++;

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
