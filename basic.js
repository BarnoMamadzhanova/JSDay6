

var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

let sandwiches1 = JSON.parse(sandwiches);
console.log(sandwiches1);

let fries1 = JSON.parse(fries);

document.getElementById('result').innerHTML = `My favorite sandwich is a ${sandwiches1.sandwich} which has approximately ${sandwiches1.calories} calories, along with it I enjoy eating ${fries1.fries_size} which have about ${fries.calories} calories.`