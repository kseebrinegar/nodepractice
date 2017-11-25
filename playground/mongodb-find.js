//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

var obj = new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	} 
	console.log('Connected to MongoDb server');

	/*db.collection('Todos').find({
		_id: new ObjectId('5a19d4aad96f940a468417c8')
	}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos')
	});*/


	/*db.collection('Todos').find().count().then((c) => {
		console.log(`Todos ${c}`);
	}, (err) => {
		console.log('Unable to fetch todos')
	});*/

	db.collection('Users').find({name: 'Mike'}).toArray().then((docs) => {
		console.log(docs);
	});

	//db.close();
});

















