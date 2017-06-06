var mongoose = require('mongoose');

var options = { server: { socketOptions: { connectTimeoutMS: 60000 }}};

mongoose.connect('mongodb://admin:admin@ds141098.mlab.com:41098/coolworld', options);

var db = mongoose.connection;

db.on('error', function (err) {
    console.log('Error from mongoDB: ' + err.message);
});

db.once('open', function callback() {
    console.log('Connected to mongoDB');
});

var Schema = mongoose.Schema;

//---------------------------------------------------------------------------------------------
var Audit = new Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    date: {type: String, required: true},
    ip: {type: String, required: true},
    description: {type: String, required: true}
});

var AuditModel = mongoose.model('Audit', Audit);
module.exports.AuditModel = AuditModel;