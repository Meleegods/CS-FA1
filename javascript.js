
// number 1 
const name = prompt("What is your name?");
const heightCm = prompt("What is your height in cm?");
const weightKg = prompt("What is your weight in kg?");

const heightInches = heightCm / 2.54;
const heightFeet = Math.floor(heightInches / 12);
const remainingInches = (heightInches % 12).toFixed(1);
const weightLbs = (weightKg * 2.20462).toFixed(1);

const message = `Name: ${name} \n
Height: ${heightFeet} feet and ${remainingInches} inches.\n 
Weight: ${weightLbs} lbs.`;

alert(message);

// number 2 
const firstName = prompt("What is your first name?");
const lastName = prompt("What is your last name?");
const birthYear = prompt("What is your birth year?");


const nowYear = new Date().getFullYear();
const age = nowYear - birthYear;

const outputElement = document.getElementById("output");
outputElement.innerHTML = `Hello ${firstName} ${lastName}, how does it feel to be ${age} years old?`;

//number 3 
const agree = confirm("Do you agree to share your personal information?");

if (agree) {
    const name = prompt("What is your name?");
const heightCm = prompt("What is your height in cm?");
const weightKg = prompt("What is your weight in kg?");

const heightInches = heightCm / 2.54;
const heightFeet = Math.floor(heightInches / 12);
const remainingInches = (heightInches % 12).toFixed(1);
const weightLbs = (weightKg * 2.20462).toFixed(1);

const message = `Name: ${name} \n
Height: ${heightFeet} feet and ${remainingInches} inches.\n 
Weight: ${weightLbs} lbs.`;

alert(message);

} else {
  console.log("User does not wish to share his/her information.");
}