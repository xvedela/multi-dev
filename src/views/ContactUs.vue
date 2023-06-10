<template>
  <section class="bg-[#6967CE]">
    <div
      class="flex flex-col pt-[max(40px,4.69vw)] pb-[max(40px,3.91vw)] gap-y-[1.04vw] max-md:gap-7 w-[max(350px,39.58vw)] ml-[max(20px,20.31vw)] max-md:text-center max-md:mx-auto"
    >
      <h1
        class="text-white text-[max(36px,3.07vw)] font-medium max-md:font-bold leading-[max(48px,3.44vw)] ml-4 max-md:ml-0"
        v-text="'Contact Us'"
      />
      <p
        class="text-[#BDC8DB] text-[max(16px,1.15vw)] font-normal leading-[max(24px,1.61vw)] tracking-[-0.5px] ml-4 max-md:ml-0"
        v-text="
          `Whether you're needing help with a new project or just want to pick our brain we're here for you!`
        "
      />
    </div>
  </section>
  <contact />
</template>

<script setup>
import Contact from "../components/Contact.vue";
</script>
