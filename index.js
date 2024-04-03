#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        name: "number_guessed_by_user",
        type: "number",
        message: "guess a number b/w 0-10",
    }
]);
console.log(answers);
if (answers.number_guessed_by_user === randomNumber) {
    console.log("you guessed the right number");
}
else {
    console.log("you guessed the wrong number");
}
