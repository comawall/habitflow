const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const TelegramBot = require('node-telegram-bot-api');

const TELEGRAM_TOKEN = '7833595565:AAHhw9PJM4hmAMMYXK4e0J2_-OKacJnQsF8';
const CHAT_ID = '1793127048'; 

const bot = new TelegramBot(TELEGRAM_TOKEN);

const app = express();

const dbPath = path.join(__dirname, 'backendhabitflow.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err.message);
  } else {
    console.log('Успешное подключение к базе данных.');
  }
});

app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { login, password } = req.body;
  console.log('Входящие данные:', { login, password });

  db.get('SELECT * FROM users WHERE login = ?', [login], (err, user) => {
    if (err) {
      console.error('Ошибка при запросе:', err.message);
      return res.status(500).json({ error: 'Ошибка сервера' });
    }

    if (!user) {
      return res.status(401).json({ error: 'Пользователь не найден' });
    }

    if (user.Password === password) {
      return res.status(200).json({ message: 'Вход выполнен' });
    } else {
      console.log(`Пароль не совпал: Введённый — "${password}", В БД — "${user.Password}"`);
      return res.status(401).json({ error: 'Неверный пароль' });
    }
    
  });
});

app.post('/register', (req, res) => {
  const { login, password } = req.body;

  if (!login || !password) {
    return res.status(400).json({ error: 'Логин и пароль обязательны' });
  }

  db.get('SELECT * FROM users WHERE login = ?', [login], (err, existingUser) => {
    if (err) {
      console.error('Ошибка при поиске пользователя:', err.message);
      return res.status(500).json({ error: 'Ошибка при поиске пользователя' });
    }

    if (existingUser) {
      return res.status(400).json({ error: 'Пользователь с таким логином уже существует' });
    }

    db.run('INSERT INTO users (login, password) VALUES (?, ?)', [login, password], function (err) {
      if (err) {
        console.error('Ошибка при добавлении пользователя:', err.message);
        return res.status(500).json({ error: 'Ошибка при регистрации' });
      }

      return res.status(201).json({ message: 'Пользователь успешно зарегистрирован' });
    });
  });
});

app.post('/send-to-telegram', (req, res) => {
  const { text } = req.body;

  if (!text) return res.status(400).json({ error: 'Текст обязателен' });

  bot.sendMessage(CHAT_ID, `Новое сообщение от пользователя:\n${text}`)
    .then(() => {
      res.status(200).json({ message: 'Сообщение отправлено в Telegram' });
    })
    .catch((err) => {
      console.error('Ошибка отправки:', err.message);
      res.status(500).json({ error: 'Ошибка отправки в Telegram' });
    });
});

app.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000');
});
