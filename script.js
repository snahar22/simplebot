let questions = [
    'What is your name?',
    'What is your age?',
    'Where are you from?',
    'What language are you learning at the minute',
    'What is the weather like', 
    'It has been a pleasure talking to you'
];

let counter = 0;

let output = document.querySelector("#outputs");
output.innerHTML = questions[0];

let inputAnswer = document.getElementById("ans");

function response() {
 let inputValue = inputAnswer.value;
 if(inputAnswer.value == ""){
    
 }else {
 	if(counter == 0){
 		 output.innerHTML = `Hello ${inputValue}, it is a pleasure to meet you`
         inputAnswer.value = "";
         ++counter;
         inputAnswer.setAttribute("placeholder", "Loading next question...");
         setTimeout(changeQuestion, 2000);
 	}else if(counter == 1){
 	     output.innerHTML = `It means you are born in ${2020 - inputValue}`;	
 	     inputAnswer.value = "";
         ++counter;
         inputAnswer.setAttribute("placeholder", "Loading next question...");
         setTimeout(changeQuestion, 2000);
 	}else if(counter == 2){
         output.innerHTML = `I read ${inputValue} is a good place to live.`; 
         inputAnswer.value = "";
         ++counter;
         inputAnswer.setAttribute("placeholder", "Loading next question...");
         setTimeout(changeQuestion, 2000);
    }else if(counter == 3){
 	     output.innerHTML = `${inputValue} is a good language to learn.`;	
 	     inputAnswer.value = "";
         ++counter;
         inputAnswer.setAttribute("placeholder", "Loading next question...");
         setTimeout(changeQuestion, 2000);
 	}else if(counter == 4){
 	     output.innerHTML = `${inputValue} is just the perfect weather`;	
 	     inputAnswer.value = "";
         ++counter;
         inputAnswer.setAttribute("placeholder", "That is all for today :)");
         setTimeout(changeQuestion, 2000);
 	}
 }
}

function changeQuestion(){
	output.innerHTML = questions[counter];
	if(counter == 5){
		inputAnswer.style.display == "none";
	}
}

inputAnswer.addEventListener('keypress', (e) => {
	if(e.which == 13){
		response();
	}
})