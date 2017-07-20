
var randomNumber;
var oneJewel;
var twoJewel;
var threeJewel;
var fourJewel;
var jewelTotal;
var jewelsAddedTogether = oneJewel + twoJewel
+ threeJewel + fourJewel;
var currentCount = 0;
var wins = 0;
var losses = 0;

 // ============== jQuery ======== |
 // ============================== |
$(function(){
	gameStart();


// $(".jewel").on("click", function()a{
// $(".jewel").addClass("animated pulse");
// });

$("#jewel-1").click(function() {

	// currentCount += oneJewel;
	// $("#number-count").html("Number Count: " + currentCount);
	// if (currentCount === randomNumber) {
	// 	alert("You Win!");
	// 	wins += 1;
	// 	$("#htmlWins").html("Wins: " + wins);
	// 	gameStart();
	// }

	// if (currentCount > randomNumber) {
	// alert("You lose! Try again!");
	// losses += 1;
	// $("#htmlLosses").html("Losses: " + losses);
	// gameStart();
	// }
	checkWin(oneJewel);
})

$("#jewel-2").on("click", function() {
	checkWin(twoJewel);
})

$("#jewel-3").on("click", function() {
	checkWin(threeJewel);
})

$("#jewel-4").on("click", function() {
	checkWin(fourJewel);
})

});

// ============ FUNCTIONS ============ |
// =================================== |

// Function for random goal number
function generateRandomTarget() {
	randomNumber = Math.floor(Math.random() * 102) + 19;
	console.log(randomNumber);
	$("#target-number").html("Target Number: " + randomNumber);
}

// Functions to generate random number for jewels = |
// ================================================ |
function randomAllJewels() {
	oneJewel = Math.floor(Math.random() * 12) + 1;
	twoJewel = Math.floor(Math.random() * 12) + 1;
	threeJewel = Math.floor(Math.random() * 12) + 1;
	fourJewel = Math.floor(Math.random() * 12) + 1;
	 
}

function generateRandomJewelNum() {
	return Math.floor(Math.random() * 12) + 1;
}

function gameStart() {
	generateRandomTarget();
	randomAllJewels();
	currentCount = 0;
	$("#number-count").html("Number Count: ");
	$("ul").hide();
	$("#instructions").click(function() {
		$("ul").toggle();
})

}

function checkWin(currentJewel){
	currentCount += currentJewel;
	$("#number-count").html("Number Count: " + currentCount);
	if (currentCount === randomNumber) {
		alert("You Win!");
		wins += 1;
		$("#htmlWins").html("Wins: " + wins);
		gameStart();
	}

	if (currentCount > randomNumber) {
	alert("You lose! Try again!");
	losses += 1;
	$("#htmlLosses").html("Losses: " + losses);
	gameStart();
	}
}










