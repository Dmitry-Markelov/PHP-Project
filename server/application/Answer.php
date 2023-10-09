<?php

class Answer {

    static $CODES = array(
        '101' => 'param method not setted',
        '102' => 'method not found',
        '228' => 'false triangle points',
        '404' => 'not found',
        '1001' => 'no login/password',
        '1002' => 'error in auth user',
        '9000' => 'unknown error',
    );
    static function response($data) {
        if ($data) {
            if (count($data) === 2 && !$data[0]) {
                $code = $data[1];
                return array(
                    'result' => 'error',
                    'data' => array(
                        'code' => $code,
                        'text' => self::$CODES[$code]
                    )
                );
            }
            return array(
                'result' => 'ok',
                'data' => $data
            );   
        }
        $code = 9000;
        return array(
            'result' => 'error',
            'error' => array(
                'code' => $code,
                'text' => self::$CODES[$code]
            )
        );   
    }
}