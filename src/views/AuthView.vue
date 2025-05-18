<template>
    <div class="container">
      <img class="logo" :src="logo2" />

      <div class="box-log">
       <h3>Вход в аккаунт</h3>

        <input type="text" v-model="login" placeholder="Логин" class="inpt">
        <input type="password" v-model="password" placeholder="Пароль" class="inpt">

        <button class="btnnnn" @click="vhod">Войти</button>

        <p class="regtext">
            Еще нет аккаунта?
            <button class="link-btn" @click="goReg">Создать!</button>
        </p>
    </div>
    </div>
  </template>
  
  <script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import logo from '../assets/logo.svg'
import logo2 from '../assets/logo2.jpg'
import tablemain from '../assets/tablemain.svg'


const login = ref('')
const password = ref('')
const router = useRouter()

function goReg() {
  router.push('/registration')
}
function vhod(){
  if (login.value === '1' && password.value === '1') {
    router.push('/menu')
  } else {
    alert('Неверный логин или пароль')
  }
}
</script>

  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap');

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .logo {
    display: block; 
    margin-bottom: 0; 
  }
  
  .box-log {
    width: 314px;
    height: 257px;
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    margin: 0; 
    border: 1px solid #ccc;
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
  
.inpt {
  width: 270px;
  height: 25px;
  margin-top: 15px;

  background-color: white;
  border: 1px solid #ccc;       
  box-shadow: none;             
  outline: none;                
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #2D3748;

  padding: 4px 8px;             
}

.btnnnn{
    height: 46px;
    width: 160px;
    background-color: #1976D2;
    margin-top: 20px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;        
    font-size: 13px;
    color: #ffffff;
    border-radius: 15px ;
}

.regtext{
    font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #2D3748;
}

.link-btn{
    background: none;
  border: none;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #2D3748;
  cursor: pointer;
  padding: 0;
  margin-left: 5px;
  text-decoration: underline;
}
  </style>