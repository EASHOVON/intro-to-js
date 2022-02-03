function joogKor(numOne, numTwo)
{
    var joogFol = numOne + numTwo;
    return joogFol;
}

function duiGunKor(shonkha)
{
    var gunFol = shonkha * 2;
    return gunFol;
}

function dharDey(dharAmount)
{
    var friendErTaka = dharAmount;
    return friendErTaka;
}

var chalerDam = 60;
var dalerDam = 80;

var total = joogKor(chalerDam, dalerDam);

var dharLagbe = duiGunKor(total);

var takaPaisi = dharDey(dharLagbe);
console.log(takaPaisi);

function takarDorkar(first, second)
{
    var total = joogKor(first, second);
    var dharLagbe = duiGunKor(total);
    var takaPaisi = dharDey(dharLagbe);
    return takaPaisi;
}

console.log(takarDorkar(50, 50));


// Second to hours convertor
function secondToHours(second)
{
    var minutes = second / 60;
    var hours = minutes / 60;
    return hours;
}

console.log(secondToHours(7200));

// Feet to Yeards convertor

function kotogoj(feet)
{
    var goj = feet / 3;
    return goj;
}

console.log(kotogoj(6));

// Yeards to Miles

function kotoMile(goj)
{
    var miles = goj / 1760;
    return miles;
}

console.log(kotoMile(1760 * 2));

// Feet to Mile
function feetToMile(feet)
{
    var goj = kotogoj(feet);
    var milse = kotoMile(goj);
    return milse;
}

var everestHight = feetToMile(29029);
console.log(everestHight);

