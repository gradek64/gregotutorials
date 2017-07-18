<?php

$consumerKey = 'Ye9AnIZw06WNhM1nGrGr949I0';
$consumerSecret = 'YkmzAJdnT5865IQe5a3luUokKKNHLwbTnQd0I70unJyDBi06yX';
$accessToken = '70691229-qFmIRVhLmpoZtfjyHqyUn2kxrYZu12ES3Iiya9zht';
$accessTokenSecret = 'dAzE1XQhaA6O91rBBIlsnRXSgy93htiFbnXfPu68nbovX';

$username = 'hmunitedkingdom';
$maximum = 15;


$filename = basename(__FILE__, '.php').'.json';
//$filetime = filemtime($filename);
$filetime = time();


    $url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
    $base = 'GET&'.rawurlencode($url).'&'.rawurlencode("count={$maximum}&oauth_consumer_key={$consumerKey}&oauth_nonce={$filetime}&oauth_signature_method=HMAC-SHA1&oauth_timestamp={$filetime}&oauth_token={$accessToken}&oauth_version=1.0&screen_name={$username}");
    $key = rawurlencode($consumerSecret).'&'.rawurlencode($accessTokenSecret);
    $signature = rawurlencode(base64_encode(hash_hmac('sha1', $base, $key, true)));
    $oauth_header = "oauth_consumer_key=\"{$consumerKey}\", oauth_nonce=\"{$filetime}\", oauth_signature=\"{$signature}\", oauth_signature_method=\"HMAC-SHA1\", oauth_timestamp=\"{$filetime}\", oauth_token=\"{$accessToken}\", oauth_version=\"1.0\", ";

    $curl_request = curl_init();
    curl_setopt($curl_request, CURLOPT_HTTPHEADER, array("Authorization: Oauth {$oauth_header}", 'Expect:'));
    curl_setopt($curl_request, CURLOPT_HEADER, false);
    curl_setopt($curl_request, CURLOPT_URL, $url."?screen_name={$username}&count={$maximum}");
    curl_setopt($curl_request, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl_request, CURLOPT_SSL_VERIFYPEER, false);
    $response = curl_exec($curl_request);
    curl_close($curl_request);
    if(!stristr($response,'Bad Authentication data')) {
        file_put_contents('/var/www/sites/adbreak/campaigns/hm_dynamic_007/social/' . $filename, $response);
    }


header('Content-Type: application/json');
header('Last-Modified: '.gmdate('D, d M Y H:i:s', $filetime).' GMT');

print($_GET['callback'] ? $_GET['callback'].'('.$response.')' : $response);