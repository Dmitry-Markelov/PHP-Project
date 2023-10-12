<?php

class DB {
    private $users = array(
        array(
            'id' => 1,
            'login' => 'Vasya',
            'username' => 'Василий',
            'hash' => 'c082282cad5d535061e6205f6e3576a4',
        ),
        array(
            'id' => 2,
            'login' => 'Semen',
            'username' => 'Семён',
            'hash' => 'faaa930d100c5c0af294a4f582e27d33',
        )
    );
    public $salt = '';

    public function getUser($login) {
        foreach ($this->users as $user) {
            if($login == $user['login']) {
                return $user;
            }
        }
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
        $salt = bin2hex(random_bytes(16));
        $newUserId = count($this->users) + 1;
        $newUser = array(
            'id' => $newUserId,
            'logun' => $login,
            'username' => $username,
            'hash' => $hash,
            'salt' => $salt
        )
    }
}