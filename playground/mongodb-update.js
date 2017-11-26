//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	} 
	console.log('Connected to MongoDb server');

	/*db.collection('Todos').findOneAndUpdate({
    	_id: new ObjectId("5a19f51070d2a266bcf59108")
   	}, {
  		$set: {
  	     	completed: true
  	   	}
  	}, {
  		returnOriginal: false
  	}).then((result) => {
  	  	console.log(result);
  	});*/

  	db.collection('Users').findOneAndUpdate({
  		_id : new ObjectId("5a19fafd70d2a266bcf59297")
  	}, {
  		$set: {
  			name: 'Casey'
  		},
  		$inc : {
  			age: 1
  		}
  	}, {
  		returnOriginal: false
  	}).then((result) => {
  		console.log(result);
  	});

	//db.close();
});




