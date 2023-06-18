<template>
  <header>
    <nav class="flex items-center max-md:justify-between">
      <component :is="header.companyLogo"/>
      <button
          class="block md:hidden z-10"
          @click="toggleNavbar"
          v-html="
          state.navbar ? header.resNavbar.closeIcon : header.resNavbar.menuIcon
        "
      />
      <div class="nav-bar" :class="state.navbar ? 'open' : 'hidden'">
        <div></div>
        <ul class="nav-links">
          <li v-for="(link, index) in header.navLinks" :key="index">
            <div
                v-if="link.name === 'Services'"
                class="relative"
                @click="toggleServices"
            >
              <div class="service-menu">
                <p v-text="link.label"/>
                <button
                    class="pt-1"
                    v-html="state.services ? arrows.angleUp : arrows.angleDown"
                />
              </div>
              <ul
                  v-if="state.services"
                  class="sub-links"
                  @click="state.navbar = false"
              >
                <li v-for="(subLink, index) in link.subLinks" :key="index">
                  <router-link
                      :to="{ name: subLink.name }"
                      v-text="subLink.label"
                      class="sub-link"
                  />
                </li>
              </ul>
            </div>
            <router-link
                v-else
                :to="{ name: link.name }"
                v-text="link.label"
                :class="{ 'opacity-60': link.name !== router.name }"
                @click="state.navbar = false"
            />
          </li>
        </ul>
        <router-link
            :to="{ name: header.navButton.name }"
            v-html="header.navButton.label"
            class="nav-button"
        />
      </div>
    </nav>
  </header>
</template>

<script setup>
import useHeader from "../composables/useHeader";
import useArrows from "../composables/useArrows";
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

const header = useHeader();
const arrows = useArrows();
</script>

<style scoped>
header {
  @apply bg-header sticky pl-4 md:pl-[1.82vw] pr-10 md:pr-[1.82vw] py-5 md:py-[1.2vw];
}

.nav-bar {
  @apply md:w-full md:flex max-md:flex-col md:justify-between text-xl md:text-base;
}

.open {
  @apply bg-white w-full h-[100vh] absolute top-0 left-0 flex items-center py-7;
}

.nav-links {
  @apply max-md:w-full flex max-md:flex-col items-center gap-x-[2.08vw] text-black md:text-white;
}

.service-menu {
  @apply flex items-center hover:cursor-pointer opacity-60 gap-x-1;
}

.sub-links {
  @apply bg-white min-w-max absolute top-[100%] max-md:left-[-50%] flex flex-col gap-y-[0.63vw] px-3 py-3 text-black rounded-md max-md:z-10;
}

.sub-link {
  @apply px-[0.42vw] py-[0.16vw] rounded-2xl hover:bg-button;
}

.nav-button {
  @apply flex items-center bg-button px-[1.82vw] py-[0.52vw] rounded-3xl gap-x-[0.42vw];
}
</style>
