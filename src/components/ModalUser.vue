<template>
  <div class="modal-bg">
    <div class="modal-content">
        <div class="modal-header">
            <h2>Информация о человеке</h2>
            <a href="#" @click="openModalUser">закрыть</a>
        </div>
        <div class="modal-body">
            <div class="add-form">
                <p><strong>Идентификатор:</strong> {{ index }}</p>
                <p><strong>Телефон:</strong> {{ user.number }}</p>
                <p><strong>ФИО:</strong> {{ user.name }}</p>
                <p><strong>Баланс:</strong> {{ user.balance }}</p>
                <p><strong>Статус:</strong> {{ user.status }}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['openModalUser', 'user', 'index']
}
</script>

<style>

</style>