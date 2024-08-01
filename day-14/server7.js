var fs = require('fs');
fs.writeFile('apple.txt', 'could you understand', function (err, file) {
	if (err) throw err;
	console.log('saved!');
});