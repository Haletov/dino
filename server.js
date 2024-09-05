
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/save-result', (req, res) => {
    const { score, timestamp } = req.body;
    const result = `Время: ${timestamp}, Счет: ${score}\n`;

    fs.appendFile(path.join(__dirname, 'results.txt'), result, (err) => {
        if (err) {
            console.error('Ошибка записи в файл:', err);
            return res.status(500).send('Ошибка сервера');
        }
        res.send('Результат сохранен');
    });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
