<template>
  <nav
    class="bg-[#5A58AB] pl-[max(15px,1.82vw)] pr-[max(22px,1.82vw)] py-[max(20px,1.2vw)] sticky"
  >
    <div class="flex items-center max-sm:justify-between">
      <router-link :to="{ name: 'Home' }">
        <logo-multi-dev />
      </router-link>
      <div class="flex items-center justify-between w-full max-sm:hidden">
        <div></div>
        <ul class="flex gap-x-[2.08vw] text-white">
          <li>
            <router-link :to="{ name: 'Home' }" v-text="'Home'" />
          </li>
          <li>
            <div
              class="relative flex items-center opacity-60 hover:cursor-pointer"
              @click="toggleServices"
            >
              <p v-text="'Services'" />
              <angle-quote-down :class="{ 'rotate-180': services }" />
              <div
                v-if="services"
                class="absolute top-[100%] min-w-max text-black flex gap-x-[0.63vw]"
              >
                <router-link
                  :to="{ name: 'TemplatedSites' }"
                  class="bg-white px-[0.42vw] py-[0.16vw] rounded-2xl hover:bg-[#FFB902]"
                  v-text="'Templated Sites'"
                />
                <router-link
                  :to="{ name: 'CustomWebsite' }"
                  class="bg-white px-[0.42vw] py-[0.16vw] rounded-2xl hover:bg-[#FFB902]"
                  v-text="'Custom Website'"
                />
              </div>
            </div>
          </li>
          <li>
            <router-link
              :to="{ name: 'OurWork' }"
              class="opacity-60"
              v-text="'Our Work'"
            />
          </li>
          <li>
            <router-link
              :to="{ name: 'Blog' }"
              class="opacity-60"
              v-text="'Blog'"
            />
          </li>
        </ul>
        <router-link
          :to="{ name: 'ContactUs' }"
          class="flex items-center bg-[#FFB902] px-[1.82vw] py-[0.52vw] rounded-3xl gap-x-[0.42vw]"
        >
          Let's Talk
          <arrow-right color="black" />
        </router-link>
      </div>

      <!-- responsive navbar -->

      <div
        class="hidden max-sm:block hover:cursor-pointer z-10"
        @click="toggleNavbar"
      >
        <bars v-if="!navbar" />
        <icon-close v-else />
      </div>
      <div
        v-if="navbar"
        class="bg-white absolute top-0 left-0 py-4 flex items-center w-full"
      >
        <ul
          class="flex flex-col items-center gap-x-[2.08vw] w-full"
          @click="toggleNavbar"
        >
          <li>
            <router-link :to="{ name: 'Home' }" v-text="'Home'" />
          </li>
          <li>
            <router-link
              :to="{ name: 'TemplatedSites' }"
              v-text="'Templated Sites'"
            />
          </li>
          <li>
            <router-link
              :to="{ name: 'CustomWebsite' }"
              v-text="'Custom Website'"
            />
          </li>
          <li>
            <router-link :to="{ name: 'OurWork' }" v-text="'Our Work'" />
          </li>
          <li>
            <router-link :to="{ name: 'Blog' }" v-text="'Blog'" />
          </li>
          <li>
            <router-link
              :to="{ name: 'ContactUs' }"
              class="flex items-center bg-[#FFB902] px-[1.82vw] py-[0.52vw] rounded-3xl gap-x-[0.42vw]"
            >
              Let's Talk
              <arrow-right color="black" />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import LogoMultiDev from "../logos/LogoMultiDev.vue";
import AngleQuoteDown from "../icons/AngleQuoteDown.vue";
import ArrowRight from "../icons/ArrowRight.vue";
import Bars from "../icons/Bars.vue";
import IconClose from "../icons/IconClose.vue";
import { ref } from "vue";

const services = ref(false);
const navbar = ref(false);

const toggleServices = () => {
  services.value = !services.value;
};

const toggleNavbar = () => {
  navbar.value = !navbar.value;
};
</script>
