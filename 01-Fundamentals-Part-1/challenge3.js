const dolphinsScore1 = 96;
const dolphinsScore2 = 108;
const dolphinsScore3 = 89;

const koalasScore1 = 88;
const koalasScore2 = 91;
const koalasScore3 = 110;

const dolphinsAvScore = Math.round((dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3);

const koalasAvScore = Math.round((koalasScore1 + koalasScore2 + koalasScore3) / 3);

if(dolphinsAvScore > koalasAvScore)
{ 
	console.log(`With a score of ${dolphinsAvScore}, the Dolphins win the trophy!`)
}
else if (dolphinsAvScore == koalasAvScore){
	console.log(`The Dolphins & Koalas have tied with a score of ${dolphinsAvScore} to ${koalasAvScore}`)
}
else {
	
	console.log(`With a score of ${koalasAvScore}, the Koalas win the trophy!`)
}