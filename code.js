function nmPMR(arr, key, cb) {
	if (arr.length==0){
		cb(0)
		return
	}
	
	var Parallel = require('paralleljs'),
	p = new Parallel(arr);
	global.process.env.key = key;
   	p.map(function(i) { if (i == global.process.env.key) return 1; else return 0; }).reduce(function(d) { return d[0] +d[1]; }).then(cb)
}
