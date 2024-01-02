<?php
//php-project/server/?method=login&login=Vasya&hash=188cf4fed77cd76b405b3c1ddcd93261&rnd=3
// require_once('application/modules/db/DB.php');
class User {
    private $db;
    function __construct($db) {
        // $db = new DB();
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
        // $user = $this->db->getUser($login);
        // $hashDB = $user['hash'];
        // $saltDB = $this->db->getSaltDB();
        // // return(array(true, $saltDB));
        // $hashS = md5($hashDB.$saltDB);
        // if ($hash === $hashS) {
        //     $token = md5($hashDB.rand());
        //     return array(true, array(
        //         'name' => $user['username'],
        //         'token' => $token,
        //         )
        //     );
        // }
        return array(false, 1002);
    }
    function getRndSalt($login) {
        $salt = bin2hex(random_bytes(16));
        $this->db->setSaltDB($salt);
        return array(true, $salt);
    }
}