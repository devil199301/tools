<?php

    /*  *** 說明 ***
        Portal 主線檔 資料夾名稱必須為 GPK.Web.Portal
        Mobile 主線檔 主線檔 資料夾名稱必須為 GPK.Web.Mobile

        !! 請將下方 4 個檔案路徑 調整為自己的路徑 !!
    */

    /* start 自行調整路徑 */
	$portal_location = "E:/";              //Portal 主線檔放置路徑
	$mobile_location = "E:/";              //Mobile 主線檔放置路徑
    $theme_location = "D:/GPK/Theme/";     //Theme 路徑
	$target_location = "E:/";              //產生檔案目標路徑
    /* end 自行調整路徑 */

    $action = $_POST["action"];            //動作 (建立、還原)
    $site_code = $_POST["site_code"];      //站台代號
	$site_type = $_POST["site_type"];      //站台類型 (Portal, Mobile)

    switch ($site_type) {
        case 'Portal':
            $source_location = $portal_location;
            break;
        case 'Mobile':
            $source_location = $mobile_location;
            break;
    }

    $target_file = $target_location."GPK.Web.".$site_type." - ".$site_code;     //目標檔案文件夾
    $theme_site = $theme_location.$site_type."/".$site_code.".".$site_type;     //該站 theme 資料夾

    if ($site_code == "" || $site_type == "") {
        print_r(json_encode(array(
            "code" => 101,
            "msg" => "缺少欄位"
        )));
    } else {
        switch ($action) {
            case 'generate':
                smartCopy($source_location."GPK.Web.".$site_type, $target_file);
                smartCopy($theme_site, $target_file);

                print_r(json_encode(array(
                    "code" => 100,
                    "msg" => "已建立 ".$target_file
                )));
                break;
            case 'recover':
                smartCopy($target_file."/dist", $theme_site);

                print_r(json_encode(array(
                    "code" => 100,
                    "msg" => "已從 ".$target_file."/dist 覆蓋至 ".$theme_site
                )));
                break;
            default:
                # code...
                break;
        }       
    }





    /** 
     * Copy file or folder from source to destination, it can do 
     * recursive copy as well and is very smart 
     * It recursively creates the dest file or directory path if there weren't exists 
     * Situtaions : 
     * - Src:/home/test/file.txt ,Dst:/home/test/b ,Result:/home/test/b -> If source was file copy file.txt name with b as name to destination 
     * - Src:/home/test/file.txt ,Dst:/home/test/b/ ,Result:/home/test/b/file.txt -> If source was file Creates b directory if does not exsits and copy file.txt into it 
     * - Src:/home/test ,Dst:/home/ ,Result:/home/test/** -> If source was directory copy test directory and all of its content into dest      
     * - Src:/home/test/ ,Dst:/home/ ,Result:/home/**-> if source was direcotry copy its content to dest 
     * - Src:/home/test ,Dst:/home/test2 ,Result:/home/test2/** -> if source was directoy copy it and its content to dest with test2 as name 
     * - Src:/home/test/ ,Dst:/home/test2 ,Result:->/home/test2/** if source was directoy copy it and its content to dest with test2 as name 
     * @todo 
     *     - Should have rollback technique so it can undo the copy when it wasn't successful 
     *  - Auto destination technique should be possible to turn off 
     *  - Supporting callback function 
     *  - May prevent some issues on shared enviroments : http://us3.php.net/umask 
     * @param $source //file or folder 
     * @param $dest ///file or folder 
     * @param $options //folderPermission,filePermission 
     * @return boolean 
     */ 
    function smartCopy($source, $dest, $options=array('folderPermission'=>0755,'filePermission'=>0755)) 
    { 
        $result=false; 
        
        if (is_file($source)) { 
            if ($dest[strlen($dest)-1]=='/') { 
                if (!file_exists($dest)) { 
                    cmfcDirectory::makeAll($dest,$options['folderPermission'],true); 
                } 
                $__dest=$dest."/".basename($source); 
            } else { 
                $__dest=$dest; 
            } 
            $result=copy($source, $__dest); 
            chmod($__dest,$options['filePermission']); 
            
        } elseif(is_dir($source)) { 
            if ($dest[strlen($dest)-1]=='/') { 
                if ($source[strlen($source)-1]=='/') { 
                    //Copy only contents 
                } else { 
                    //Change parent itself and its contents 
                    $dest=$dest.basename($source); 
                    @mkdir($dest); 
                    chmod($dest,$options['filePermission']); 
                } 
            } else { 
                if ($source[strlen($source)-1]=='/') { 
                    //Copy parent directory with new name and all its content 
                    @mkdir($dest,$options['folderPermission']); 
                    chmod($dest,$options['filePermission']); 
                } else { 
                    //Copy parent directory with new name and all its content 
                    @mkdir($dest,$options['folderPermission']); 
                    chmod($dest,$options['filePermission']); 
                } 
            } 

            $dirHandle=opendir($source); 
            while($file=readdir($dirHandle)) 
            { 
                if($file!="." && $file!="..") 
                { 
                     if(!is_dir($source."/".$file)) { 
                        $__dest=$dest."/".$file; 
                    } else { 
                        $__dest=$dest."/".$file; 
                    } 
                    //echo "$source/$file ||| $__dest<br />"; 
                    $result=smartCopy($source."/".$file, $__dest, $options); 
                } 
            } 
            closedir($dirHandle); 
            
        } else { 
            $result=false; 
        } 
        return $result; 
    } 
?>