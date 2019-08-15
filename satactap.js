function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
  var question10 = document.quiz.question10.value;
	var correct = 0;
  var errorMessage = "";



	if (question1 == "$408.04") {
		correct++;
  }
  else{
    errorMessage=errorMessage.concat("1 ");
  }
	if (question2 == "14") {
		correct++;
  }
  else{
  errorMessage=errorMessage.concat("2 ");
  }
	if (question3 == "7") {
		correct++;
	}
  else{
    errorMessage=errorMessage.concat("3 ");
  }
  if (question4 == "42") {
		correct++;
	}
  else{
    errorMessage=errorMessage.concat("4 ");
  }
  if (question5 == "16") {
    correct++;
  }
  else{
  errorMessage=errorMessage.concat("5 ");
  }
  if (question6 == "5") {
    correct++;
  }
  else{
    errorMessage=errorMessage.concat("6 ");
  }
  if (question7 == "5") {
    correct++;
  }
  else{
    errorMessage=errorMessage.concat("7 ");
  }
  if (question8 == "20") {
    correct++;
  }
  else{
  errorMessage=errorMessage.concat("8 ");
  }
  if (question9 == "-9/4") {
    correct++;
  }
  else{
    errorMessage=errorMessage.concat("9 ");
  }
  if (question10 == "3") {
    correct++;
  }
  else{
    errorMessage=errorMessage.concat("10 ");
  }

	var messages = ["Great job!", "That's just okay", "You really need to do better", "Nice Job you are ready for the Math section on the ACT"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 6) {
		score = 1;
	}

	if (correct == 6) {
		score = 0;
	}
  if (correct > 7 && correct < 11) {
		score = 3;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct.toString() + " correct.";
  if(errorMessage!=""){
      document.getElementById("errors").innerHTML="Check Questions: "+errorMessage;
  }
  document.getElementById("picture").src = pictures[score];
	}


  //Define vars to hold time values
  let seconds = 0;
  let minutes = 0;
  let hours = 0;

  //Define vars to hold "display" value
  let displaySeconds = 0;
  let displayMinutes = 0;
  let displayHours = 0;

  //Define var to hold setInterval() function
  let interval = null;

  //Define var to hold stopwatch status
  let status = "stopped";

  //Stopwatch function (logic to determine when to increment next value, etc.)
  function stopWatch(){

      seconds++;

      //Logic to determine when to increment next value
      if(seconds / 60 === 1){
          seconds = 0;
          minutes++;

          if(minutes / 60 === 1){
              minutes = 0;
              hours++;
          }

      }

      //If seconds/minutes/hours are only one digit, add a leading 0 to the value
      if(seconds < 10){
          displaySeconds = "0" + seconds.toString();
      }
      else{
          displaySeconds = seconds;
      }

      if(minutes < 10){
          displayMinutes = "0" + minutes.toString();
      }
      else{
          displayMinutes = minutes;
      }

      if(hours < 10){
          displayHours = "0" + hours.toString();
      }
      else{
          displayHours = hours;
      }

      //Display updated time values to user
      document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

  }



  function startStop(){

      if(status === "stopped"){

          //Start the stopwatch (by calling the setInterval() function)
          interval = window.setInterval(stopWatch, 1000);
          document.getElementById("startStop").innerHTML = "Stop";
          status = "started";

      }
      else{

          window.clearInterval(interval);
          document.getElementById("startStop").innerHTML = "Start";
          status = "stopped";

      }

  }

  //Function to reset the stopwatch
  function reset(){

      window.clearInterval(interval);
      seconds = 0;
      minutes = 0;
      hours = 0;
      document.getElementById("display").innerHTML = "00:00:00";
      document.getElementById("startStop").innerHTML = "Start";

  }




function check2(){

  var q1 = document.quiz.q1.value;
  var q2 = document.quiz.q2.value;
  var q3 = document.quiz.q3.value;
  var q4 = document.quiz.q4.value;
  var q5 = document.quiz.q5.value;
  var cor = 0;



  	if (q1 == "1") {
  		cor++;
    }
    else {
      cor--
    }

  	if (q2 == "1") {
  		cor++;
    }
    else{
      cor--
    }
  	if (q3 == "1") {
  		cor++;
  	}
    else{
      cor--
    }
    if (q4 == "1") {
  		cor++;
  	}
    else{
      cor--
    }
    if (q5 == "1") {
      cor++;
    }
    else{
      cor--
    }


  	var messages = ["You should try to take the ACT!", "You should try taking the SAT!", "You should try some practice to see which you should take."];
  	var score;


  	if (cor > 1) {
  		score = 0;
  	}

  	if (cor < -1) {
  		score = 1;
  	}
    if (cor == 1 || cor == -1) {
  		score = 2;
  	}

  	document.getElementById("after_submit").style.visibility = "visible";

  	document.getElementById("message").innerHTML = messages[score];
    document.getElementById("picture").src = pictures[score];
  	}


function ex1() {
  var txt;
  if (confirm("When you divide the number of mile by miles per gallon, you get 101. Then you multipy 101 by the cost per gallon(4.04). The anwser is 408.04.")) {
    txt = "It's always good to check your answers!";
  }
  document.getElementById("demo1").innerHTML = txt;
}
function ex2() {
  var txt;
  if (confirm("14 is the correct answer. When you use x = 3 and y = 5 in the given expressions, 3x^2– 2y = 3(3)^2 – 2(5) = 27 – 10 = 17 and 2x^2– 3y = 2(3)^2 – 3(5) = 18 – 15 = 3. Then subtract 3 from 17 to get 14.")) {
    txt = "It's always good to check your answers!";
  }
  document.getElementById("demo2").innerHTML = txt;
}
function ex3() {
  var txt;
  if (confirm("The correct response is E. You can solve this problem by first subtracting 2x from each side of the equation to get 3 = x – 4. Then add 4 to each side, so x = 7.")) {
    txt = "It's always good to check your answers!";
  }
  document.getElementById("demo3").innerHTML = txt;
}
function ex4() {
  var txt;
  if (confirm("42 is the answer because it is the largest number that is a factor of the 3 numbers given.")) {
    txt = "It's always good to check your answers!";
  }
  document.getElementById("demo4").innerHTML = txt;
}
function ex5() {
  var txt;
  if (confirm("")) {
    txt = "It's always good to check your answers!";
  }
  document.getElementById("demo5").innerHTML = txt;
}
function ex6() {
  var txt;
  if (confirm("")) {
    txt = "It's always good to check your answers!";
  }
  document.getElementById("demo6").innerHTML = txt;
}
function ex7() {
  var txt;
  if (confirm("")) {
    txt = "It's always good to check your answers!";
  }
  document.getElementById("demo7").innerHTML = txt;
}
function ex8() {
  var txt;
  if (confirm("")) {
    txt = "It's always good to check your answers!";
  }
  document.getElementById("demo8").innerHTML = txt;
}
function ex9() {
  var txt;
  if (confirm("")) {
    txt = "It's always good to check your answers!";
  }
  document.getElementById("demo9").innerHTML = txt;
}
function ex10() {
  var txt;
  if (confirm("")) {
    txt = "It's always good to check your answers!";
  }
  document.getElementById("demo10").innerHTML = txt;
}

function allaction(){
  startStop();
  check();

}
