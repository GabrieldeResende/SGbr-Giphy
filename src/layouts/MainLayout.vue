<template>
  <q-layout class="bg-gray-400">
    <q-header>
      <q-toolbar class="bg-[#0159df]">
        <q-toolbar-title>
          <img class="w-20" src="../assets/logo-sgbr.png" alt="">
        </q-toolbar-title>

        <div>Gabriel de Resende Santiago</div>
      </q-toolbar>
    </q-header>

    <q-drawer elevated v-model="leftDrawerOpen" show-if-above bordered class="bg-[#001236] rounded-r-lg">
      <q-list class="bg-[#1976D2] rounded-r-lg">
        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Home',
    icon: 'home',
    route: { name: 'home' },
  },
  {
    title: 'Favoritos',
    icon: 'favorite',
    route: { name: 'favorites' },
  },
  {
    title: 'Categorias',
    icon: 'chat',
    route: { name: 'categorias' },
  },
  {
    title: 'Sobre',
    icon: 'record_voice_over',
    route: { name: 'sobre' },
  },
]
</script>
