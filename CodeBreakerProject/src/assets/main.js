let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    
    console.log(attempt.value);

    if (answer.value == '' && attempt.value == ''){
    	attempt.value = 0;
    	setHiddenFields();
    }

    if (!validateInput(input.value)){
    	return;
    }
    attempt.value = Number(attempt.value) + 1;
    
    var inputRes = getResults(input.value);

    if (inputRes){
    	setMessage('You Win! :)');
    	showAnswer(true);
    	showReplay();
    } else if (Number(attempt.value) >= 10 && !inputRes){
    	setMessage('You Lose! :(');
    	showAnswer(false);
    	showReplay();
    } else {
    	setMessage('Incorrect, try again.');
    }
    
}

//implement new functions here

function setHiddenFields() {

	var randomNumberGenerated = Math.floor(Math.random() * 9999).toString();
	attempt.value = 0;

	while(randomNumberGenerated.length < 4){
		randomNumberGenerated = '0' + randomNumberGenerated + '';
	}

	answer.value = randomNumberGenerated;

}

function setMessage(msg){

	document.getElementById('message').innerHTML = msg;

}

function validateInput(input){

	if (input.length == 4){
		return true;
	} else {
		document.getElementById('message').innerHTML = 'Guesses must be exactly 4 characters long.';
	}
	return false;

}

function getResults(inputResult){

	var resultElement = document.getElementById('results');
	var result = answer.value.split('');
	console.log(result);

	var node   = document.createElement('div');
	var span   = document.createElement('span');
	var paragraph = document.createElement('p');

	node.className += 'row';
	span.className += 'col-md-6';
	span.innerHTML = inputResult;

	resultElement.appendChild(node.appendChild(span));

	var correctGuesses = 0;

	for (var ans = 0; ans < inputResult.length; ans++){
		if (inputResult.charAt(ans) == answer.value[ans]){
			var letter = document.createElement('span');
			letter.className += 'glyphicon glyphicon-ok';
			resultElement.appendChild(letter);
			correctGuesses++;
		} else {
			for (var ans2 = 0; ans2 < result.length; ans2++){
				if (inputResult[ans] == result[ans2]){
					var letter = document.createElement('span');
					letter.className += 'glyphicon glyphicon-transfer';
					resultElement.appendChild(letter);
					break;
				}
			}
			if (ans2 == result.length){
				var letter = document.createElement('span');
				letter.className += 'glyphicon glyphicon-remove';
				resultElement.appendChild(letter);
			}
		}
		resultElement.appendChild(paragraph);
	}

	if (correctGuesses == 4){
		return true;
	} else {
		return false;
	}

}

function showAnswer(ans){

	var codeElement = document.getElementById('code');

	code.innerHTML = answer.value;

	if(ans){
		code.className += ' success'
	} else{
		code.className += ' failure';
	}

}

function showReplay(){

	document.getElementById('guessing-div').style.display = 'none';
	document.getElementById('replay-div').style.display   = 'block';

}