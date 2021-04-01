var readlineSync = require("readline-sync");



function play(question, answer){
  var userAnswer = readlineSync.question(question);
  console.log();

  userAnswer = userAnswer.charAt(0).toUpperCase()+answer.slice(1);
  

  if(userAnswer === answer){
    score+=1;
    console.log("right answer!");
    console.log("score: ", score);
    console.log("-----------------");
  }else{
    console.log("wrong answer!");
    console.log("score: "+score);
    console.log("-----------------");
  }
}


var userName = readlineSync.question("hey user, what is your name?\n");
console.log("");
console.log("welcome "+userName+" to this game!");
var score=0;

var questionOne = {
  question:"What is the quiz taker's name?\n",
  answer:"Vivek"
}

var questionTwo = {
  question:"Where do he live?\n",
  answer:"Pune"
}
var questionTwo = {
  question:"Where does he live?\n",
  answer:"Pune"
}
var questionThree = {
  question:"How many toes does he have?\n",
  answer:"10"
}
var questionFour = {
  question:"Is his degree relevant?(YES/NO)\n",
  answer:"No"
}

var questionFive = {
  question:"Is Indian education seen changing?(YES/NO)?\n",
  answer:"Yes"
}

questionArray=[questionOne, questionTwo, questionThree, questionFour, questionFive];

for(var i=0; i<questionArray.length; i++){
  play(questionArray[i].question, questionArray[i].answer);
}
console.log("Congrats your score is:"+score);

if(score>=4){
  console.log("looks like you are one of the highScorer's");
}
console.log("You may leave now...");
console.log();


var highScoresNames=[
  {
    sName:"satyam",
    userScore:"2"
  }
];

