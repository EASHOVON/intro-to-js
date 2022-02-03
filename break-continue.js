var i = 0;
while (i < 20)
{
    console.log(i);
    i++;

    if (i == 5)
    {
        break;
    }

}


var friendsAge = [30, 40, 35, 60, 45, 53, 65, 75, 80, 50];
var sixtyUp = [];
var underSixty = [];

for (var i = 0; i < friendsAge.length; i++)
{
    var ages = friendsAge[i];
    if (ages > 60)
    {
        sixtyUp.push(ages);
    }

    if (ages < 60)
    {
        underSixty.push(ages);
    }
}

console.log(sixtyUp);
console.log(underSixty);

for (var i = 0; i < friendsAge.length; i++)
{
    var friendAge = friendsAge[i];
    if (friendAge > 50)
    {
        continue;
    }
    console.log(friendAge);
}