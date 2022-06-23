//global variables
var play = " ";
var score = 0;
var flag = 0;
var num = Math.floor(Math.random()*8) + 1;
compWords = new Array();
notAword = new Array();
playWords = new Array();
compWords = words(num);
yourWord = compWords[0];


function words(x)
{
	switch (x)
	{
	case 1:
		var word = new Array("balte","table","hat","tab","belt","lab","eat","tea","ate","tale","bale","let","bet","teal","late","beat");
		break;		
	case 2:
		var word = new Array("atwre","water","wet","wear","tear","war","ret","rate","eat","ate","tea","awe","raw","rat","wart","art","tar");
		break;
	case 3:
		var word = new Array("dclaen","can","cane","and","clan","lane","lean","lend","land","den","dean","dance","lance","clean","deal","ale","dale","candle","clad");
		break;
	case 4:
		var word = new Array("aepinlar","air","airplane","plane","plan","lane","lean","pane","ear","near","nap","nape","lair","pen","pan","ape","leap","ale","peal","nap","rap","par", "pare", "pale", "are", "rail", "ail", "pail", "nail", "air", "pair", "ran", "pin", "pine", "line", "nip", "rip", "ripe", "lip", "earn", "learn", "ire");
		break;
	case 5:
		var word = new Array("redykboa","keyboard","key","board","bored","bore","bark","dark","dork","oar","boar","ark","dare","bare","are","red","rod","road","bode","rode","ode","bread", "read", "bead", "bred", "break", "drey", "day", "boy", "broke", "rake", "bake", "ear", "dear", "bear", "dye", "dyer", "doer", "oak", "boa", "doe", "okay","dab", "bade", "ade", "drake", "bard", "yard", "year", "beak", "beard", "bad", "bed", "bay");
		break;
	case 6:
		var word = new Array("ouhtm","mouth", "moth", "thou", "mot", "mut", "out", "ohm", "hot", "hum", "hut", "oh", "to");
		break;
	case 7:
		var word = new Array("wllpio","pillow","pill", "plow",
 "poll", "will", "pow", "ill", "lip", "lop", "low", "oil", "owl", "wop", "lo");
		break;
	case 8:
		var word = new 
        Array("tamoot","tomato","atom", "matt", "moat", "moot", "mott", "otto", "toom", "toot", "motto", "mot", "oat", "mat", "too", "tot", "am", "at", "to");
		break;
	}
	return word;
}

function boggleStart()
{
	document.getElementById("letters").innerHTML = yourWord;	
}

function bogglePlay()
{
  
	//get player entries
	while(play != "Quit")
	{
		play = prompt("Enter a word or enter Quit when done");
		playWords.push(play);
		if(play != "Quit")
			document.getElementById("entries").innerHTML = playWords.toString();
	}
	
	//check winning score and list bad words
	var complen = compWords.length;
	var playlen = (playWords.length - 1);
	for(var i = 0; i < playlen; i++)
	{
		flag = 0;
		for(var k = 0; k < complen; k++)
		{
			if(playWords[i] == compWords[k])
			{
				score++;
				flag = 1;
			}
		}
		if(flag == 0)
			notAword.push(playWords[i]);
	}
	document.getElementById("result").innerHTML = ("Your score is: " + score +
	".<br><br> These words are not valid: <br>" + notAword.toString());

}
