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

    public function getUserByLogin($login) {
        return $this->query("SELECT * FROM user WHERE login=?", [$login]);
    }
    
    public function setUserByLogin($login, $password, $userName) {
        $id_user = uniqid();
        return $this->execute("INSERT into user (id_user, login, password, username) VALUES (?, ?, ?, ?)", [$id_user, $login, $password, $userName]);
    }
}