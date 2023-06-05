<template>
  <section class="bg-[#6967CE] h-[max(185px,48.7vh)]">
    <div
      class="flex flex-col gap-y-[2.8vh] max-sm:gap-y-[27px] w-[max(350px,49.4vw)] ml-[25.4vw] pt-[max(40px,11.8vh)] max-sm:text-center max-sm:mx-auto"
    >
      <h1
        class="text-white text-[max(36px,3.8vw)] font-medium max-sm:font-bold leading-[max(48px,4.3vw)]"
      >
        Contact Us
      </h1>
      <p
        class="text-[#BDC8DB] text-[max(16px,1.1vw)] font-normal leading-[max(24px,2.1vw)] tracking-[-0.5px]"
      >
        Whether you're needing help with a new project or just want to pick our
        brain we're here for you!
      </p>
    </div>
  </section>
  <contact />
</template>

<script setup>
import Contact from "../components/Contact.vue";
</script>
