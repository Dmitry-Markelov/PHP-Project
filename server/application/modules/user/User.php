<?php
class User {
    function __construct($db) {
        $this->db = $db;
    }
    function login($login, $hash, $rnd) {
        $hashS = md5(md5($login.'1234').$rnd);
        print_r($hashS);
        if ($hash === $hashS) {
            $token = md5($hash.rand());
            return array(
                'name' => 'Vasya',
                'surname' => 'Pupkin',
                'token' => $token,
            );
        }
        return array(false, 1002);
    }
}