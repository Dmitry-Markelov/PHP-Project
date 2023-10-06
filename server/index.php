<?php

header('Content-Type: application/json; charset=utf-8');
header('Acces-Control-Allow-Origin: *');

require_once('application/Answer.php');
require_once('application/Application.php');
require_once('application/Triangle.php');


function result($params) {
    $method = $params['method'];
    if ($method) {
        $app = new Application();
        $triangle = new Triangle();
        switch ($method) {
            case 'login': return $app -> login($params);
            case 'triangle': return $triangle -> triangle($params);
            // case 'method2': return $triangle -> method2($a, $b);
            // default: return array(false, 102);
        }
    }
    return array(false, 101);
}


echo json_encode(Answer::response(result($_GET)));