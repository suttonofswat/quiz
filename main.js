var prompt = require('prompt-sync').prompt;

var numCorrectAnswers = 0;

console.log('what is your name?');
var name = prompt();

console.log('Hi '+name+' here is your first question...');

console.log('do block elements stack? yes or no');
var answer1=prompt();

if(answer1 === 'yes'){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite');
}

console.log('which has a higher specificity ID or class?');
var answer2=prompt();

if(answer2 === 'ID'){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite');
}

console.log('What is the default `display` value for span elements?');
var answer3=prompt();

if(answer3 === 'inline'){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite');
}

console.log('Should media queries be written in min or max width?');
var answer4=prompt();

if(answer4 === 'min'){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite');
}


console.log('What symbol do Sass variables start with?');
var answer5=prompt();

if(answer5 === '$'){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite');
}

console.log('What is the programming name of the explination mark?');
var answer6=prompt();

if(answer6 === 'bang'){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite');
}

console.log('If font size is 16, what will 2em be?');
var answer7=prompt();

if(answer7 === '32'){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite');
}

console.log('In HTML, what section do you put the rel link?');
var answer8=prompt();

if(answer8 === 'head'){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite');
}


console.log('What is an example of boolean: true, 15 or duck');
var answer9=prompt();

if(answer9 === 'true'){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite');
}

console.log('What does || equal to in js?');
var answer10=prompt();

if(answer10 === 'or'){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite');
}

console.log('Will: true && true evaluate to true or false?');
var answer11=prompt();

if(answer11 === 'true'){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite');
}

console.log('Will: true || false evaluate to true or false?');
var answer12=prompt();

if(answer12 === 'true'){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite');
}

console.log('Will an inline-block stack? yes or no');
var answer13=prompt();

if(answer13 === 'no'){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite');
}

console.log('What symbol do you add in front of a JS expression to make it not true?');
var answer14=prompt();

if(answer14 === '!'){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite');
}

console.log('What display value does a div have?');
var answer15=prompt();

if(answer15 === 'block'){
	numCorrectAnswers++;
	console.log('you are correct!');
} else{
	console.log('hm... not quite');
}

console.log('congratulations! you got ' +numCorrectAnswers+ ' correct!');
console.log(numCorrectAnswers/15 * 100 + ' %');