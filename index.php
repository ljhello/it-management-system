<?php

// include( './views/index/index.html' );
// var_dump($_SERVER);

$pathInfoExists=array_key_exists('PATH_INFO',$_SERVER);
if($pathInfoExists){
  $path_info=$_SERVER['PATH_INFO'];
}else{
    $path_info='/'; 
}
// 移除开始的/
$path_info=substr($path_info,1);
$path_infos=explode('/',$path_info);



if(strlen($path_infos[0])==0){
    $path='index';
    $filename='index';
}elseif(count($path_infos)==2){
    $path=$path_infos[0];
    $filename=$path_infos[1];
}else{ 
    $path='index';
    $filename=$path_infos[0];
}



// echo( './views/' . $path . '/' . $filename . '.html' );

include('./views/'.$path.'/'.$filename.'.html');

?>