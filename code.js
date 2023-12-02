var finalAnswer=-1
var currentKey=-1
var manualAnswer=0;


function nmPMR(arr, key, cb, infoArray) {
	finalAnswer=-1
	manualAnswer=0
	for (var i=0; i<arr.length; i++){
                if (arr[i]==key){
                        manualAnswer=manualAnswer + 1
                }
        }
	var Parallel = require('paralleljs'),
	p = new Parallel(arr);
	var acc=1;
	global.process.env.key = key;
	p.map(function(i) { return i == global.process.env.key; }).reduce(function(d) { return d[0] +d[1]; }).then(cb)
}

function endThis(endValue){
	finalAnswer=endValue
	if (finalAnswer != manualAnswer){
		console.log("WARNING! ERROR HAS BEEN ENCOUNTERED!")
		console.log(finalAnswer + " is not the equal to " + manualAnswer)
	}
}
