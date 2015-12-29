/*
--- Day 5: Doesn't He Have Intern-Elves For This? ---

Santa needs help figuring out which strings in his text file are naughty or nice.

A nice string is one with all of the following properties:

It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.
For example:

ugknbfddgicrmopn is nice because it has at least three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings.
aaa is nice because it has at least three vowels and a double letter, even though the letters used by different rules overlap.
jchzalrnumimnmhp is naughty because it has no double letter.
haegwjzuvuyypxyu is naughty because it contains the string xy.
dvszwmarrgswjxmb is naughty because it contains only one vowel.
How many strings are nice?


*/

export default function(string) {
	 let array = string.split('');
	 let isDoubly =false,
	 	 isNaughty=false;

	 let vowelCount = array.reduce((count,char)=>{
	   return ['a','e','i','o','u'].includes(char) ? count+1 : count ;
	 },0);
	  
	 let doubly = array.reduce((prev,char)=>{
	  if (prev === char) isDoubly=true;
	  return char;
	  },'');
	  
	 let naughty = array.reduce((prev,char)=>{
	  if (['ab','cd','pq','xy' ].includes(`${prev}${char}`) ) isNaughty=true  ;
	  return char;
	  },'');
	   
	  return ( (vowelCount > 2) && isDoubly && !isNaughty ) ? 'nice' : 'naughty' 
}

