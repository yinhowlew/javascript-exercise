/* Question 2: Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, 
when added together, give the target number. 
For example: answer([1,2,3], 4)should return [1,3] */


/* Planning:
Input = array [1,2,3 ...] AND a target number
Function:  find two DIFFERENT numbers in array, whose addition = target number
Output:  the two numbers in new array;  if no match, return some message
what if there's multiple matches?  return all

Simplified walk through:  
e.g. [1,2,3,4,5,6,7,8,9]  target is 10
sort first ascending
start with index 0 (value 1 here)
target MINUS first element in array -- see if there's match. If yes, return that pair
loop and go next. keep returning
*/

let pairFunction = (array, target) => {
	// answer is our final output array with each pair as nested array
	let answer = [];
	// arrayTemp holds a pair temporarily before the pair (in array) get pushed to answer array
	let arrayTemp = [];

	// sort by ascending order
	array.sort(function(a, b){return a-b}); 

	// loop over half array length to avoid duplicate pairing, else it will return both [1,9] and [9,1]
	for (i = 0; i < (array.length)/2; i++) {
		// 	loop to see if (target - an element) has match in the array. Index of an item not in array will be -1.
		if (array.indexOf(target - array[i]) > -1) {
			arrayTemp.push(array[i], (target - array[i]));
			answer.push(arrayTemp);
			arrayTemp = [];
		} else if (array.indexOf(target - array[i]) === -1) {
			return "No match found!";
		}
	} return answer;
} 

let array = [1,2,3,4,5,6,7,8,9];
let target = 10;
pairFunction(array, target);  // return [[1,9], [2,8], [3,7], [4,6], [5,5]]


/* Learnings/Notes to self:
0) it's important to do planning and simplified walk through.
1) How to ensure unique pairings: only loop till array.length / 2)
2) How to return negative message if no match found: use else if
3) Why does pairFunction returns undefined initially? That's because it had no return. Fixed after adding "return answer" instead of console.logging each pairing.





