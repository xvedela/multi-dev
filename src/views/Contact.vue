<template>
  <section class="bg-home max-lg:text-center">
    <div class="w-[90wv] sm:max-2xl:w-[75vw] 2xl:w-[60vw] mx-5 sm:mx-auto py-10 sm:max-2xl:py-16 2xl:py-20">
      <h1 class="text-white text-4xl sm:max-2xl:text-5xl 2xl:text-6xl font-bold lg:font-medium" v-text="heading"/>
      <p class="mt-7 lg:mt-5 lg:w-3/5 text-desc sm:text-xl" v-text="text"/>
    </div>
  </section>
  <contact/>
</template>

<script setup>
import useContact from "../composables/views/useContact.js";
import Contact from "../components/Contact.vue";

const {heading, text} = useContact();
</script>
