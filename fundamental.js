var cousinNames = ["Shantonu", "Adi", "Tousif", "Sourav", "Mithoon", "Sumon", "Shila", "Rubab"];
// console.log(cousinNames);
// console.log(cousinNames.length);

// var findIndex = cousinNames.indexOf("Rubab");
// console.log(findIndex);

// var souravIndex = cousinNames.indexOf("Sourav");
// console.log(souravIndex);

// var antrixKaDakuIndex = cousinNames.indexOf("Antrix Ka Daku");
// console.log(antrixKaDakuIndex);

var fifthPosition = cousinNames[5];
console.log(fifthPosition);

cousinNames[0] = "Shantonu Hawlader";

cousinNames[4] = "Mithoon Loskor"

// console.log(cousinNames);


var friendsAge = [23, 25, 30, 33, 23, 29, 28];
friendsAge.push(22);
friendsAge.push(30);
friendsAge.pop();

var lastItem = friendsAge.pop();

// console.log(lastItem);

friendsAge.unshift(45);
friendsAge.unshift(50);

var firstItem = friendsAge.shift();
var secondItem = friendsAge.shift();

console.log(firstItem, secondItem, friendsAge);

// console.log(friendsAge);
