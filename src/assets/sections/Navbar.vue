<template>
  <nav class="bg-[#5A58AB] px-8 py-5 sticky">
    <div class="flex items-center">
      <router-link :to="{name: 'Home'}">
        <logo-multi-dev/>
      </router-link>
      <div class="flex items-center justify-between w-full max-sm:[&>*]:hidden">
        <div></div>
        <ul class="flex gap-x-10 text-white">
          <li>
            <router-link :to="{name: 'Home'}">Home</router-link>
          </li>
          <li>
            <a href="#" class="flex items-center opacity-60">
              Services
              <angle-quote-down/>
            </a>
          </li>
          <li>
            <router-link :to="{ name: 'OurWork' }" class="opacity-60"
            >Our Work
            </router-link
            >
          </li>
          <li>
            <a href="#" class="opacity-60">Blog</a>
          </li>
        </ul>
        <a
            href="#"
            class="flex items-center bg-[#FFB902] px-9 py-2.5 rounded-3xl gap-x-1"
        >
          Let's Talk
          <arrow-right color="black"/>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import LogoMultiDev from "../logos/LogoMultiDev.vue";
import AngleQuoteDown from "../icons/AngleQuoteDown.vue";
import ArrowRight from "../icons/ArrowRight.vue";
</script>
