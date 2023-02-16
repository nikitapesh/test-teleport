<template>
    <tr v-for="(user, index) in usersList" :key="user" @click="openModalUser">
        <td>{{ index + 1 }}</td>
        <td>{{ user.number }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.balance }}</td>
        <td>
            <select v-model="user.status">
                <option v-for="option in optionValues" :value="option" :name="option" :key="option">{{ option }}</option>
            </select>
        </td>
        <ModalUser
        v-if="visibleModalUser"
        @click="openModalUser"
        :user="user"
        :index="index"
        />
    </tr>
</template>

<script>
import ModalUser from '@/components/ModalUser.vue'

export default {
    props: ['filteredList'],
    components: {
        ModalUser
    },
    data() {
        return {
            optionValues: ['Активный', 'Заблокирован'],
            visibleModalUser: false
        }
    },
    methods: {
        openModalUser() {
            this.visibleModalUser = !this.visibleModalUser
        }
    },
    computed: {
        usersList: function() {
            if(this.filteredList.length >= 1) {
                return this.filteredList
            } else {
                return this.$store.state.users
            }
        }
    }
}
</script>

<style>

</style>