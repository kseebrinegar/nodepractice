//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

var obj = new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	} 
	console.log('Connected to MongoDb server');

	/*db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: false
	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert todo', err);
		}

		console.log(JSON.stringify(result.ops, undefined, 2));
	});*/

	/*db.collection('Users').insertOne({
		name: 'Casey Brinegar',
		age: '31',
		location: 'Klickitat, Wa'
	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert into Users', err);
		}

		console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
	});*/

	db.close();
});