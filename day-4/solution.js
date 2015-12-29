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
