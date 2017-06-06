var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());

app.listen(process.env.PORT || 3000, function () {
    console.log('Server is running on 3000');
});

app.use(express.static(__dirname + '/build'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/build');	
	//res.sendFile(__dirname + '/coolworld.html');	
    //res.send('Hello wintermute2016 !!!');
});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//------------------------------------------------------------------------
var mongoAudit = require('./mongo-audit').Audit;

app.get('/api/audit/get', mongoAudit.getAudit);
app.post('/api/audit/add', mongoAudit.addAudit);
//------------------------------------------------------------------------