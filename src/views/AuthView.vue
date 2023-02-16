<template>
  <div class="container">
    <div class="auth-form">
      <h2>Авторизация</h2>
      <form action="#">
        <input type="text" placeholder="Введите логин" v-model="email">
        <input type="password" placeholder="Введите пароль" v-model="password">
        <button @click="login">Войти</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    login(e) {
      e.preventDefault()
      if(this.email == 'test' & this.password == 'test') {
        localStorage.setItem('authStatus', true)
        this.$router.push('/')
      }
    }
  }
}
</script>

<style>
.container{
  width: 1300px;
  margin: 0 auto;
}
.auth-form{
  text-align: center;
  margin: 0 auto;
}
.auth-form form{
  display: inline-grid;
}
.auth-form form input{
  background: #FFFFFF;
  border: 1px solid #E0E3ED;
  border-radius: 4px;
  padding: 10px 20px;
  margin-bottom: 20px;
}
.auth-form form button{
  background: #5584FF;
  border-radius: 6px;
  color: #FFFFFF;
  border: none;
  outline: none;
  padding: 10px 20px;
  cursor: pointer;
}
.auth-form h2{
  color: #545E79;
  font-size: 17px;
  font-weight: 500;
}
</style>