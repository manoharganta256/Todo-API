const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose.js');
const {Todo} = require('./models/todo.js');
const {User} = require('./models/user.js');

const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc)
    }, (error) => {
        res.status(400).send(error);
    });
});

app.get('/todos', (req, res) => {
    var todos = Todo.find({}).then((todos) => {
        res.send(todos);
    }, (err) => {
        res.status(400).send(err);
    });
    console.log(todos);
})

app.listen(port, () => {
    console.log("Started server on port 3000");
});

module.exports =  {
    app
};