var fs = require('fs');
fs.appendFile('apple.txt', 'yes ,updated', function (err, file) {
	if (err) throw err;
	console.log('updated!');
});