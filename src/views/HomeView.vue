<template>

  <header class="head">
      
    <div>
      <img class="imglogo" :src="logo" />
    </div>

    <div>
  <nav>
    <ul class="btnnav" style="list-style: none; padding: 0; margin: 0;">
      <li><a href="#about">О приложении</a></li>
      <li><a href="#how">Как это работает?</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="#reviews">Отзывы</a></li>
    </ul>
  </nav>
</div>

    <div>
      <button @click="auth" class="btn">Войти</button>
    </div>

    <div>
      <img class="imgprsnt" :src="tablemain" />
    </div> 

  <div>
    <button @click="signIn" class="btnn">Попробовать бесплатно</button>
  </div>
  </header>

  <div id="about" class="wrapper">
    <div class="h1">
      <h1>&lt;О приложении&gt;</h1>
    </div>
    <div class="h2">
      <h2>HabitFlow — это минималистичный трекер привычек с системой очков дисциплины.</h2>
    </div>
    <div class="h3">
      <h3>Он помогает тебе не просто записывать задачи, а вырабатывать устойчивые привычки, отслеживать прогресс и сохранять мотивацию.
          Пропустил день — теряешь очки. Держишь ритм — развиваешь самодисциплину и гордость за себя.
          Простой интерфейс, наглядная статистика и никакой перегрузки</h3>
    </div>
    <div class="h2">
      <h2>Сделано для тех, кто хочет:</h2>
    </div>
    <div class="h3">
      <h3>Не сдаваться после пары пропущенных дней<br>
          Видеть чёткий, визуальный прогресс<br>
          Закрепить полезные привычки</h3>>
    </div>
  </div>

  <div id="how">
    <div class="h11">
      <h1>&lt;Как это работает?&gt;</h1>
    </div>
    <div class="h2">
      <h2>HabitFlow создан, чтобы привычки было не только удобно отслеживать, но и интересно поддерживать.<br>
          Система устроена так, чтобы ты чувствовал прогресс и не терял мотивацию.</h2>
    </div>
  </div>

  <div class="white-box">
      <div class="h4">
        <h4>Создай свою привычку</h4>
      </div>
      <div class="h3">
        <h3>
          Задай название (например: «Читать 15 минут в день»), выбери частоту - ежедневно, через день и определи желаемый ритм. Ты полностью контролируешь, что и когда выполнять.
        </h3>
      </div>
  </div>

  <div class="white-box">
      <div class="h4">
        <h4>Отмечай выполнение</h4>
      </div>
      <div class="h3">
        <h3>
          Каждый день заходи в личный кабинет и одним нажатием отмечай, выполнил ли ты задачу.Минимум кликов — максимум фокуса на действиях.        </h3>
      </div>
  </div>
  <div class="white-box">
      <div class="h4">
        <h4>Получай очки дисциплины</h4>
      </div>
      <div class="h3">
        <h3>
          Система поощряет стабильность:<br>
          /За каждый выполненный день ты получаешь очки<br>
          /Пропустил — теряешь баллы
        </h3>
      </div>
  </div>
  <div class="white-box">
      <div class="h4">
        <h4>Следи за результатами</h4>
      </div>
      <div class="h3">
        <h3>
          <p>История выполнения и streak-линии — всё, чтобы видеть свою стабильность и гордиться прогрессом.</p>
          Ты строишь систему, а HabitFlow помогает её не разрушить.        </h3>
      </div>
  </div>

  <div id="faq">
    <div class="h11">
      <h1>FAQ — Часто задаваемые вопросы</h1>
    </div>

    <div class="white-boxfaq">
      <h4>Это приложение бесплатно?</h4>
      <h3>Да, HabitFlow полностью бесплатен. Мы хотим, чтобы дисциплина была доступна каждому. В будущем могут появиться дополнительные функции, но основа останется бесплатной.</h3>
    </div>

    <div class="white-boxfaq">
      <h4>Сколько привычек я могу добавить?</h4>
      <h3>Сколько угодно! Нет ограничений — ты можешь отслеживать как одну, так и десять привычек одновременно.</h3>
    </div>

    <div class="white-boxfaq">
      <h4>Нужно ли устанавливать приложение?</h4>
      <h3>Нет, HabitFlow работает прямо в браузере. Просто зайди на сайт — и ты уже внутри. Но мы планируем мобильную версию в будущем.</h3>
    </div>

    <div class="white-boxfaq">
      <h4>А Свиридонову тоже снимают очки, если он ленится?</h4>
      <h3>Конечно. HabitFlow не щадит никого — даже Свиридонова.</h3>
    </div>
  </div>

  <div id="reviews" class="h11">
    <h1>&lt;Отзывы&gt;</h1>


    <div class="feedback-container">
      <div class="white-feedbackbox">
        <h3>
          ⭐️⭐️⭐️⭐️⭐️<br>
          Я добавил привычку: «не тупить на парах Свиридонова».
          Уже держу streak 0 дней, прогресс впечатляющий!
          <h3>— Павел, бездарь</h3>
        </h3>
      </div>
      <div class="white-feedbackbox">
        <h3>
          ⭐️⭐️⭐️⭐️⭐️<br>
          Пока стоял на матвеевском переезде, успел добавить три привычки, удалить две, придумать четвёртую и снова застрять. <br>
          — Георгий, с КСМ
        </h3>
      </div>
      <div class="white-feedbackbox">
        <h3>
          ⭐️⭐️⭐️⭐️⭐️<br>
          HabitFlow — первое, что я уважаю после армейского устава.
          <h3>— Роман, преподаватель<br></h3>
        </h3>
      </div>
    </div>

    <div>
      <div class="h11">
        <h1>Есть что сказать?</h1>
        <h2>Наше приложение — как привычка: становится лучше с вашей помощью.</h2>
        <h3>Напишите идею, отзыв — всё прилетит в Telegram нашему боту</h3>
      </div>

      <div class="white-boxinput">
        <textarea placeholder="Введите текст..."></textarea>
      </div>

      <div>
        <button @click="sendMessage" class="btnnn">Скинуть в бездну Telegram</button>
      </div>
    </div>
  </div>
  
</template>

<script setup>
import logo from '../assets/logo.svg' 
import logo2 from '../assets/logo2.jpg'
import tablemain from '../assets/tablemain.svg'
function sendMessage() {
  console.log('Сообщение');
}

import { useRouter } from 'vue-router'

const router = useRouter()

function auth() {
  router.push('/auth') 
}
function signIn(){
  router.push('/registration')
}



</script>

<style>
.imglogo{
  position: absolute;
  top: 0;
  left: 0;
}

html {
  scroll-behavior: smooth;
}

.btnnav {
  position: absolute; 
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 80px; 
  list-style: none;
  margin: 0;
  padding: 10px 0;
  z-index: 1000; 
  margin-bottom: 100px;
}

.btnnav li a {
  
  color: #2d3748;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 13px;
}

.btn {
  position: absolute;
  top: 13px;
  right: 50px;
  background-color: #1976D2;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 13px;
  color: white; 
  border: none; 
  border-radius: 15px; 
  cursor: pointer; 
  transition: background-color 0.5s ease;

}

.btn:hover{
  background-color: #062549;

}

.imgprsnt {
  position: absolute;
  top: 200px; 
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 100px;
}

.btnn{
  position: absolute;
  top: 200px; 
  left: 50%;
  transform: translateX(-50%);
  background-color: #1976D2;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  border-radius: 15px; 
  top: 650px;
  transition: background-color 0.5s ease;
}
.btnn:hover {
  background-color: #062549;
}

.h1 {
  text-align: center;
  margin-top: 710px;
}

h1 {
  color: #2D3748;
  font-size: 20px;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
}

.h2{
  text-align: center;
  margin-top: 25px;
}

h2 {
  color: #2D3748;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 600; 
}

.h3{
  text-align: center;
  margin-top: 15px;
}

h3{
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #2D3748;
}

.h4{
  text-align: center;
}

h4 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;       
  font-size: 14px;
  color: #FFA000;
}

.white-box {
  margin: 0 auto;
  margin-top: 25px;
  width: 400px;            
  height: 150px;           
  background-color: white; 
  color: #2D3748;          
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 0%;           
  border-radius: 15px;
}

.h11 {
  margin-top: 60px; 
}

.h11 h1 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;         
  font-size: 20px;
  color: #2D3748;
  margin: 0;               
}

.white-boxfaq {
  margin: 0 auto;
  margin-top: 25px;
  width: 695px;            
  height: 86px;          
  background-color: white; 
  color: #2D3748;          
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 0%;           
  border-radius: 15px;
}

.feedback-container {
  display: flex;
  justify-content: center;  
  gap: 40px;                
  flex-wrap: wrap;          
  margin-top: 30px;         
}

.white-feedbackbox {
  width: 236px;
  height: 170px;
  background-color: white;
  color: #2D3748;
  font-size: 0px;
  font-weight: 400;
  padding: 0;
  border-radius: 15px;
  box-sizing: border-box;
}

.white-boxinput {
  width: 590px;
  height: 108px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto; 
  box-sizing: border-box;
}

.white-boxinput textarea {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 14px;
  color: #2D3748;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  background: transparent;
  padding: 16px;
  box-sizing: border-box;
}

.btnnn {
  margin-top: 25px;
  width: 284px;
  height: 47px;
  background-color: #1976D2;        
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 13px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
}

</style>