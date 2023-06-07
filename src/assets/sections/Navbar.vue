<template>
  <nav
      class="bg-[#5A58AB] pl-[max(15px,1.82vw)] pr-[max(22px,1.82vw)] py-[max(20px,1.2vw)] sticky"
  >
    <div class="flex items-center max-sm:justify-between">
      <router-link :to="{ name: 'Home' }">
        <logo-multi-dev/>
      </router-link>
      <div class="flex items-center justify-between w-full max-sm:hidden">
        <div></div>
        <ul class="flex gap-x-[2.08vw] text-white">
          <li>
            <router-link :to="{ name: 'Home' }" v-text="'Home'"/>
          </li>
          <li>
            <div
                class="relative flex items-center opacity-60 hover:cursor-pointer"
                @click="toggleDisplay"
            >
              <p v-text="'Services'"/>
              <angle-quote-down :class="{'rotate-180': display}"/>
              <div v-if="display" class="absolute min-w-max text-black [&>a]:hover:bg-[#FFB902]">
                <router-link
                    :to="{ name: 'TemplatedSites' }"
                    v-text="'Templated Sites'"
                />
                >
                <router-link
                    :to="{ name: 'CustomWebsite' }"
                    v-text="'Custom Website'"
                />
              </div>
            </div>
          </li>
          <li>
            <router-link :to="{ name: 'OurWork' }" class="opacity-60" v-text="'Our Work'"
            />
          </li>
          <li>
            <router-link :to="{ name: 'Blog' }" class="opacity-60" v-text="'Blog'"
            />
          </li>
        </ul>
        <router-link
            :to="{ name: 'ContactUs' }"
            class="flex items-center bg-[#FFB902] px-[1.82vw] py-[0.52vw] rounded-3xl gap-x-[0.42vw]"
        >
          Let's Talk
          <arrow-right color="black"/>
        </router-link>
      </div>

      <!-- responsive navbar -->

      <div class="hidden max-sm:block hover:cursor-pointer z-10" @click="toggleDisplay1">
        <bars v-if="!display1"/>
        <icon-close v-else/>
      </div>
      <div
          v-if="display1"
          class="bg-white absolute top-0 left-0 py-4 flex items-center w-full"
      >
        <ul class="flex flex-col items-center gap-x-[2.08vw] w-full" @click="toggleDisplay1">
          <li>
            <router-link :to="{ name: 'Home' }" v-text="'Home'"/>
          </li>
          <li>
            <router-link
                :to="{ name: 'TemplatedSites' }" v-text="'Templated Sites'"
            />
          </li>
          <li>
            <router-link
                :to="{ name: 'CustomWebsite' }" v-text="'Custom Website'"
            />
          </li>
          <li>
            <router-link :to="{ name: 'OurWork' }" v-text="'Our Work'"/>
          </li>
          <li>
            <router-link :to="{ name: 'Blog' }" v-text="'Blog'"/>
          </li>
          <li>
            <router-link
                :to="{ name: 'ContactUs' }"
                class="flex items-center bg-[#FFB902] px-[1.82vw] py-[0.52vw] rounded-3xl gap-x-[0.42vw]"
            >
              Let's Talk
              <arrow-right color="black"/>
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
import {ref} from "vue";
import IconClose from "../icons/IconClose.vue";

const display = ref(false);
const display1 = ref(false);

const toggleDisplay = () => {
  display.value = !display.value;
};

const toggleDisplay1 = () => {
  display1.value = !display1.value;
};
</script>
