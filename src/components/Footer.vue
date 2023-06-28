<template>
  <footer class="bg-footer text-white">
    <div
        class="w-[90vw] sm:max-2xl:w-[75vw] 2xl:w-[60vw] flex flex-col gap-y-10 lg:gap-y-24 pt-12 sm:max-2xl:pt-16 2xl:pt-20 pb-10 sm:max-2xl:pb-8 2xl:pb-6 mx-5 sm:mx-auto">
      <div class="flex max-lg:flex-col max-lg:gap-y-8">
        <div class="flex flex-col gap-y-8">
          <router-link :to="{ name: 'Home' }" class="max-lg:mb-4">
            <img src="../assets/logos/multi-dev.svg" alt="multi dev logo"/>
          </router-link>
          <p class="w-7/12 text-sm -mb-1" v-text="text"/>
          <span class="block -mb-4" v-text="label"/>
          <ul class="flex gap-x-6">
            <li v-for="(link, index) in social" :key="index">
              <a :href="link.url" v-html="link.icon" target="_blank"/>
            </li>
          </ul>
        </div>
        <div
            class="flex gap-x-12 lg:gap-x-7 [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-y-4">
          <ul :class="learnMore">
            <li v-for="(link, index) in links" :key="index">
              <router-link :to="{ name: link.name }" v-text="link.title"/>
            </li>
          </ul>
          <ul :class="locations" class="flex-shrink-0">
            <li v-for="(company, index) in companies" :key="index">
              <a :href="company.url" v-text="company.name" target="_blank"/>
            </li>
          </ul>
        </div>
      </div>
      <div
          class="flex max-lg:flex-col-reverse justify-between max-lg:gap-y-7 pt-10 lg:pt-5 border-t-2 border-t-white/20 text-xs opacity-80">
        <span v-html="copyright"/>
        <ul class="flex gap-x-6">
          <li v-for="(link, index) in footer" :key="index">
            <a :href="link.url" v-text="link.title" target="_blank"/>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import useFooter from "../composables/components/useFooter.js";

const {text, label, social, learnMore, links, locations, companies, copyright, footer} = useFooter();
</script>
