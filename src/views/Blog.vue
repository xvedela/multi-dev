<template>
  <section class="max-sm:pt-10 max-sm:pb-36 sm:max-2xl:py-28 2xl:py-20">
    <div
        class="mx-auto max-sm:mx-5 max-sm:w-[90vw] sm:w-[50vw] sm:[&_ul]:ml-10 [&_p]:mt-5 [&_p]:text-txt [&_p]:text-lg [&_strong]:text-home [&_h2]:mt-12 [&_h2]:text-home [&_h2]:text-xl sm:[&_h2]:text-2xl">
      <h1 class="text-home max-sm:text-xl sm:max-2xl:text-2xl 2xl:text-3xl font-medium leading-9" v-text="blog.title"/>
      <div class="flex items-center gap-x-2 mt-4">
        <img :src="blog.author" :alt="blog.meta"/>
        <span class="text-meta" v-text="blog.meta"/>
      </div>
      <div v-html="blog.header"/>
      <img class="w-full mt-5" :src="blog.img" alt="blog.meta"/>
      <div v-html="blog.footer"/>
    </div>
  </section>
  <section
      class=" bg-home lg:text-center max-lg:px-5 max-sm:py-10 sm:max-2xl:py-16 2xl:py-24 max-sm:text-2xl sm:max-2xl:text-4xl 2xl:text-6xl [&>*]:leading-normal">
    <p class="text-white" v-text="'Ready to work with us?'"/>
    <router-link class="text-button underline" :to="{ name: 'Contact' }" v-text="'Contact Us Today!'"/>
  </section>
</template>

<script setup>
import useBlog from "../composables/views/useBlog.js";
import {useRoute} from "vue-router";

const route = useRoute();

const blog = useBlog(route.params.id)
</script>

