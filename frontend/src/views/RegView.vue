<template>
    <div class="container">
      <img class="logo" :src="logo2" />
      
      <div class="box-logg">
       <h3>Вход в аккаунт</h3>

        <input type="text" v-model="login" placeholder="Логин" class="inpt">
        <input type="password" v-model="password1" placeholder="Пароль" class="inpt">
        <input type="password" v-model="password2" placeholder="Пароль" class="inpt">

        <button class="btnnnn" @click="regAccount">Создать</button>

        <p class="regtext">
            Уже есть аккаунт?
            <button class="link-btn" @click="goAuth">Авторизируйтесь!</button>
        </p>
    </div>
    </div>
  </template>
  
  <script setup>
  import logo from '../assets/logo.svg'
  import logo2 from '../assets/logo2.jpg'
  import tablemain from '../assets/tablemain.svg'  
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'

  const login = ref('')
  const password1 = ref('')
  const password2 = ref('')

  const router = useRouter()

  async function regAccount() {
  if (!login.value || !password1.value || !password2.value) {
    alert('Все поля должны быть заполнены');
    return;
  }

  if (password1.value !== password2.value) {
    alert('Пароли не совпадают');
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: login.value,
        password: password1.value,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      alert('алло нод да да код 200');
      router.push('/auth');
    } else {
      alert(result.error || 'алло нод да да код 500');
    }

  } catch (err) { 
    console.error('Ошибка:', err);
    alert('Ошибка соединения с сервером');
  }
}


  function goAuth(){
    router.push('/auth')
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
  
  .box-logg {
    width: 314px;
    height: 314px;
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