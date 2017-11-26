var express = require('express');
var bodyParser = require('body-parser');
var {ObjectId} = require('mongodb');

var { mongoose } = require('./db/mongoose.js');
var { Todo } = require('./models/todo');
var { User } = require('./models/users');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e)
	});
});

app.get('/todos/:id', (req, res) => {
	var id = req.params.id;
	if (!ObjectId.isValid(id)) {
		res.status(404).send();
	} else {
		Todo.findById(id).then((foundId) => {
			if (foundId) {
				res.send({
					foundId
				})
			} else {
				res.status(404).send()
			}
		}).catch((e) => {
			res.status(400).send();
		});
	}
});

app.listen(PORT, () => {
	console.log(`Started on port ${PORT}`);
});

module.exports = {app};
















