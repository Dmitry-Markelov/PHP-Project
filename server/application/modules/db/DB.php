<?php

class DB {
    private $pdo;
    public function __construct() {

        $host = '127.0.0.1';
        $port = '3306';
        $user = 'root';
        $pass = '';
        $db = 'BD';

        $connect = "mysql:host=$host;port=$port;dbname=$db;charset=utf8";
        $this->pdo = new PDO($connect, $user, $pass);
    }
    public function __destruct()
    {
        $this->pdo = null;
    }

    private function execute($sql, $params = []) {
        $sth = $this->pdo->prepare($sql);
        return $sth->execute($params);
    }

    private function query($sql, $params = []) {
        $sth = $this->pdo->prepare($sql);
        $sth->execute($params);
        return $sth->fetch(PDO::FETCH_OBJ);
    }

    public $salt = '';

    public function getUserByLogin($login) {
        return $this->query("SELECT * FROM user WHERE login=?", [$login]);
    }

    public function getUser($login) {
        // foreach ($this->users as $user) {
        //     if($login == $user['login']) {
        //         return $user;
        //     }
        // }
        return null;
    }
    public function setSaltDB($salt) {
        $this->salt = $salt;
        return null;
    }
    public function getSaltDB() {
        return $this->salt;
    }
    public function createUser($login, $username, $hash) {
        // $salt = bin2hex(random_bytes(16));
        // $newUserId = count($this->users) + 1;
        // $newUser = array(
        //     'id' => $newUserId,
        //     'logun' => $login,
        //     'username' => $username,
        //     'hash' => $hash,
        //     'salt' => $salt
        // );
    }
}