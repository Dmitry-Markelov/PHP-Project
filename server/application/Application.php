<?php
require_once('application/modules/chat/Chat.php');
require_once('application/modules/db/DB.php');
require_once('application/modules/game/Game.php');
require_once('application/modules/user/User.php');
require_once('application/modules/triangle/Triangle.php');

class Application {
    private $user;
    private $triangle;
    function __construct() {
        $db = new DB();
        $this->user = new User($db);
        // $this->triangle = new Triangle();
        // $this -> chat = new Chat($db);
        // $this -> game = new Game($db);
    }
    function login ($params) {
        $login = $params['login'];
        $hash = $params['hash'];

        if ($login && $hash) {
            return $this->user->login($login, $hash);
        }
        return array(false, 1001);
    }
    function register ($params) {
        $login = $params['login'];
        $password = $params['password'];
        $userName = $params['username'];
        if ($login && $password && $userName) {
            return $this->user->register($login, $password, $userName);
        }
        return array(false, 1001);
    }
    function getRndSalt ($params) {
        $login = $params['login'];
        if ($login) {
            return $this->user->getRndSalt($login);
        }
        return array(false, 1001);
    }
    function triangle ($params) {
        $A['x'] = $params['Ax'];
        $A['y'] = $params['Ay'];
        $A['z'] = $params['Az'];
        $B['x'] = $params['Bx'];
        $B['y'] = $params['By'];
        $B['z'] = $params['Bz'];
        $C['x'] = $params['Cx'];
        $C['y'] = $params['Cy'];
        $C['z'] = $params['Cz'];
        if (isset($A['x']) && isset($A['y']) && isset($A['z']) &&
            isset($B['x']) && isset($B['y']) && isset($B['z']) &&
            isset($C['x']) && isset($C['y']) && isset($C['z'])) {
            return $this->triangle->triangle($A, $B, $C);
        }
        return array(false, 228);
    }
}