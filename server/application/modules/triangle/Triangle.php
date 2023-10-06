<?php
//http://php-project/server/?method=triangle&Ax=-2&Ay=1&Az=2&Bx=3&By=-3&Bz=5&Cx=1&Cy=0&Cz=9
class Triangle{
    function __construct() {
        
    }
    public function triangle($A, $B, $C) {

        print_r($A);
        print_r($B);
        print_r($C);

        return array(
            self::square($A, $B, $C),
            self::angle($A, $B, $C),
            self::sidesLength($A, $B, $C)
        );
    }
    function square($A, $B, $C){ //площадь
        $S = 0;
        $AB = self::vector($A, $B);
        $AC = self::vector($A, $C);
        $vProd = self::vProd($AB, $AC);
        $S = 1/2*self::vModul($vProd);
        
        return round($S, 1);
    }
    function angle($A, $B, $C){ //углы
        $angles = array();
    
        $vAB = self::vector($A, $B);
        $vAC = self::vector($A, $C);
    
        $vBA = self::vector($B, $A);
        $vBC = self::vector($B, $C);
    
        $vCB = self::vector($C, $B);
        $vCA = self::vector($C, $A);
    
        $angles['AB&AC'] = round(acos(self::sProd($vAB, $vAC)/(self::vModul($vAB)*self::vModul($vAC)))*180/pi(), 1);
        $angles['BA&BC'] = round(acos(self::sProd($vBA, $vBC)/(self::vModul($vBA)*self::vModul($vBC)))*180/pi(), 1);
        $angles['CB&CA'] = round(acos(self::sProd($vCB, $vCA)/(self::vModul($vCB)*self::vModul($vCA)))*180/pi(), 1);
        return $angles;
    }
    function sidesLength($A, $B, $C){ //длины сторон
        $sidesL = Array();
    
        $sidesL['AB'] = round(self::vModul((self::vector($A, $B))), 1);
        $sidesL['BC'] = round(self::vModul((self::vector($B, $C))), 1);
        $sidesL['CA'] = round(self::vModul((self::vector($C, $A))), 1);
        return $sidesL;
    }
    function sProd($A, $B){ //скалярное произведение
        return $A['x']*$B['x']+$A['y']*$B['y']+$A['z']*$B['z'];
    }
    function vector($A, $B){ //вектор
        $AB = Array();
    
        $AB['x'] = $B['x'] - $A['x'];
        $AB['y'] = $B['y'] - $A['y'];
        $AB['z'] = $B['z'] - $A['z'];
    
        return $AB;
    }
    function vProd($A, $B){ //векторное произведение
        $vProd = Array();
    
        $vProd['x'] = ($A['y']*$B['z'] - $A['z']*$B['y']);
        $vProd['y'] = -($A['x']*$B['z'] - $A['z']*$B['x']);
        $vProd['z'] = ($A['x']*$B['y'] - $A['y']*$B['x']);
    
        return $vProd;
    }
    function vModul($V){ //модуль вектора
        return sqrt(($V['x'])*($V['x'])+($V['y'])*($V['y'])+($V['z'])*($V['z']));
    }
    
}