<?php

class Answer {

    static $CODES = array(
        '0' => 'text oshibki v razrabotke',
        '101' => 'param method not setted',
        '102' => 'method not found',
        '228' => 'false triangle points',
        '404' => 'not found',
        '1001' => 'invalid arguments',
        '1002' => 'error in auth user',
        '1003' => 'token is outdated',
        '1004' => 'this login is already taken',
        '9000' => 'unknown error',
        '10000' => 'что-то с автологином',
    );
    static function response($data) {
        if ($data) {
            if (!is_bool($data) && array_key_exists('error', $data)) {
                $code = $data['error'];
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