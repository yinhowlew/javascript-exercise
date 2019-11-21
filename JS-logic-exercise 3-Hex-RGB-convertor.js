/* Question 3: Write a function that converts HEX to RGB. 
Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB 
and if you enter RGB color format it returns HEX. 


Research:

Hex #FF0000
RGB: 256, 0, 0 
RGB each has integer value 0 to 255

Rather than 100 possible values in a ten digit system, a hexadecimal provides 256. 
1 to F (16);  16*16 = 255 so FF is 255

Number(256).toString(16);  e.g. will return FF
*/



//RGB to Hex:  [255, 0, 0] to "#FF0000"//    

//input variable if RGBArray
const RGBtoHex = (input) => {
	// each of RGB element value must be 0-255
	if (input[0] <0 || input[0]>255) {
		return "R value must be between 0 and 255";
	}
	else if (input[1] <0 || input[1]>255) {
		return "G value must be between 0 and 255";
	}
	else if (input[2] <0 || input[2]>255) {
		return "B value must be between 0 and 255";
	}	

	// slice up RHB Array into 3 numbers
	let rString = input.slice(0,1).toString();  // string 255
	let gString = input.slice(1,2).toString();  // string 0
	let bString = input.slice(2,3).toString();  // string 0

	//convert each string to hex value
	let r = Number(rString).toString(16) // return FF
	let g = Number(gString).toString(16) // return 0
	let b = Number(bString).toString(16) // return 0

	// append 0 if hex value is 1 digit
	// alternative:  return hex.length == 1 ? "0" + hex : hex;
	if (r.length === 1) {
		r = "0" + r;
	}
	if (g.length === 1) {
		g = "0" + g;
	}
	if (b.length === 1) {
		b = "0" + b;
	}
	// concat them into hex value format
	let hexValue = "#".concat(r, g, b);
	return hexValue 
}

//Hex to RGB: "#FF0000" to [255,0,0]
//for today's purpose, we assume user's input is either 6 or 7 characters (#FF0000 or FF0000)

const HextoRGB = (input) => {
	//first check and remove # from the start
	if (input.charAt(0) === "#") {
		input = input.substr(1);    //FF0000
	}
	//check valid length of hex input
	if (input.length > 6) {
		return "Hex value should be between 6 digit only.";
	}
	//convert hex value into each of rgb
	let r = parseInt(input.slice(0,2), 16);  //255
	let g = parseInt(input.slice(2,4), 16);  //0
	let b = parseInt(input.slice(4,6), 16);  //0

	//preparing output as Array for RGB
	let rgbArray = [];
	rgbArray.push(r, g, b);
	return rgbArray;
}


// Combo function  auto detect and execute
const comboConvertor = (input) => {
	if (Array.isArray(input) === true) {
		return RGBtoHex(input);
	} else {
		return HextoRGB(input);
	} 
}


comboConvertor([255,0,0]);


/*KEY LEARNINGS:
1)   combo returned UNDEFINED initially. This is solved after we add "return." Always remember to have "return" for function.





