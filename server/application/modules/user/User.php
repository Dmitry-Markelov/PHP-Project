<?php
class User {
    private $db;
    function __construct($db) {
        $this->db = $db;
    }
    function login($login, $hash) {
        $user = $this->db->getUserByLogin($login);
        if ($user) {
            if ($user->password == $hash) {
                $token = $this->generateToken();
                $this->db->updateToken($login, $token);
                return [
                    'name' => $user->username,
                    'token' => $token,
                    'uuid' => $user->id_user,
                ];
            }
        }
        return ['error' => 1002];
    }
    function autoLogin($token, $uuid) {
        $user = $this->db->getUserById($uuid);
        if ($user) {
            if ($user->token == $token) {
                $newToken = $this->generateToken();
                $this->db->updateToken($user->login, $newToken);
                return [
                    'name' => $user->username,
                    'newToken' => $newToken,
                    'uuid' => $user->id_user,
                ];
            }
            return ['error'=> 1003];
        }
        return ['error'=> 0];
    }
    function register($login, $hash, $userName) {
        $user = $this->db->getUserByLogin($login);
        if (!$user) {
            $uuid = uniqid();
            $token = $this->generateToken();
            $this->db->setUserByLogin($login, $hash, $userName, $uuid, $token);
            $this->db->addNewPlayerById($uuid, $userName);
            return [
                'name' => $userName,
                'token' => $token,
                'uuid' => $uuid,
            ];
        }
        return ['error'=> 1004];
    }
    function updateScore($token, $uuid, $score) {
        $user = $this->db->getUserById($uuid);
        if($token == $user->token) {
            $myScore = $this->db->getMyScoreById($uuid);
            if($score >= $myScore->score) {
                $result = $this->db->updateScoreById($uuid, $score); //добавить проверку на честный счёт
                if ($result) {
                    return true;
                }
            } else {
                return ['error'=> 0]; //обработать ошибку
            }
        }
        return ['error' => 0]; //обработать ошибку
    }
    function getScene($token, $uuid) {
        $result = ['myScore' => null, 'players' => null];
        $user = $this->db->getUserById($uuid);
        if($token == $user->token) {
            $myScore = $this->db->getMyScoreById($uuid);
            if ($myScore) {
                $result['myScore'] = $myScore->score;
            }
            $players = $this->db->GetTopPlayers();
            if ($players) {
                $result['players'] = $players;
            }
            return $result;
        }
        return ['error' => 0]; //обработать ошибку
    }
    function getRndSalt($login) {
        $salt = bin2hex(random_bytes(16));
        $this->db->setSaltDB($salt);
        return array(true, $salt);
    }
    function generateToken() {
        return md5(microtime() . 'salt' . rand());
    }
}