<template>
    <header class="headerr">
      <div class="logomain">
        <img class="logo" :src="logo2" />
      </div>
  
      <div class="btnmainpos">
        <button class="button-as-text" @click="goStart">Главная страница</button>
        <button class="button-as-text" @click="checkProgress">Прогресс</button>
      </div>
  
      <div class="box-nickname">
        <p class="type-text">userNickname</p>
      </div>
    </header>
  
    <div class="box-menu">
        <p class="textmenu">Выберите то, 
                            что хотите сделать
                            с привычкой </p>
        <button class="btnmenumain">Добавить</button>
        <button class="btnmenumain">Редактировать</button>
        <button class="btnmenumain">Удалить</button>
        <button class="btnmenumain">Выполнена</button>
        <button class="btnmenumain">Заморозить</button>

        <button class="btnmenumainexit">Выйти</button>


    </div>
  
    <div class="content-wrapper">
      <div class="box-habit">
        <h1>Хабит</h1>
      </div>
    </div>

    <div class="check">
        <p class="textcheck">
            Ваш счет - n
        </p>
    </div>

    <div class="center-wrapper">
         <div class="gradient-bar"></div>
    </div>


  </template>
  
  <script setup>
  import logo from '../assets/logo.svg'
  import logo2 from '../assets/logo2.jpg'
  import tablemain from '../assets/tablemain.svg'
  import { useRouter } from 'vue-router'
  const router = useRouter()

  function goStart() {
    router.push('/')
  }
  function checkProgress() {
    console.log("Прогресс");
  }
  function goExit() {
    console.log("Выход");
  }
  </script>
  
  <style scoped>
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  
  .headerr {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: #e4f2fd;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 40px;
    box-sizing: border-box;
    z-index: 1000;
  }
  
  .logomain img {
    height: 100%;
  }
  
  .box-nickname {
    width: 157px;
    background-color: white;
    padding: 10px;
    border-radius: 0 0 15px 15px;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: #2D3748;
  }
  
  .box-menu {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-227px);
    width: 177px;
    height: 500px;
    background-color: white;
    border-radius: 0 15px 15px 0;
    z-index: 999;
  }
  
  .content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding-top: 100px;
    box-sizing: border-box;
  }
  
  .box-habit {
    transform: translateY(-81px);
    width: 1500px;
    height: 500px;
    background-color: white;
    border-radius: 15px;
    z-index: 1;
  }
  
  .textcheck{
    margin-top: -170px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;        /* Bold */
    font-size: 13px;
    color: #2D3748
  }
  .button-as-text {
    margin-top: 15px;
    background: none;
    border: none;
    padding: 7px 20px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 13px;
    color: #2D3748;
    cursor: pointer;
  }
  
  .button-as-text:hover {
    color: #005fa3;
  }
  
  .type-text {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 13px;
    color: #2D3748;
  }

  .textmenu{
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 13px;
    color: #2D3748;
    padding: 10px;
  }

  .btnmenumain {
  width: 140px;
  height: 40px;
  background-color: #1976D2;
  margin-top: 10px;
  border-radius: 15px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
  border: 1px solid #ccc;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btnmenumain:hover {
  background-color: #062549; 
}


   .btnmenumainexit{
    background-color: red;
    margin-top: 70px;
    border-radius: 15px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 15px;
   }

   .gradient-bar {
  width: 1270px;
  height: 30px;
  border-radius: 50px;
  background: linear-gradient(to right, red, green);
  /* margin-top: 50px; */
}

  </style>
  