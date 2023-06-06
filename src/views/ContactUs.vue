<template>
  <section :class="contactUsCss.section">
    <div :class="contactUsCss.container">
      <h1 :class="contactUsCss.h1">
        {{ contactUsData.h1 }}
      </h1>
      <p :class="contactUsCss.p">
        {{ contactUsData.p }}
      </p>
    </div>
  </section>
  <contact />
</template>

<script setup>
import Contact from "../components/Contact.vue";

const contactUsData = {
  h1: "Contact Us",
  p: "Whether you're needing help with a new project or just want to pick our brain we're here for you!",
};
const contactUsCss = {
  section: "bg-[#6967CE]",
  container:
    "flex flex-col pt-[max(40px,4.69vw)] pb-[max(40px,3.91vw)] gap-y-[1.04vw] max-sm:gap-7 w-[max(350px,39.58vw)] ml-[max(20px,20.31vw)] max-sm:text-center max-sm:mx-auto",
  h1: "text-white text-[max(36px,3.07vw)] font-medium max-sm:font-bold leading-[max(48px,3.44vw)] ml-4 max-sm:ml-0",
  p: "text-[#BDC8DB] text-[max(16px,1.15vw)] font-normal leading-[max(24px,1.61vw)] tracking-[-0.5px] ml-4 max-sm:ml-0",
};
</script>
