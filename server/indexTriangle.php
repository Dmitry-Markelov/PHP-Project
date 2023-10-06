<?php
$A = Array();
$B = Array();
$C = Array();
$Angles = Array();
$sidesL = Array();

$A['x'] = floatval($_GET["Ax"]);
$A['y'] = floatval($_GET["Ay"]);
$A['z'] = floatval($_GET["Az"]);
$B['x'] = floatval($_GET["Bx"]);
$B['y'] = floatval($_GET["By"]);
$B['z'] = floatval($_GET["Bz"]);
$C['x'] = floatval($_GET["Cx"]);
$C['y'] = floatval($_GET["Cy"]);
$C['z'] = floatval($_GET["Cz"]);

print_r($A);
echo "<br>";
print_r($B);
echo "<br>";
print_r($C);
echo "<br>";
print_r('Площадь треугольника: ');
square($A, $B, $C);
echo "<br>";
print_r("Углы: ");
$Angles = angle($A, $B, $C);
print_r($Angles);
echo "<br>";
print_r("Длины сторон: ");
$sidesL = sidesLength($A, $B, $C);
print_r($sidesL);

function square($A, $B, $C){ //площадь
    $S = 0;
    $AB = vector($A, $B);
    $AC = vector($A, $C);
    $vProd = vProd($AB, $AC);
    $S = 1/2*vModul($vProd);
    
    return print_r($S);
}
function angle($A, $B, $C){ //углы
    $angles = array();

    $vAB = vector($A, $B);
    $vAC = vector($A, $C);

    $vBA = vector($B, $A);
    $vBC = vector($B, $C);

    $vCB = vector($C, $B);
    $vCA = vector($C, $A);

    $angles['AB&AC'] = acos(sProd($vAB, $vAC)/(vModul($vAB)*vModul($vAC)))*180/pi();
    $angles['BA&BC'] = acos(sProd($vBA, $vBC)/(vModul($vBA)*vModul($vBC)))*180/pi();
    $angles['CB&CA'] = acos(sProd($vCB, $vCA)/(vModul($vCB)*vModul($vCA)))*180/pi();
    return $angles;
}
function sidesLength($A, $B, $C){ //длины сторон
    $sidesL = Array();

    $sidesL['AB'] = vModul((vector($A, $B)));
    $sidesL['BC'] = vModul((vector($B, $C)));
    $sidesL['CA'] = vModul((vector($C, $A)));
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

//http://trianglehomework/?Ax=-2&Ay=1&Az=2&Bx=3&By=-3&Bz=4&Cx=1&Cy=0&Cz=9
?>