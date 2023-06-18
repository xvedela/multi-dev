<template>
  <section>
    <h1 class="contact-label" v-text="header.label"/>
    <p
        class="contact-description"
        v-text="header.text"
    />
  </section>
  <component :is="form.component"/>
</template>

<script setup>
import useContact from "../composables/useContact.js";

const {header, form} = useContact();
</script>

<style scoped>
section:first-child {
  @apply bg-home flex flex-col gap-y-7 md:gap-y-[1.04vw] py-10 md:pt-[4.38vw] md:pb-[5.52vw] max-md:px-5 pl-[20.31vw] max-md:text-center;
}

.contact-label {
  @apply text-white text-[max(36px,3.07vw)] font-bold md:font-medium leading-[max(48px,3.44vw)];
}

.contact-description {
  @apply text-[#BDC8DB] w-full md:w-1/2 text-[max(16px,1.15vw)] leading-[max(24px,1.61vw)];
}
</style>
