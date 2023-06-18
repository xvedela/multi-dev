<template>
  <section
      class="bg-home flex flex-col gap-y-5 md:gap-y-[1vw] py-9 md:pt-[4vw] md:pb-[5vw] pl-[20vw] max-md:px-5 max-md:text-center">
    <h1 class="text-white text-[max(36px,3vw)] font-bold md:font-medium" v-text="header.label"/>
    <p
        class="text-desc w-full md:w-1/2 text-[max(16px,1vw)]"
        v-text="header.text"
    />
  </section>
  <component :is="form.component"/>
</template>

<script setup>
import useContact from "../composables/useContact.js";

const {header, form} = useContact();
</script>
