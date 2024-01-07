<?php

class DB {
    private $pdo;
    public function __construct() {

        $host = '127.0.0.1';
        $port = '3306';
        $user = 'root';
        $pass = '';
        $db = 'DB';

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

    private function queryAll($sql, $params = []) {
        $sth = $this->pdo->prepare($sql);
        $sth->execute($params);
        return $sth->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getUserByLogin($login) {
        return $this->query("SELECT * FROM user WHERE login=?", [$login]);
    }
    
    public function getUserById($uuid) {
        return $this->query("SELECT * FROM user WHERE id_user=?", [$uuid]);
    }

    public function setUserByLogin($login, $hash, $userName, $uuid, $token) {
        return $this->execute("INSERT INTO user (id_user, login, password, username, token) VALUES (?, ?, ?, ?, ?)", [$uuid, $login, $hash, $userName, $token]);
    }

    public function updateToken($login, $token) {
        return $this->execute("UPDATE user SET token=? WHERE login=?", [$token, $login]);
    }

    public function updateScoreById($uuid, $score) {
        return $this->execute("UPDATE score SET score=? WHERE id_user=?", [$score, $uuid]);
    }

    public function addNewPlayerById($uuid, $name) {
        return $this->execute("INSERT INTO score (id_user, name) VALUES (?, ?)", [$uuid, $name]);
    }

    public function getTopPlayers() {
        return $this->queryAll("SELECT name, score FROM score ORDER BY score DESC LIMIT 5");
    }

    public function getMyScoreById($uuid) {
        return $this->query("SELECT score FROM score WHERE id_user=?", [$uuid]);
    }
}