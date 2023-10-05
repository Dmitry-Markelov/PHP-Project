<?php

header('Content-Type: application/json; charset=utf-8');

require_once('application/Answer.php');
require_once('application/Triangle.php');

function result($params) {
    $method = $params['method'];
    if ($method) {
        $triangle = new Triangle();
        $a = $params['a'];
        $b = $params['b'];
        switch ($method) {
            case 'method1': return $triangle -> method1($a, $b);
            case 'method2': return $triangle -> method2($a, $b);
            default: return array(false, 102);
        }
    }
    return array(false, 101);
}


echo json_encode(Answer::response(result($_GET)));