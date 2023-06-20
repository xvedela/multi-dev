<template>
  <section class="bg-home mb-32 md:mb-12 flex flex-col items-center gap-y-32 px-4 py-10 sm:py-20 text-white">
    <div class="sm:w-[60vw] flex flex-col items-center gap-y-10 md:gap-y-8">
      <a
          href="https://upcity.com/"
          target="_blank"
          class="bg-[#2C4163] flex items-center gap-x-3 py-3 px-5 rounded-3xl"
      >
        <ul class="flex gap-x-1">
          <li v-for="star in 5" :key="star" v-html="upCity.star"/>
        </ul>
        <p v-text="'5.0 Rating'"/>
        <span class="text-desc" v-text="'|'"/>
        <component :is="upCity.logo"/>
      </a>
      <h1
          v-text="header.label"
          class="text-center text-4xl md:text-6xl font-bold md:leading-tight"
      />
      <p
          v-text="header.text"
          class="md:w-2/3 md:text-lg text-center text-desc"
      />
      <div class="flex gap-x-4 md:gap-x-7">
        <router-link
            :to="{ name: 'Contact' }"
            v-html="buttons.bac"
            class="bg-button flex items-center gap-x-2 px-8 py-4 text-black rounded-4xl"
        />
        <router-link
            :to="{ name: 'OurWork' }"
            v-html="buttons.ow"
            class="bg-transparent flex items-center gap-x-2 px-9 py-4 border-2 border-desc rounded-4xl"
        />
      </div>
    </div>
    <div class="flex flex-col items-center gap-y-16 md:gap-y-14">
      <h5
          class="flex items-center"
          :class="partners.before + ' ' + partners.after"
          v-text="'Trusted by Innovative Companies Worldwide'"
      ></h5>
      <ul class="flex items-center gap-x-11">
        <li v-for="(logo, index) in partners.logos" :key="index">
          <component :is="logo"/>
        </li>
      </ul>
    </div>
  </section>
  <section class="flex flex-col items-center gap-y-20 md:gap-y-44 mb-28 md:mb-20 mt-7 md:mt-24 max-sm:mx-5">
    <div class="sm:w-[60vw] flex flex-col items-center gap-y gap-y-20 md:gap-y-16">
      <div class="md:w-3/5 flex flex-col gap-y-5 text-center">
        <h2 v-html="techsHeader.label" class="text-label font-semibold text-2xl md:text-4xl tracking-tight"/>
        <p v-text="techsHeader.text" class="text-[#52627A] md:text-lg"/>
      </div>
      <div class="bg-home flex max-md:flex-col rounded-3xl text-white max-md:gap-y-8">
        <div v-for="(icon, index) in icons" :key="index"
             class="md:w-1/2 flex flex-col items-center gap-y-5 px-20 py-8 md:pb-16 md:pt-20 text-center">
          <div class="bg-[#8AC0FF1A] w-24 h-24 rounded-[50%] flex justify-center items-center">
            <component :is="icon.icon"/>
          </div>
          <h3 v-text="icon.label"/>
          <p v-text="icon.text" class="text-desc"/>
          <router-link :to="icon.name" v-html="buttons.lm"
                       class="flex gap-x-2 items-center px-8 py-4 border-2 border-desc rounded-4xl"/>
        </div>
      </div>
    </div>
    <div class="w-fit flex flex-col items-center gap-y-8 md:gap-y-14">
      <h2 v-text="techs.label" class="text-label font-semibold text-2xl md:text-4xl tracking-tight"/>
      <ul class="flex gap-x-20">
        <li v-for="(logo, index) in techs.logos" :key="index">
          <component :is="logo"/>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import useHome from "../composables/useHome.js";

const {upCity, header, buttons, partners, icons, techsHeader, techs} = useHome();
</script>
