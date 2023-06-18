<template>
  <section class="bg-[#6967CE] text-center">
    <div class="page-header">
      <h1 v-text="ourWork.pageHeader.Label"/>
      <p class="page-header-description" v-text="ourWork.pageHeader.Description"/>
    </div>
  </section>
  <div class="websites">
    <div v-for="(project, index) in ourWork.projects.websites" :key="index" class="project-container"
         :class="project.linearGradient">
      <img :src="project.companyImgUrl" class="company-image" :alt="project.companyName + ' logo'"/>
      <div class="flex flex-col mr-[5.73vw] max-xl:ml-10 mb-[max(30px,4.17vw)]">
        <h2 v-text="project.companyName"
            class="mb-6 text-[max(24px,1.88vw)] leading-[47px] font-medium"/>
        <p v-text="project.companyDescription"
           class="mb-8 text-lg leading-7 text-[#EEF8FF]"/>
        <a href="#" v-text="ourWork.projects.buttonLabel" class="w-fit px-8 py-4 rounded-4xl leading-6"
           :class="project.buttonBackgroundColor + ' ' + project.textColor"/>
      </div>
    </div>
  </div>
  <section>
    <div class="page-footer">
      <p class="text-white text-[max(24px,3.18vw)] leading-[4.53vw]"
         v-text="ourWork.pageFooter.contactLabel"/>
      <router-link class="contact-description" :to="{ name: ourWork.pageFooter.contact.name }"
                   v-text="ourWork.pageFooter.contact.description"/>
    </div>
  </section>
</template>

<script setup>
import useOurWork from "../composables/useOurWork.js";

const ourWork = useOurWork();
</script>

<style scoped>
.page-header {
  @apply flex flex-col items-center gap-y-7 md:gap-y-[1.04vw] mx-auto py-10 md:pt-[4.69vw] md:pb-[3.91vw];
}

h1 {
  @apply text-white text-[max(36px,3.07vw)] font-medium max-md:font-bold leading-[max(48px,3.44vw)];
}

.page-header-description {
  @apply md:w-1/3 text-[#BDC8DB] text-[max(16px,1.15vw)] leading-[max(24px,1.61vw)] tracking-[-0.5px];
}

.websites {
  @apply w-[max(390px,57.81vw)] flex flex-col gap-y-12 md:gap-y-[1.56vw] mx-auto mt-16 md:mt-[1.82vw] mb-48 md:mb-[3.39vw] text-white;
}

.project-container {
  @apply flex max-xl:flex-col pt-[3.8vw] gap-y-8 md:gap-x-[5.73vw] rounded-3xl md:rounded-xl overflow-hidden;
}

.company-image {
  @apply w-[max(354px,28.13vw)] max-md:mx-auto max-xl:ml-10 max-xl:rounded-md max-md:rounded-[20px] object-cover;
}

.page-footer {
  @apply bg-[#6967CE] flex flex-col md:items-center gap-y-2 md:gap-y-1 py-[max(40px,4.38vw)] max-md:pl-5 max-md:text-left;
}

.contact-description {
  @apply w-fit text-[#FFB902] text-[max(24px,3.18vw)] underline leading-[max(28px,4.53vw)];
}
</style>
