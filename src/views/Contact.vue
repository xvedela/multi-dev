<template>
  <section class="contact-header-section">
    <h1 class="contact-label" v-text="_contact.pageHeader.contactLabel"/>
    <p class="contact-description" v-text="_contact.pageHeader.contactDescription"/>
  </section>
  <contact/>
</template>

<script setup>
import Contact from "../components/Contact.vue";
import getComposable from "../composables";

const _contact = getComposable('contact');
</script>

<style scoped>
.contact-header-section {
  @apply bg-home flex flex-col gap-y-7 md:gap-y-[1.04vw] py-10 md:pt-[4.38vw] md:pb-[5.52vw] max-md:px-5 pl-[20.31vw] max-md:text-center;
}

.contact-label {
  @apply text-white text-[max(36px,3.07vw)] font-bold md:font-medium leading-[max(48px,3.44vw)];
}

.contact-description {
  @apply text-[#BDC8DB] w-full md:w-1/2 text-[max(16px,1.15vw)] leading-[max(24px,1.61vw)];
}
</style>