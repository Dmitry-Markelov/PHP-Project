<?php
//php-project/server/?method=login&login=Vasya&hash=188cf4fed77cd76b405b3c1ddcd93261&rnd=3
require_once('application/modules/db/DB.php');
class User {
    private $db;
    function __construct() {
        $db = new DB();
        $this->db = $db;
    }
    function login($login, $password) {
        $user = $this->db->getUser($login);
        $sailtDB = $user['sault'];
        $hashDB = $user['hash'];
        $hashS = md5(md5($login.$password).$sailtDB);
        if ($hashDB === $hashS) {
            $token = md5($hashDB.rand());
            return array(true, array(
                'name' => $user['username'],
                'token' => $token,
                )
            );
        }
        return array(false, 1002);
    }
}