<template>
  <addUserModal 
  v-if="visibleAddUserModal"
  :openAddUserModal="openAddUserModal"
  />
  <div class="container">
    <div class="table-header">
      <button @click="openAddUserModal">Добавить человека</button>
      <input type="text" placeholder="Поиск" v-model="search">
    </div>
    <table class="iksweb">
      <tbody>
        <tr>
          <td>Идентификатор</td>
          <td>Телефон</td>
          <td>ФИО</td>
          <td>Баланс</td>
          <td>Статус</td>
        </tr>
        <UserItem
        :filteredList="filteredList"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import UserItem from '@/components/UserItem.vue'
import addUserModal from '@/components/addUserModal.vue'

export default {
  components: {
    UserItem,
    addUserModal,
  },
  data() {
    return {
      visibleAddUserModal: false,
      search: null,
    }
  },
  methods: {
    openAddUserModal() {
      this.visibleAddUserModal = !this.visibleAddUserModal
    },
  },
  computed: {
    filteredList: function(){
        let search = this.search;
        return this.$store.state.users.filter(function (elem) {
            if(search === ''){
              return true;
            } else {
              return elem.name.indexOf(search) > -1;
            }
        })
    }
  }
}
</script>

<style>
.container{
  width: 1300px;
  margin: 0 auto;
}
.table-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}
.table-header button{
  background: #5584FF;
  border-radius: 6px;
  color: #FFFFFF;
  border: none;
  outline: none;
  padding: 10px 20px;
  cursor: pointer;
}
.table-header input{
  background: #FFFFFF;
  border: 1px solid #E0E3ED;
  border-radius: 4px;
  padding: 10px 20px;
  margin-bottom: 20px;
}
table.iksweb{text-decoration: none;border-collapse:collapse;width:100%;text-align:center;}
table.iksweb th{font-weight:normal;font-size:14px; color:#000;background-color:#fff;}
table.iksweb td{font-size:13px;color:#000;}
table.iksweb td,table.iksweb th{white-space:pre-wrap;padding:17px 0px;line-height:13px;vertical-align: middle;border: 1px solid #fff;}	table.iksweb tr:hover{background-color:#f9fafb}
table.iksweb tr:hover td{color:#354251;cursor:default;}
.mobile-table{width: 100%; max-width: 100%; overflow-x: auto;}
</style>