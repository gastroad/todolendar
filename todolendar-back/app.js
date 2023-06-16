const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 9000;
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');

const dataFilePath = './data.json';
const userFilePath = './user.json'

function loadData() {
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data);
}

function saveData(data) {
    const json = JSON.stringify(data);
    fs.writeFileSync(dataFilePath, json);
}

function loadUser() {
    const data = fs.readFileSync(userFilePath);
    return JSON.parse(data);
}

function saveUser(data) {
    const json = JSON.stringify(data);
    fs.writeFileSync(userFilePath, json);
}
app.use(bodyParser.json());

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

app.post('/api/signup', (req, res) => {
    const { username, password } = req.body;
    const users = JSON.parse(fs.readFileSync('user.json'));

    const newUser = {
        username,
        password,
    };

    users.push(newUser);

    saveUser(users)
    res.json({ message: '회원가입이 완료되었습니다.' });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const users = loadUser()

    const user = users.find((u) => u.username === username && u.password === password);

    if (!user) {
        res.status(401).json({ message: '유효한 사용자 정보가 아닙니다.' });
    } else {
        res.json({ message: '로그인이 완료되었습니다.' });
    }
});

app.post('/api/logout', (req, res) => {
    res.json({ message: '로그아웃이 완료되었습니다.' });
});

app.delete('/api/user', (req, res) => {
    const { username } = req.body;

    const users = loadUser()

    const updatedUsers = users.filter((user) => user.username !== username);

    saveUser(updatedUsers)

    res.json({ message: '회원탈퇴가 완료되었습니다.' });
});



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
