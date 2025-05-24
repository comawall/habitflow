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
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'super_secret_key'; 

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401); 

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403); 

    req.user = user; 
    next(); 
  });
}

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err.message);
  } else {
    console.log('Успешное подключение к базе данных.');
    db.run("PRAGMA foreign_keys = ON;"); 
  }
});


app.use(cors());
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  const { login, password } = req.body;

  db.get('SELECT * FROM users WHERE login = ?', [login], async (err, user) => {
    if (err || !user) {
      return res.status(401).json({ error: 'Неверный логин' });
    }

    const match = await bcrypt.compare(password, user.Password);

    if (match) {
      const token = jwt.sign(
        { userId: user.Id, login: user.Login },
        SECRET_KEY,
        { expiresIn: '30m' } 
      );

      res.json({ success: true, token }); 
    } else {
      res.status(401).json({ error: 'Неверный пароль' });
    }
  });
});


app.post('/api/register', async (req, res) => {
  const { login, password } = req.body;

  if (!login || !password) {
    return res.status(400).json({ error: 'Логин и пароль обязательны' });
  }

  try {
    db.get('SELECT * FROM users WHERE login = ?', [login], async (err, existingUser) => {
      if (err) {
        return res.status(500).json({ error: 'Ошибка базы данных' });
      }

      if (existingUser) {
        return res.status(409).json({ error: 'Пользователь с таким логином уже существует' }); 
      }

      const hashedPassword = await bcrypt.hash(password, saltRounds);

      db.run('INSERT INTO users (login, password) VALUES (?, ?)', [login, hashedPassword], function(err) {
        if (err) {
          return res.status(500).json({ error: 'Ошибка при сохранении пользователя' });
        }

        res.json({ success: true, userId: this.lastID });
      });
    });
  } catch (err) {
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
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

app.get('/api/habits', (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ error: 'Нет токена' });

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const userId = decoded.userId;

    db.all('SELECT * FROM habits WHERE user_id = ?', [userId], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Ошибка при получении привычек' });
      }
      res.json(rows);
    });
  } catch (err) {
    return res.status(401).json({ error: 'Неверный токен' });
  }
});

app.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000');
});
