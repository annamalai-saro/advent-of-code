/*
--- Day 4 ---

Santa needs help mining some AdventCoins (very similar to bitcoins) to use as gifts for all the economically forward-thinking little girls and boys.

To do this, he needs to find MD5 hashes which, in hexadecimal, start with at least five zeroes. The input to the MD5 hash is some secret key (your puzzle input, given below) followed by a number in decimal. To mine AdventCoins, you must find Santa the lowest positive number (no leading zeroes: 1, 2, 3, ...) that produces such a hash.

For example:

If your secret key is abcdef, the answer is 609043, because the MD5 hash of abcdef609043 starts with five zeroes (000001dbbfa...), and it is the lowest such number to do so.
If your secret key is pqrstuv, the lowest number it combines with to make an MD5 hash starting with five zeroes is 1048970; that is, the MD5 hash of pqrstuv1048970 looks like 000006136ef....

*/

import crypto from 'crypto';

const md5 = (string) => { return crypto.createHash('md5').update(string).digest('hex') };

export default function(string) {
	 
	 let found = false;
	 let i=1;

	 while(!found) {
	 	let temp = md5(string+i);
	 	if( temp.slice(0,5) === '00000' ) {
	 		found = true;
	 	} 	
	 	i++;
	 }

	 return i;
}
