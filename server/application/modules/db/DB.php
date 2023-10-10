<?php

class DB {
    private $users = array(
        array(
            'id' => 1,
            'login' => 'Vasya',
            'username' => 'Василий',
            'hash' => '875ca9b60b4f50290d61095dabd81a40',
            'sault' => '8e79c387779a48f2fb1a528027542473',
        ),
        array(
            'id' => 2,
            'login' => 'Semen',
            'username' => 'Семён',
            'hash' => '287a3e82957a4b8c0ecd8b49bb2828cd',
            'sault' => '69c2c18301ebc517739679814536bbae',
        )
    );

    public function getUser($login) {
        foreach ($this->users as $user) {
            if($login == $user['login']) {
                return $user;
            }
        }
        return null;
    }
}