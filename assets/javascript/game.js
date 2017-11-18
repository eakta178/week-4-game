    
	var compGuess;
	var tally=0;
	var win = 0;
	var loss = 0;


    var link = $('#getNumber'); 
    link.on("click",function(){
    	initiateGame();
    })  
    
    function initiateGame() {

        var minNumber = 1; // le minimum
        var maxNumber = 120; // le maximum
        var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // la fonction magique
        $('#guess').html(randomnumber);
        console.log("get number: " + randomnumber);
        compGuess=randomnumber;

        $(".crystal").each(function(){
        	$(this).attr("data-value",getCrystalNumber());
        	$(this).removeClass("disabled");
        })

        tally=0;
     	$('#result').html(tally);
        return false;
    }




    function getCrystalNumber() {
        var minNum = 1; // le minimum
        var maxNum = 12; // le maximum
        var randomnumber = Math.floor(Math.random() * (maxNum + 1) + minNum); // la fonction magique
        // $('#result').html(randomnumber);
        return randomnumber;
    }
    var crystalOne = $('#crystal1').on("click",function(){
    	console.log("test");

    }); 
    // crystalOne.onclick = getCrystalNumber();

        

$('.crystal').on("click",function(){
	tally += parseInt($(this).attr("data-value"));
	$('#result').html(tally);
	if(tally === compGuess)
	{
		$('#win').html("<h1>You Win!</h1>");
		win++;
		$('#wincount').html("WINS: " + win)
		gameOver();
	}
	else if (tally > compGuess) {
		$('#win').html("<h1>You Lose!</h1>");
		loss++;
		$('#losscount').html("LOSS: " + loss)
		gameOver();

	}
})

//Add a gameover function to disable after win or lose

function gameOver() {
	
	 $(".crystal").each(function(){
        	
        	$(this).attr("data-value",0);
        	$(this).addClass("disabled");

        })
	 
}