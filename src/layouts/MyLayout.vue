<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
         ChatBot
        </q-toolbar-title>

        <div>CentralIT Governânça Corporativa</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
// Vue
import Vue from 'vue';
import Component from 'vue-class-component';

// Store modules
import { getModule } from 'vuex-module-decorators';
import LayoutStoreModule from './LayoutStoreModule';

@Component
export default class MyLayout extends Vue {
  store = getModule(LayoutStoreModule);

  get leftDrawerOpen() {
    return this.store.leftDrawerOpen;
  }

  set leftDrawerOpen(value: boolean) {
    this.store.setLeftDrawerOpen(value);
  }
}
</script>
