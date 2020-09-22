<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" >
      <img alt="CentralIT Logo" width="150" src="~assets/logo_site_CentralIT.png" />
      <q-form @submit="fnLogin">
        <q-input v-model="user.username" filled label="Login" style="margin-bottom:10px">
          <template v-slot:append>
            <q-icon name="email" />
          </template>
        </q-input>
        <q-input v-model="user.password" type="password" filled label="Senha" style="margin-bottom:10px">
          <template v-slot:append>
            <q-icon name="vpn_key" />
          </template>
        </q-input>
      <q-btn
        type="submit"
        label="Entrar"
        align="right"
        icon-right="send"
        color="primary"
      />
    </q-form>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

interface User {
  username:string;
  password:string;
}

@Component
export default class PageIndex extends Vue {

  private user:User = {
    username:'',
    password:'',
  }
  data() {
    return {
      user:{}
    }
  }

  async fnLogin() {
    const vm = this;
    const body = {
      username: vm.user.username,
      password: vm.user.password
    }
    const response = await vm.$axios.post('http://localhost:3002/auth/login', body);
    if(response){
      vm.$router.push('/dashboard')
    }
  }

}
</script>
