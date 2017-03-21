// write a function using setTimeout that works just like setInterval
// every second has to execute a function

function repeat(cb, timeframe) { //cb = callback
	setTimeout(function(){
		cb()
		repeat(cb, timeframe)
	}, timeframe)
}

repeat(function(){
	console.log('how you do')
}, 1000