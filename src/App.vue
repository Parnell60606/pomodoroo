<template>
  <v-app>
    <v-app-bar color="blue-grey-lighten-2" height="48">

      <v-app-bar-title>pomodoro</v-app-bar-title>

      <v-tabs end>



        <v-tab value="one" to="/" hide-slider>
          <!-- <router-link to="/">HOME</router-link> -->
          HOME
        </v-tab>
        <v-tab value="two" to="/list" hide-slider>
          LIST
        </v-tab>
        <v-tab value="three" to="/setting" hide-slider>
          SETTING
        </v-tab>

      </v-tabs>

    </v-app-bar>

    <v-main>

      <router-view v-slot="{ Component }">
        <keep-alive include="HomeView">
          <component :is="Component"></component>
        </keep-alive>
      </router-view>

    </v-main>
  </v-app>
</template>


<script setup>
import { storeToRefs } from 'pinia'
import { useListStore } from '@/stores/list'
const list = useListStore()
const { notify } = storeToRefs(list)
const { toggleNotify } = list
</script>


<style>
a {
  text-decoration: none;
  color: inherit;
}
</style>