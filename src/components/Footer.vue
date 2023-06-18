<template>
  <footer class="bg-footer flex flex-col pt-12 md:pt-[4vw] px-5 md:px-[20vw] text-white">
    <div class="flex max-md:flex-col justify-between">
      <div class="flex flex-col gap-y-7">
        <component :is="logo"/>
        <p
            class="w-7/12 text-sm"
            v-text="text"
        />
        <span class="block" v-text="label"/>
        <ul class="flex gap-x-6">
          <li v-for="(link, index) in social" :key="index">
            <a :href="link.url">
              <i class="fa-brands fa-xl" :class="link.icon"/>
            </a>
          </li>
        </ul>
      </div>
      <div class="flex gap-x-5 md:gap-x-[1.5vw] max-md:mt-8">
        <ul class="flex flex-col gap-y-4" :class="links.before">
          <li v-for="(link, index) in links._" :key="index">
            <router-link :to="{ name: link.name }" v-text="link.label"/>
          </li>
        </ul>
        <ul class="flex flex-col gap-y-4" :class="companies.before">
          <li
              v-for="(company, index) in companies._"
              :key="index"
          >
            <a :href="company.url" v-html="company.name + ' Web Design'"/>
          </li>
        </ul>
      </div>
    </div>
    <div
        class="flex max-md:flex-col-reverse justify-between max-md:gap-y-7 max-md:py-10 pt-[1.3vw] mt-10 md:mt-[5.21vw] my-[1.3vw] border-t-2 border-t-white/20 text-xs opacity-80;">
      <span v-html="sub.text"/>
      <ul class="flex justify-between gap-x-[1.3vw]">
        <li v-for="(link, index) in sub.links" :key="index">
          <a :href="link.url" v-text="link.label"/>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import useFooter from "../composables/useFooter";

const {logo, links, text, label, social, companies, sub} = useFooter();
</script>
