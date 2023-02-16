<template>
  <div class="modal-bg">
    <div class="modal-content">
        <div class="modal-header">
            <h2>Добавление человека</h2>
            <a href="#" @click="openAddUserModal">закрыть</a>
        </div>
        <div class="modal-body">
            <div class="add-form">
                <form action="#">
                    <input type="text" placeholder="Введите телефон" v-model="user.number">
                    <input type="text" placeholder="Введите ФИО" v-model="user.name">
                    <input type="text" placeholder="Введите Баланс" v-model="user.balance">
                    <button @click="addUser">Добавить</button>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['openAddUserModal'],
    data() {
        return {
            user: {
                number: null,
                name: null,
                balance: null,
                status: 'Активный'
            },
        }
    },
    methods: {   
        addUser(e) {
            e.preventDefault()
            this.$store.commit('addUser', this.user)
            this.openAddUserModal()
        },
    }
}
</script>

<style>
.modal-bg{
    background-color: #00000043;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.modal-content{
    background-color: #fff;
    padding: 15px;
    margin: 0 auto;
    margin-top: 100px;
    width: 30%;
}
.modal-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.modal-header h2{
    font-size: 18px;
}
.modal-header a{
    color: #000;
    text-decoration: none;
}
.add-form{
  text-align: center;
  margin: 0 auto;
}
.add-form form{
  display: inline-grid;
}
.add-form form input{
  background: #FFFFFF;
  border: 1px solid #E0E3ED;
  border-radius: 4px;
  padding: 10px 20px;
  margin-bottom: 20px;
}
.add-form form button{
  background: #5584FF;
  border-radius: 6px;
  color: #FFFFFF;
  border: none;
  outline: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>