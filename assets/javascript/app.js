//Create a timer that starts at 30 seconds and goes down to zero for each question. 
//Show the question and answers. 
/*If the player guesses the correct answer, move to the next question and restart the 
timer at 30 seconds. */
/*If the player guesses the wrong answer, show nope, and then the correct answer 
and move to the next question.*/ 
/* At the end the game shows you the amount of questions you got correct and incorrect.*/
/* Create a start over button to restart the game. BUT DON"T RELOAD THE PAGE*/

//Questions for game listed in an array. 
var questions = {
	"gameQuestions":
	[
		{
			question: "Which team won the first Super Bowl?",
			answers: ['Green Bay Packers', 'New York Giants', 'Dallas Cowboys', 'Kansas City Chiefs'],
			correctAnswer: 0  //Question 1
		},
		{
			question: "Which quarterback had the highest passer rating in the 1994 season?",
			answers: ['Brett Favre', 'Steve Young', 'Dan Marino', 'John Elway'],
			correctAnswer: 1 //Question 2
		},
		{
			question: "When did the Boston Patriots change their name to the New England Patriots?",
			answers: ['1965', '1980', '1971', '1983'],
			correctAnswer: 2 //Question 3
		},
		{
			question: "Who was the first player to rush for more than 2,000 yards in a season?",
			answers: ['Larry Csonka', 'O.J. Simpson', 'Walt Garrison', 'Jim Brown'],
			correctAnswer: 1 //Question 4 
		},
		{
			question: "Who became the NFL's all-time touchdown leader in 1994?",
			answers: ['Marcus Allen', 'Emmitt Smith', 'Jerry Rice', 'Cris Carter'],
			correctAnswer: 2 //Question 5
		},
		{
			question: "Who was the first NFL head coach to make four Super Bowl appearances?",
			answers: ['Tom Landry', 'Vince Lombardi', 'Dick Vermeil', 'Don Shula'],
			correctAnswer: 3 //Question 6
		},
		{
			question: "In What year was a touchdown increased from five points to six?",
			answers: ['1912', '1915', '1920', '1921'],
			correctAnswer: 0 //Question 7
		},
		{
			question: "When did the NFL allow fans to join players and coaches in selecting the AFC & NFC Pro Bowl teams?",
			answers: ['1990', '1985', '1979', '1993'],
			correctAnswer: 3 //Question 8 
		},
		{
			question: "What quarterback threw for the most passing yards in the 2008 season?",
			answers: ['Phillip Rivers', 'Kurt Warner', 'Drew Brees', 'Tony Homo'],
			correctAnswer: 2 //Question 9
		},
		{
			question: "Who is the only quarterback to throw for over 400 yards in the Super Bowl?",
			answers: ['Kurt Warner', 'Joe Montana', 'Steve Young', 'Troy Aikman'],
			correctAnswer: 0 //Question 10
		},
		{
			question: "Who is the only player in NFL history to win three Super Bowl MVP awards?",
			answers: ['Walter Payton', 'Joe Montana', 'Emmitt Smith', 'Steven Young'],
			correctAnswer: 1 //Question 11
		},
		{
			question: "Who led the league in rushing yards in the 2008 season?",
			answers: ['Clinton Portis', 'Thomas Jones', 'Michael Turner', 'Adrian Peterson'],
			correctAnswer: 3 //Question 12
		},
		{
			question: "The NFL was founded in what City?",
			answers: ['Canton, Ohio', 'Detroit, Michigan', 'Green Bay, Wisconsin', 'New York City, New York'],
			correctAnswer: 0 //Question 13
		},
		{
			question: "Who resigned as the NFL commissioner for 29 years?",
			answers: ['Al Davis', 'Pete Rozelle', 'Avery Brundage', 'George Halas'],
			correctAnswer: 1 //Question 14
		},
		{
			question: "Who are the Cleveland Browns named after?",
			answers: ['Paul Brown', 'Joe Brown', 'Jim Brown', 'Joe Louis'],
			correctAnswer: 3 //Question 15
		},
		{
			question: "What legendary NFL coach once said, 'Winning isn't everything, it's the only thing'?",
			answers: ['Don Shula', 'Vince Lombardi', 'George Halas', 'Paul Brown'],
			correctAnswer: 1 //Question 16
		},
		{
			question: "What former NFL head coach is known for a best selling series of football video games?",
			answers: ['Vince Lombardi', 'John Madden', 'Don Shula', 'Pat Summerall'],
			correctAnswer: 1 //Question 17
		} 
	]
}

function startGame() {

	$(".losserImage").hide();
	$("#endResults").hide();
	$(".trophy").hide();
	correctChoice = 0;
	incorrectChoice = 0;
	questionNumber = 0;
	questionUnanswered = 0;
	
	var counter;
	var timer = {
		time: 15,
		reset: function() {
			timer.time = 15;
		},
		stop: function() {
			clearInterval(counter);
		},
		start: function() {
			counter = setInterval(timer.count, 1000);
		},
		count: function() {
			timer.time--;

			$("#timer").css("color","#fff");
			$("#timerColor").css("color","#fff");
			$("#timer").html('Time Remaining: <span id="timerColor">' + timer.time+'</span>');
			
			if(timer.time <= 5) {
				$("#timerColor").css("color","#d72027");
			} else {
				$("#timerColor").css("color","#fff");
			}
			if (timer.time == 0) {
				answerPage(5, false);
			}
		}
	}
	
	$("#timer").css({"font-size":"36px","text-align":"left"});
	$("#startButton").on("click",function() {
		$(".gameLogo").hide();
		$("#startButton").hide();
		$("#title").hide();
		newQuestion();
	});

	function newQuestion() {
		timer.reset();

		$("#timer").html("Time Remaining: " + timer.time);
		$("#showAnswer").empty();
		$("#endResult").empty();
		$("#question").html('<span id="questionFontWeight"> Question </span>' + 
		(questionNumber  +  1 ) + ":<br>" + questions.gameQuestions[questionNumber].question);
		
		for (i = 0; i < 4 ;i++) {
			$("#choices").append("<button class='answerChoice' data-val='"+i+"'>" + 
		questions.gameQuestions[questionNumber].answers[i] + "</button><br>");
		}

		$("#timer").css("margin-top","20px");

		$("#question").css("font-weight","bold");
		$("#question").css("color","#fff");
		$("#question").css("margin-top","60px");
		$("#question").css("margin-bottom","20px");

		$(".answerChoice").css("backgroundColor","#d72027");
		$(".answerChoice").css("margin","5px"); 
		$(".answerChoice").css("border","none");
		$(".answerChoice").css("color","#fff");
		$(".answerChoice").css("padding","10px");
		$(".answerChoice").css("borderRadius","5px");
		$(".answerChoice").css("width","200px");
		$(".answerChoice").hover(function(){
			$(this).css({"backgroundColor":"#fff","color":"#132748"});
		}, function() {
			$(this).css({"backgroundColor":"#d72027","color":"#fff"});
		});

		$("#showAnswer").css({"font-size":"18px","font-weight":"bold"});
		$("#showAnswer").css("text-align","center");


		timer.start();

		$(".answerChoice").on("click", function() {
			var answerIndex = $(this).data('val');
			answerPage(answerIndex, true);
		});
	}

	function answerPage(answerIndex, answered) {
		$("#question").empty();
		$("#choices").empty();
		timer.stop();
		if (answerIndex == questions.gameQuestions[questionNumber].correctAnswer) {
			$("#timer").css("text-align","center");
			$("#showAnswer").html("Correct!");
			$("#showAnswer").css("text-align","center");
			$("#showAnswer").css({"color":"#fff","font-size":"24px"});
			$(".trophy").show(3).delay(3000).hide(3);
			correctChoice++;
		}
		else if (answered == false) {
			$("#showAnswer").html("Time's Up!<br>The correct answer was: " + 
				questions.gameQuestions[questionNumber].answers[(questions.gameQuestions[questionNumber].correctAnswer)]);
			$("#showAnswer").css("text-align","center");
			$("#timer").css("text-align","center");
			$("#showAnswer").css({"color":"#d72027","font-size":"24px"});
			$(".losserImage").show(3).delay(3000).hide(3);
			questionUnanswered++;
		}
		else {
			$("#showAnswer").html("Wrong!<br>The correct answer was: " + 
				questions.gameQuestions[questionNumber].answers[(questions.gameQuestions[questionNumber].correctAnswer)]);
			$("showAnswer").css("text-align","center");
			$("#timer").css("text-align","center");
			$("#showAnswer").css({"color":"#d72027","font-size":"24px"});
			$(".losserImage").show(3).delay(3000).hide(3);
			incorrectChoice++;
		}
		questionNumber++;
		if (questionNumber < 1) {
			var nextQuestion = setTimeout(newQuestion, 3000); 
		}
		else {
			var nextQuestion = setTimeout(resultsPage, 3000);
		}
	}

	// End of the Game Results/Score.

	function resultsPage() {
		$("#showAnswer").empty();
		$("#endResults").empty();
		$("#final-stats").css({"color":"#fff","font-size":"24px","text-align":"center"});
		//$("#endResults").html("NFL KNOWLEDGE:");
		$("#endResults").css({"font-weight":"bold","margin-bottom":"20px"});
		$("#final-result").css({"font-size":"30px","color":"#fff"});
		
		$("#final-stats").html("Number of Trophy Points: " + correctChoice + "<br>Incorrect answers: " + incorrectChoice + 
			"<br>Unanswered questions: " + questionUnanswered);
		$("#play-again").html("<button id='newGame' class='btn btn-custom2'>Play Again</button>");
		//$("#newGame").css("text-align","center");
		$("#play-again").css("margin-top","20px");

		$("#newGame").on("click", function() {
			$("#final-result").empty();
			$("#final-stats").empty();
			$("#play-again").empty();
			correctChoice = 0;
			incorrectChoice = 0;
			questionUnanswered = 0;
			questionNumber = 0;
			newQuestion();
		});
	}
}

startGame();






