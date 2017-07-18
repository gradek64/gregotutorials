<?php

$appID = '308990769298448';
$appSecret = '3e9f432b8fdbb3751648c25e5cbaf138';

$feed = 526372994152420;
$maximum = 15;


$filename = basename(__FILE__, '.php').'.json';



    $authentication = file_get_contents("https://graph.facebook.com/oauth/access_token?grant_type=client_credentials&client_id={$appID}&client_secret={$appSecret}");

    $response = file_get_contents("https://graph.facebook.com/{$feed}/posts?{$authentication}&limit={$maximum}");

    file_put_contents('/var/www/sites/adbreak/campaigns/hm_dynamic_007/social/'.$filename, $response);


header('Content-Type: application/json');
header('Last-Modified: '.gmdate('D, d M Y H:i:s', $filetime).' GMT');

print($_GET['callback'] ? $_GET['callback'].'('.$response.')' : $response);
file_get_contents('http://analytics.adspdbl.com/amazon_invalidator/index.php?securekey=284363342&directory=hm_dynamic_007');