<template>
  <header class="bg-header sticky p-5 z-10">
    <nav class="flex items-center max-md:justify-between">
      <multi-dev/>
      <button
          class="block md:hidden z-10"
          @click="toggleNavbar"
          v-html="state.navbar ? close : menu"
      />
      <div class="md:w-full md:flex max-md:flex-col md:justify-between text-xl md:text-base"
           :class="state.navbar ? 'open' : 'hidden'">
        <div></div>
        <ul class="max-md:w-full flex max-md:flex-col items-center gap-x-10 text-black md:text-white">
          <li v-for="(link, index) in links" :key="index">
            <div
                v-if="link.name === 'Services'"
                class="relative inline-block"
                @click="toggleServices"
            >
              <div class="flex items-center hover:cursor-pointer opacity-60 hover:opacity-90 gap-x-1">
                <p v-text="link.title"/>
                <button class="pt-1"
                        v-html="state.services ? arrows.up : arrows.down"/>
              </div>
              <ul v-if="state.services"
                  class="bg-white text-center min-w-max absolute top-full max-md:-left-1/2 flex flex-col gap-y-2 px-3 py-3 text-black rounded-md z-20"
                  @click="state.navbar = false">
                <li v-for="(subLink, index) in link.subLinks" :key="index">
                  <router-link :to="{ name: subLink.name }"
                               v-text="subLink.title"
                               class="px-2.5 py-1 rounded-2xl hover:bg-button"/>
                </li>
              </ul>
            </div>
            <router-link
                v-else
                :to="{ name: link.name }"
                v-text="link.title"
                :class="{ 'opacity-60': link.name !== router.name }"
                class="hover:opacity-90"
                @click="state.navbar = false"/>
          </li>
        </ul>
        <router-link :to="{ name }"
                     class="bg-button flex items-center gap-x-2 px-9 py-2 rounded-4xl hover:bg-white"
                     v-html="title" @click="state.navbar = false"/>
      </div>
    </nav>
  </header>
</template>

<script setup>
import useHeader from "../composables/components/useHeader.js";
import {useRoute} from "vue-router";
import {reactive} from "vue";
import MultiDev from "./MultiDev.vue";

const router = useRoute();
const state = reactive({
  services: false,
  navbar: false,
});

const toggleServices = () => {
  state.services = !state.services;
};

const toggleNavbar = () => {
  state.navbar = !state.navbar;
};

const {links, name, title, menu, close, arrows} = useHeader();
</script>

<style scoped>
.open {
  @apply bg-white w-full h-[100vh] absolute top-0 left-0 flex items-center py-7;
}
</style>
