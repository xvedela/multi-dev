<template>
  <header class="bg-header sticky pl-4 md:pl-[1.8vw] pr-10 md:pr-[1.8vw] py-5 md:py-[1.2vw]">
    <nav class="flex items-center max-md:justify-between">
      <component :is="logo"/>
      <button
          class="block md:hidden z-10"
          @click="toggleNavbar"
          v-html="state.navbar ? res.close : res.menu"
      />
      <div class="md:w-full md:flex max-md:flex-col md:justify-between text-xl md:text-base"
           :class="state.navbar ? 'open' : 'hidden'">
        <div></div>
        <ul class="max-md:w-full flex max-md:flex-col items-center gap-x-[2.1vw] text-black md:text-white">
          <li v-for="(link, index) in links._" :key="index">
            <div
                v-if="link.name === 'Services'"
                class="relative inline-block"
                @click="toggleServices"
            >
              <div class="flex items-center hover:cursor-pointer opacity-60 gap-x-1">
                <p v-text="link.label"/>
                <button class="pt-1"
                        v-html="state.services ? arrows.up : arrows.down"/>
              </div>
              <ul v-if="state.services"
                  class="content bg-white min-w-max absolute top-[100%] max-md:left-[-50%] flex flex-col gap-y-[0.6vw] px-3 py-3 text-black rounded-md max-md:z-10"
                  @click="state.navbar = false">
                <li v-for="(subLink, index) in link.subLinks" :key="index">
                  <router-link :to="{ name: subLink.name }"
                               v-text="subLink.label"
                               class="px-[0.4vw] py-[0.2vw] rounded-2xl hover:bg-button"/>
                </li>
              </ul>
            </div>
            <router-link
                v-else
                :to="{ name: link.name }"
                v-text="link.label"
                :class="{ 'opacity-60': link.name !== router.name }"
                @click="state.navbar = false"/>
          </li>
        </ul>
        <router-link :to="{ name: button.name }"
                     class="flex items-center bg-button px-[1.8vw] py-[0.5vw] rounded-4xl gap-x-[0.5vw]"
                     v-html="button.label"/>
      </div>
    </nav>
  </header>
</template>

<script setup>
import useHeader from "../composables/useHeader.js";
import {useRoute} from "vue-router";
import {reactive} from "vue";

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
const {logo, links, button, res, arrows} = useHeader();
</script>

<style scoped>
.open {
  @apply bg-white w-full h-[100vh] absolute top-0 left-0 flex items-center py-7;
}
</style>
