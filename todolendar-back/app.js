const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 9000;
const { v4: uuidv4 } = require('uuid');

const dataFilePath = './data.json';

function loadData() {
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data);
}

function saveData(data) {
    const json = JSON.stringify(data);
    fs.writeFileSync(dataFilePath, json);
}

app.get('/api/todolist', (req, res) => {
    const year = req.query.year;
    const month = req.query.month;

    if (!year && !month) {
        const data = loadData();
        res.json(data);
        return;
    }

    const data = loadData();
    let filteredTodoList = data;

    if (year) {
        filteredTodoList = filteredTodoList.filter(item => {
            const itemYear = item.date.substr(0, 4);
            return itemYear === year;
        });
    }

    if (month) {
        filteredTodoList = filteredTodoList.filter(item => {
            const itemMonth = item.date.substr(5, 2);
            return itemMonth === month;
        });
    }

    res.json(filteredTodoList);
});


app.post('/api/todolist', (req, res) => {
    const { text, completed, date } = req.body;

    const data = loadData();
    const newTodo = {
        id: uuidv4(),
        text,
        completed,
        date
    };
    data.push(newTodo);
    saveData(data);

    res.json({ message: 'Todo item added successfully' });
});

app.put('/api/todolist/:id', (req, res) => {
    const id = req.params.id;
    const { text, completed, date } = req.body;

    const data = loadData();
    const todo = data.find(item => item.id === parseInt(id));
    todo.text = text;
    todo.completed = completed;
    todo.date = date;
    saveData(data);

    res.json({ message: 'Todo item updated successfully' });
});

app.delete('/api/todolist/:id', (req, res) => {
    const id = req.params.id;
    const data = loadData();

    const index = data.findIndex(item => item.id === parseInt(id));
    data.splice(index, 1);
    saveData(data);

    res.json({ message: 'Todo item deleted successfully' });
});



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
