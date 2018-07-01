<?php

// 解析輸入資料
// $postdata = file_get_contents("php://input");
// $request = json_decode($postdata);

$path = 'C:/Users/YenChih/Downloads/MZ001-01/slot';
getDirList($path);

$output = array();

function getDirList($dir)
{
    $lobbygame = array();
    $gamelist = array();
    $i = 0;
    if (is_dir($dir)) {
        $dh = opendir($dir);
        chdir($dir);
        while (($file = readdir($dh)) !== false) {
            if (is_dir($file) && basename($file) != '.' && basename($file) != '..') {
                getDirList($file);
            } else if (filename($file) != "." && filename($file) != "..") {

                // 塞遊戲名稱
                array_push($gamelist, $file);

                // 塞到娛樂城(資料夾名稱)
                pushGamelist($dir, $gamelist);
                echo "<br/> current work dir:" . getcwd() . " ;filename: $file <br />";
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
$i = 0;
function pushGamelist($dir, $gamelist)
{
    $i++;
    echo $i;
    print_r(json_encode($dir));
    print_r(json_encode($gamelist));

}
