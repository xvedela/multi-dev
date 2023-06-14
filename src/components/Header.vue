<template>
  <header>
    <nav class="bg-header pl-[1.82vw] max-md:pl-4 pr-[1.82vw]  max-md:pr-10 py-[1.2vw] max-md:py-5 sticky">
      <div class="flex items-center max-md:justify-between">
        <multi-dev/>
        <font-awesome class="hidden max-md:block hover:cursor-pointer z-10"
                      @click="toggleNavbar" :_class="state.navbar ? resNavbar.close : resNavbar.bars"/>
        <div class="md:justify-between md:flex md:text-base md:flex-row md:items-center md:w-full flex-col text-xl"
             :class="state.navbar? 'bg-white absolute top-0 left-0 py-4 flex items-center w-full h-[100vh]' : 'hidden'">
          <div></div>
          <ul class="flex gap-x-[2.08vw] text-white max-md:flex-col items-center max-md:text-black max-md:w-full">
            <li v-for="(link, index) in headerNavLinks" :key="index">
              <template v-if="link.to.name === 'Services'">
                <div class="relative " @click="toggleServices">
                  <div class="flex items-center opacity-60 hover:cursor-pointer gap-x-1">
                    <p v-text="link.title"/>
                    <font-awesome class="pt-1" :_class="state.services ? arrows.angleUp : arrows.angleDown"/>
                  </div>
                  <ul v-if="state.services"
                      class="absolute top-[100%] max-md:left-[-50%] max-md:z-10 flex flex-col rounded-md bg-white min-w-max text-black gap-y-[0.63vw] px-2 py-4">
                    <li v-for="(subLink, index) in link.subLinks" :key="index">
                      <router-link :to="subLink.to"
                                   class="bg-white px-[0.42vw] py-[0.16vw] rounded-2xl hover:bg-[#FFB902]"
                                   v-text="subLink.title"/>
                    </li>
                  </ul>
                </div>
              </template>
              <template v-else>
                <router-link :to="link.to" :class="link._class" v-text="link.title"/>
              </template>
            </li>
          </ul>
          <router-link :to="navButton.to"
                       class="flex items-center bg-button px-[1.82vw] py-[0.52vw] rounded-3xl gap-x-[0.42vw]">
            {{ navButton.text }}
            <font-awesome :_class="arrows.arrowRight"/>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import {useHeader} from "../composables/useHeader.js";
import MultiDev from "../assets/logos/MultiDev.vue";
import {reactive} from 'vue';

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

const {headerNavLinks, navButton, arrows, resNavbar} = useHeader();
</script>

