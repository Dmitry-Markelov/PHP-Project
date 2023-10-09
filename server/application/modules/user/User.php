<?php
//php-project/server/?method=login&login=Vasya&hash=188cf4fed77cd76b405b3c1ddcd93261&rnd=3
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