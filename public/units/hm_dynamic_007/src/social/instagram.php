<?php

//$appID = '23410080';
//$appSecret = '3e9f432b8fdbb3751648c25e5cbaf138';

//$feed = 526372994152420;
//$maximum = 15;


$instagram_uid="23410080";
$access_token="420680581.25f6cec.6a35531ce1834c3db9521ee5d13dac15";
$photo_count=12;
$api_url="https://api.instagram.com/v1/users/{$instagram_uid}/media/recent/?access_token={$access_token}&count={$photo_count}";



$filename = basename(__FILE__, '.php').'.json';



    //$authentication = file_get_contents("https://graph.facebook.com/oauth/access_token?grant_type=client_credentials&client_id={$appID}&client_secret={$appSecret}");

    $response = file_get_contents($api_url);
    file_put_contents('/var/www/sites/adbreak/campaigns/hm_dynamic_007/social/'.$filename, $response);



header('Content-Type: application/json');
header('Last-Modified: '.gmdate('D, d M Y H:i:s', $filetime).' GMT');

print($_GET['callback'] ? $_GET['callback'].'('.$response.')' : $response);