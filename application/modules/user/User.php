<?php
class User {
    function __construct($db) {
        $this -> db = $db;
    }
    function login($login, $password) {
        if ($login === 'Vasya' & $password === '123') {
            return array(
                'name' => 'Vasya',
                'surname' => 'Pupkin',
                'id' => 12
            );
        }
    }
}