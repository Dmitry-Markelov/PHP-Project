<?php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

require_once('application/Answer.php');
require_once('application/Application.php');


function result($params) {
    $method = $params['method'];
    if ($method) {
        $app = new Application();
        switch ($method) {
            case 'login': return $app -> login($params);
            case 'triangle': return $app -> triangle($params);
            case 'getRndSalt': return $app -> getRndSalt($params);
            default: return array(false, 102);
        }
    }
    return array(false, 101);
}


echo json_encode(Answer::response(result($_GET)));