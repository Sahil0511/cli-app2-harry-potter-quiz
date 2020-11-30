var readlineSync = require("readline-sync");

const chalk = require('chalk');

var score=0;

console.log(chalk.magenta("ARE YOU HARRY POTTER's FAN\n  Well!TRY THIS QUIZ"));

var userName = readlineSync.question("ENTER YOUR NAME:\n ");

console.log("------------")
console.log(chalk.blue('Hello ' + userName.toUpperCase()));
console.log(chalk.red.dim("You have to enter option like 1,2,3 or 4"))
console.log("-------------------------------------------");


function play(question, answer){
var userAnswer = readlineSync.question(question);

  if (userAnswer === answer){
    console.log(chalk.green.bold("You are right!"));
    score = score+1;
  } else{
    console.log(chalk.red.bold("You are wrong!"));
  }
  console.log(chalk.bgYellow("Your score is " +score));
  console.log("-------------------------------------------");
}

var questions = [{
  question: "Q1.How many Weasley siblings are there?\n1. 5\n2. 7\n3. 10\n4. 3\n",
  answer: "2",
}, {
  question: "Q2.Who has given the invisibility cloak to Harry Potter?\n1. Dumbledore\n2. Mad-Eye Moody\n3. Professor Snape\n4. Dobby\n",
  answer: "1",
}, {
  question: "Q3.What is the model of first broom Harry recieved ever?\n1. Cleansweep One\n2. Nimbus 2000\n3. Hoover\n4. Firebolt\n",
  answer: "2",
}, {
  question: "Q4.Where does Dumbledore’s Army meet in ‘Harry Potter and the Order of the Phoenix’?\n1. The Room of Requirement\n2. The Gryffindor Common Room\n3. Hagrid’s House\n4. The Shrieking Shack\n",
  answer: "1",
}, {
  question: "Q5.Which professor teaches flying lessons?\n1. Professor Grubbly-Plank\n2. Sybill Trelawney\n3.  Charity Burbage\n4. Madam Hooch\n",
  answer: "4",
}]

for (var i=0; i<questions.length; i++){
  var currentQue = questions[i];
  play(currentQue.question, currentQue.answer);
}


console.log(chalk.cyan.bold("BRAVO!Your final score: "+score));