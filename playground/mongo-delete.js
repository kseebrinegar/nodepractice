//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

var obj = new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	} 
	console.log('Connected to MongoDb server');

	/*// delete many,
	db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((succ) => {
		console.log(succ);
	});

	// delete one,
	db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((succ) => {
		console.log(succ);
	})*/

	//findOneAndDelete
	/*db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
		console.log(res)
	});*/
	db.collection('Users').findOneAndDelete({_id: new ObjectId("5a19d78a29bc2c0a669d1032")}).then((res) => {
		console.log(res);
	}, (err) => {
		console.log(err);
	})
	//db.close();
});




