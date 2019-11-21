/*Question 1: Clean the room function: 
given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 

make a function that organizes these into individual array that is ordered. 

For example answer(ArrayFromAbove) should return: 
[[1,1,1,1],[2,2,2], [4],[5],[10],[20,20], [391], [392], [591]]. 
*/


let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

	// sorting ascending order for easier loop operation
	// should return [1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591]
let sortedArray = array.sort(function(a, b){return a-b});  


	// create 2 new arrays, one big one small. Small is a temporary holder for item of same value that will be pushed into Big.
let arrayBig = [];
let arraySmall = [];

	// looping over each item in sortedArray
let arrangement = (arr) => {
	for (i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i+1]) {
			arraySmall.push(arr[i+1]); // send array[i+1] to arraySmall 
		} else {
			//when it is the last item of the same value
			arraySmall.push(arr[i]);
			//send array[i] to arraySmall since when we run the IF, only i+1 is sent
			//if an item is unique, it gets sent to to arraySmall too
			arrayBig.push(arraySmall);
			//push arraySmall to arrayBig - so that it becomes nested array
			arraySmall = [];
			//reset value of arraySmall so it can start empty when loop to next unidentical number
		}
	} return arrayBig;
}

arrangement(sortedArray);
