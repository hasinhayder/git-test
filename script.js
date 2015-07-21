var numbers = [1,2,3,4,5,6];


function sum (n){
	var summation = 0; 
	
	//do the actual sum
	summation = n.reduce(function (o,n) { return o + n ; });
	return summation;
}

console.log( sum ( numbers ) );

//Added another line by user 1
//Added By User 2

//comment by user 2
