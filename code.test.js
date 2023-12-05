const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

dm1 = [1,1,1,1,2,1,3,5,3,2,2,1,2,3,4,4,3,2,1];
async function cb1(endValue){
	await assert(endValue == 7)
	//if (endValue != 7){
	//	console.log("ERROR: THE END VALUE IS NOT THE CORRECT VALUE OF 7")
	//}
}

(nmPMR(dm1, 1, cb1))


dm2 = [1,1,1,1,2,1,3,5,3,2,2,1,2,3,4,4,3,2,1];
async function cb2(endValue){
	await assert(endValue == 4)
        //if (endValue != 4){
        //        console.log("ERROR: THE END VALUE IS NOT THE CORRECT VALUE OF 4")
        //}
}

nmPMR(dm2, 3, cb2)


dm3 = [1];
async function cb3(endValue){
	await assert(endValue == 0)
        //if (endValue != 0){
	//	console.log(endValue)
        //        console.log("ERROR: THE END VALUE IS NOT THE CORRECT VALUE OF 0")
        //}
}
nmPMR(dm3, 3, cb3)


dm4 = [1,1,1,1,2,1,3,5,3,2,2,1,2,3,4,4,3,2,1];
async function cb4(endValue){
	await assert(endValue == 0)
        //if (endValue != 0){
        //        console.log("ERROR: THE END VALUE IS NOT THE CORRECT VALUE OF 0")
        //}
}
nmPMR(dm4, 18, cb4)


dm5 = [5,5,5,5,5,5,5,5,5,5,5,5];
async function cb5(endValue){
	await assert(endValue == 12)
        //if (endValue != 12){
        //        console.log("ERROR: THE END VALUE IS NOT THE CORRECT VALUE OF 12")
        //}
}
nmPMR(dm5, 5, cb5)

dm6 = [];
async function cb6(endValue){
        await assert(endValue == 0)
        //if (endValue != 12){
        //        console.log("ERROR: THE END VALUE IS NOT THE CORRECT VALUE OF 12")
        //}
}
nmPMR(dm6, 6, cb6)
