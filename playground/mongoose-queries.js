const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');

/*var id =  '5a1b0159fd23f3fb0251b3a2';

if (!ObjectId.isValid(id)) {
	console.log('ID not valid');
}*/

/*Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos', todos);
}, (e) => {

});*/

/*Todo.findOne({
	_id: id
}).then((todo) => {
	console.log('Todo', todo);
}, (e) => {

});

Todo.fineById(id).then((todo) => {
	if (!todo) {
		return console.log('Id not found');
	}
	console.log('Todo By Id', todo);
}).catch((e) => {
	console.log(e);
});*/

const id2 = '5a1a2319335800050c18b5f0';

User.findById(id2).then((user) => {
	if (!user) {
		console.log('id not found');
	}
	console.log('User found by id');
}).catch((e) => {
	console.log(e)
});










