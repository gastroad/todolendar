const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 9000;

const dataFilePath = './data.json';

function loadData() {
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data);
}

function saveData(data) {
    const json = JSON.stringify(data);
    fs.writeFileSync(dataFilePath, json);
}

app.get('/api/data', (req, res) => {
    const data = loadData();
    res.json(data);
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
