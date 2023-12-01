var finalAnswer=-1
function nmPMR(arr, key, cb) {
	finalAnswer=-1
	var Parallel = require('paralleljs'),
	p = new Parallel(arr);
	var acc=1;
	global.process.env.key = key;
		p.map(function(i) { return i == global.process.env.key; }).reduce(function(d) { return d[0] +d[1]; }).then(cb)

	//while (finalAnswer==-1){
	
	//}
	//return finalAnswer
}

function endThis(endValue){
	finalAnswer=endValue
	console.log(finalAnswer)
}
console.log(nmPMR([1,1,1,1,0,1], 1, endThis))
