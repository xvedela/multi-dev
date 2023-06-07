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
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <div
              class="relative flex items-center hover:cursor-pointer"
              @click="toggleDisplay"
            >
              <p class="opacity-60">Services</p>
              <angle-quote-down v-if="!display" class="opacity-60" />
              <angle-quote-up v-else class="opacity-60" />
              <div v-if="display" class="absolute min-w-max text-black">
                <router-link
                  :to="{ name: 'TemplatedSites' }"
                  class="hover:bg-[#FFB902]"
                  >Templated Sites</router-link
                >
                <router-link
                  :to="{ name: 'CustomWebsite' }"
                  class="hover:bg-[#FFB902]"
                  >Custom Website</router-link
                >
              </div>
            </div>
          </li>
          <li>
            <router-link :to="{ name: 'OurWork' }" class="opacity-60"
              >Our Work
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Blog' }" class="opacity-60"
              >Blog</router-link
            >
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
      <div class="hidden max-sm:block hover:cursor-pointer" @click="toggleDisplay1">
        <bars />
        <div
          v-if="display1"
          class="bg-white absolute flex items-center top-0 left-0 w-full"
        >
          <p @click="toggleDisplay1" class="hover:cursor-pointer w-fit">X</p>
          <ul class="flex flex-col items-center gap-x-[2.08vw] w-full">
            <li>
              <router-link :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'TemplatedSites' }"
                class="hover:bg-[#FFB902]"
                >Templated Sites</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'CustomWebsite' }"
                class="hover:bg-[#FFB902]"
                >Custom Website</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'OurWork' }">Our Work </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Blog' }">Blog</router-link>
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
    </div>
  </nav>
</template>

<script setup>
import LogoMultiDev from "../logos/LogoMultiDev.vue";
import AngleQuoteDown from "../icons/AngleQuoteDown.vue";
import AngleQuoteUp from "../icons/AngleQuoteUp.vue";
import ArrowRight from "../icons/ArrowRight.vue";
import Bars from "../icons/Bars.vue";
import { ref } from "vue";

const display = ref(false);
const display1 = ref(false);

const toggleDisplay = () => {
  display.value = !display.value;
};

const toggleDisplay1 = () => {
  display1.value = !display1.value;
};
</script>
