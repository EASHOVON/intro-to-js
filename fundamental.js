var cousinNames = ["Shantonu", "Adi", "Tousif", "Sourav", "Mithoon", "Sumon", "Shila", "Rubab"];
console.log(cousinNames);
console.log(cousinNames.length);

var findIndex = cousinNames.indexOf("Rubab");
console.log(findIndex);

var souravIndex = cousinNames.indexOf("Sourav");
console.log(souravIndex);

var antrixKaDakuIndex = cousinNames.indexOf("Antrix Ka Daku");
console.log(antrixKaDakuIndex);

var fifthPosition = cousinNames[5];
console.log(fifthPosition);

cousinNames[0] = "Shantonu Hawlader";

cousinNames[4] = "Mithoon Loskor"

console.log(cousinNames);


var friendsAge = [23, 25, 30, 33, 24, 29, 28];
friendsAge.push(22);
friendsAge.push(30);
friendsAge.pop();

var lastItem = friendsAge.pop();

console.log(lastItem);

friendsAge.unshift(45);
friendsAge.unshift(50);

var firstItem = friendsAge.shift();
var secondItem = friendsAge.shift();

console.log(firstItem, secondItem, friendsAge);

var ageSerialled = friendsAge.sort();

console.log(friendsAge);
console.log(ageSerialled);

var reverseAge = ageSerialled.reverse();

console.log(reverseAge);






// Comparision Operator

var friendAge = 25;
var myAge = 26;

console.log(friendAge > myAge);
console.log(friendAge < myAge);
console.log(friendAge == myAge);
console.log(friendAge != myAge);
console.log(Goodjob && bigHome);
console.log(GoodMan || Badman);

var chickenFryPrice = 600;
var potatoFry = 100;
var myBudget = 560;

if (chickenFryPrice > myBudget)
{
    console.log("Taile checken fry khaia kam nai");
} else
{
    console.log("Wow checken fry khabo moja kore");
}
if (chickenFryPrice < myBudget)
{
    console.log("Wow checken fry khabo moja kore");
} else
{
    console.log("Taile checken fry khaia kam nai");
}

if (chickenFryPrice < myBudget && potatoFry < myBudget)
{
    console.log("Yes Ajke chicken fry ar alur fry eksathe khabo");
} else
{
    console.log("Nah ajka kisui khamu na!");
}

if (chickenFryPrice < myBudget || potatoFry < myBudget)
{
    console.log("Yes Jeta dame pushay seta khawa jabe");
} else
{
    console.log("Nah ajka kisui khamu na!");
}

var chelerChakri = false;
var chelerBari = true;
var chelerChoritroValo = false;

if (chelerChakri == true && chelerBari == true || chelerChoritroValo == true)
{
    console.log("Cheler Sathe amar meyer biye dibo, Cheler choritro kono matter kore na");
} else
{
    console.log("Cheler bari gari important, ta na thakle cheler loge meye re biya dimu na");
}


// Practice from habluder jonno programming
// 6.1
var fastAidBox = ["Burns", "Cuts", "Abrasions", "Stings", "Splinters", "Sprains", "Strains"]

// 6.2
var family = ["Shantonu", "Adi", "Tousif", "Sourav", "Mithoon"];

// 6.3
console.log(family.length);
console.log(family[2]);

// 6.4
family.push("Koly");

// 



