<template>
  <section class="bg-home px-5 sm:px-[20vw] py-10 sm:max-2xl:py-16 2xl:py-20 max-lg:text-center">
    <h1 class="text-white text-4xl sm:max-2xl:text-5xl 2xl:text-6xl font-bold lg:font-medium" v-text="'Contact Us'"/>
    <p class="mt-7 lg:mt-5 lg:w-3/5 text-desc sm:text-xl tracking-tighter"
       v-text="`Whether you're needing help with a new project or just want to pick our brain we're here for you!`"/>
  </section>
  <contact/>
</template>

<script setup>
import Contact from "../components/Contact.vue";
</script>
