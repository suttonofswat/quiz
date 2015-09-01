var prompt = require('prompt-sync').prompt;

var numCorrectAnswers = 0;

console.log('what is your name?');
var name = prompt();

console.log('Hi '+name+' here is your first question...');
var start = +new Date();

console.log('do block elements stack? yes or no');
var answer1=prompt().toLowerCase();
var correct = 'yes';

if(answer1 === correct){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite the answer was ' + correct);
}

console.log('which has a higher specificity ID or class?');
var answer2=prompt().toUpperCase();
correct= 'ID';
if(answer2 === correct){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite the answer was ' + correct);
}

console.log('What is the default `display` value for span elements?');
var answer3=prompt().toLowerCase();
correct = 'inline';
if(answer3 === correct){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite the answer was ' + correct);
}

console.log('Should media queries be written in min or max width?');
var answer4=prompt().toLowerCase();
correct = 'min';
if(answer4 === correct){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite the answer was ' + correct);
}


console.log('What symbol do Sass variables start with?');
var answer5=prompt().toLowerCase();
correct = '$';
if(answer5 === correct){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite the answer was ' + correct);
}

console.log('What is the programming name of the exclamation point?');
var answer6=prompt().toLowerCase();
correct = 'bang';
if(answer6 === correct){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite the answer was ' + correct);
}

console.log('If font size is 16, what will 2em be?');
var answer7=prompt().toLowerCase();
correct = '32';
if(answer7 === correct){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite the answer was ' + correct);
}

console.log('In HTML, what section do you put the rel link?');
var answer8=prompt().toLowerCase();
correct = 'head';
if(answer8 === correct){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite the answer was ' + correct);
}


console.log('What is an example of boolean: true, 15 or duck');
var answer9=prompt().toLowerCase();
correct = 'true';
if(answer9 === correct){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite the answer was ' + correct);
}

console.log('What does || equal to in js?');
var answer10=prompt().toUpperCase();
correct = 'OR';
if(answer10 === correct){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite the answer was ' + correct);
}

console.log('Will: true && true evaluate to true or false?');
var answer11=prompt().toLowerCase();
correct = 'true';
if(answer11 === correct){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite the answer was ' + correct);
}

console.log('Will: true || false evaluate to true or false?');
var answer12=prompt().toLowerCase();
correct = 'true';
if(answer12 === correct){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite the answer was ' + correct);
}

console.log('Will an inline-block stack? yes or no');
var answer13=prompt().toLowerCase();
correct = 'no';
if(answer13 === correct){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite the answer was ' + correct);
}

console.log('What symbol do you add in front of a JS expression to make it not true?');
var answer14=prompt().toLowerCase();
correct = '!';
if(answer14 === correct){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite the answer was ' + correct);
}

console.log('What display value does a div have?');
var answer15=prompt().toLowerCase();
correct = 'block';
if(answer15 === correct){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite the answer was ' + correct);
}
var end = +new Date();
var diff = end - start;
console.log('it took you ' +Math.floor(diff/1000)+' seconds');
console.log('you got ' +numCorrectAnswers+ ' correct');
console.log('thats a score of ' +numCorrectAnswers/15 * 100 + ' %');