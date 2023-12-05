const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');
dm1 = [1,1,1,1,2,1,3,5,3,2,2,1,2,3,4,4,3,2,1];

function cb1(endValue){
	if (endValue != 7){
		console.log("ERROR: THE END VALUE IS NOT THE CORRECT VALUE OF 7")
	}
}

nmPMR(dm1, 1, cb1)


dm2 = [1,1,1,1,2,1,3,5,3,2,2,1,2,3,4,4,3,2,1];
function cb2(endValue){
        if (endValue != 4){
                console.log("ERROR: THE END VALUE IS NOT THE CORRECT VALUE OF 4")
        }
}

nmPMR(dm2, 3, cb2)


dm3 = [1];
function cb3(endValue){
        if (endValue != 0){
		console.log(endValue)
                console.log("ERROR: THE END VALUE IS NOT THE CORRECT VALUE OF 0")
        }
}
nmPMR(dm3, 3, cb3)


dm4 = [1,1,1,1,2,1,3,5,3,2,2,1,2,3,4,4,3,2,1];
function cb4(endValue){
        if (endValue != 3){
                console.error("ERROR: THE END VALUE IS NOT THE CORRECT VALUE OF 0")
        }
}
nmPMR(dm4, 18, cb4)


dm5 = [5,5,5,5,5,5,5,5,5,5,5,5];
function cb5(endValue){
        if (endValue != 12){
                console.log("ERROR: THE END VALUE IS NOT THE CORRECT VALUE OF 12")
        }
}
nmPMR(dm5, 5, cb5)


dm6 = [];
function cb6(endValue){
        if (endValue != 0){
                console.log(endValue)
                console.log("ERROR: THE END VALUE IS NOT THE CORRECT VALUE OF 0")
        }
}
nmPMR(dm6, 3, cb6)
