const express = require('express');
const app = express();
// this is our project folder name
// change this to your project folder name!!!!!!!
const projectName = "our-favorite-pokemon";

app.use(express.static('dist/' + projectName));

	app.all('*', function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.set('port', process.env.PORT || 5000);

app.get('*',function (req, res) {
  // this tells the server to redirect all url calls to the index.html where our angular router will do the work
	res.sendFile(__dirname + '/dist/' + projectName + '/index.html')
});

app.listen(app.get('port'), function () {
	console.log("Express server listening on port " + app.get('port'));
});
