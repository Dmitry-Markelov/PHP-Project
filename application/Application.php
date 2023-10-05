<?php
require_once('application/modules/Chat.php');
require_once('application/modules/DB.php');
require_once('application/modules/Game.php');
require_once('application/modules/User.php');

class Application {
    function __construct() {
        $db = new DB();
        $this -> user = new User($db);
        $this -> chat = new Chat($db);
        $this -> game = new Game($db);
    }
    function login ($params) {
        $login = $params['login'];
        $password = $params['password'];
        if ($login & $password) {
            return $this -> user -> login($login, $password);
        }
        return array(false, 'ERROR 1001');
    }
}