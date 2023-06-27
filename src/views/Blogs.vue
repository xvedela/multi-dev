<template>
  <section class="bg-home text-center py-10 sm:max-2xl:py-16 2xl:py-24">
    <h1 class="text-white text-4xl sm:max-2xl:text-5xl 2xl:text-6xl font-bold lg:font-medium" v-text="'Blog'"/>
  </section>
  <section class="py-10 md:py-20">
    <div
        class="w-[90vw] sm:max-2xl:w-[75vw] 2xl:w-[60vw] mx-5 sm:mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-x-7 gap-y-10 lg:gap-y-12">
      <div v-for="(blog, index) in blogs" :key="index">
        <router-link :to="{name: 'BlogId', params: {id: index}}">
          <img class="mb-5 lg:mb-6 w-full" src="../assets/blogs/10-landing-page-dos-and-donts.jpg" :alt="blog.meta">
        </router-link>
        <router-link :to="{name: 'BlogId', params: {id: index}}">
          <h2 class="mb-4 text-home text-xl sm:max-2xl:text-2xl 2xl:text-3xl font-medium leading-9"
              v-text="blog.title"/>
        </router-link>
        <p class="mb-4 lg:mb-6 text-meta" v-text="blog.meta"/>
        <p class="mb-5 text-txt text-lg leading-8" v-text="blog.text"/>
        <router-link :to="{name: 'BlogId', params: {id: index}}"
                     class="block w-fit bg-button px-8 py-4 rounded-4xl" v-text="'Read Post'"/>
      </div>
    </div>
  </section>
  <section
      class="bg-home lg:text-center max-lg:px-5 py-10 sm:max-2xl:py-16 2xl:py-24 text-2xl sm:max-2xl:text-4xl 2xl:text-6xl [&>*]:leading-normal">
    <p class="text-white" v-text="'Ready to work with us?'"/>
    <router-link class="text-button underline" :to="{ name: 'Contact' }" v-text="`Let's build something awesome.`"/>
  </section>
</template>

<script setup>
import useBlogs from "../composables/views/useBlogs.js";

const blogs = useBlogs();
</script>