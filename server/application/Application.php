<?php
require_once('application/modules/chat/Chat.php');
require_once('application/modules/db/DB.php');
require_once('application/modules/game/Game.php');
require_once('application/modules/user/User.php');

class Application {
    function __construct() {
        $db = new DB();
        $this->user = new User($db);
        // $this -> chat = new Chat($db);
        // $this -> game = new Game($db);
    }
    function login ($params) {
        $login = $params['login'];
        $hash = $params['hash'];
        $rnd = $params['rnd'];
        if ($login && $hash && $rnd) {
            return $this->user->login($login, $hash, $rnd);
        }
        return array(false, 1001);
    }
}