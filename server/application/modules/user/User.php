<?php
class User {
    private $db;
    function __construct($db) {
        $this->db = $db;
    }
    function login($login, $hash) {
        $user = $this->db->getUserByLogin($login);
        if ($user) {
            if ($user->password == $hash) {
                return array(true, array(
                    'name' => $user->username,
                ));
            }
        }
        return array(false, 1002);
    }
    function getRndSalt($login) {
        $salt = bin2hex(random_bytes(16));
        $this->db->setSaltDB($salt);
        return array(true, $salt);
    }
}