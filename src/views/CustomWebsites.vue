<template>
  <section
      class="relative bg-home flex flex-col max-lg:items-center gap-y-7 lg:gap-y-5 px-5 sm:px-[20vw] py-10 sm:max-2xl:py-16 2xl:py-20 max-lg:text-center overflow-hidden">
    <img class="absolute -top-20 right-0 max-2xl:hidden" src="../assets/images/custom-websites.png"
         alt="custom websites">
    <h1 class="text-white text-4xl sm:max-2xl:text-5xl 2xl:text-6xl font-bold lg:font-medium">
      <span class="text-button" v-text="'Custom'"/> Websites
    </h1>
    <p class="lg:w-3/5 text-desc sm:text-xl tracking-tighter"
       v-text="'Whether you’re looking to build a custom marketing website or the next Twitter we can help you build anything you’re envisioning.'"/>
    <router-link :to="{name: 'Contact'}" v-text="'Get In Touch'"
                 class="text-white w-fit px-8 py-4 border-2 border-desc rounded-4xl max-sm:hidden"/>
  </section>
  <section class="max-sm:mx-5">
    <div class="flex max-2xl:flex-col max-2xl:items-center">
      <div class="2xl:w-1/2 flex flex-col gap-y-8 py-20 md:py-36 sm:px-12 [&_p]:text-[#52627A] [&_p]:text-lg">
        <h2 class="text-label font-semibold text-2xl sm:max-2xl:text-3xl 2xl:text-4xl max-2xl:text-center"
            v-text="'Custom Websites Set You Apart'"/>
        <p>In a world where attention spans are decreasing by the day you need to stand
          out from the crowd. One way to
          do that is by creating a custom website that is unique to you and your brand.</p>
        <p>Having a custom website means you’re getting a fully built website from
          scratch which includes a design and
          development process from the ground up.</p>
        <p v-text="'This comes with many benefits including:'"/>
        <ul class="md:ml-10">
          <li><p v-text="'Unique Design'"/></li>
          <li><p v-text="'Structured Around Your Content'"/></li>
          <li><p v-text="'More Credibility'"/></li>
          <li><p v-text="'Faster Page Speeds'"/></li>
        </ul>
        <router-link class="bg-button flex items-center gap-x-2 w-fit px-8 py-4 rounded-4xl"
                     :to="{name: 'Contact'}">
          Work With Us <i class="fa-solid fa-arrow-right"/>
        </router-link>
      </div>
      <img src="../assets/images/div.full-bg.png" alt="background image"/>
    </div>
  </section>
  <technologies/>
  <reviews/>
  <projects/>
  <contact/>
</template>
<script setup>
import Technologies from "../components/Technologies.vue";
import Reviews from "../components/Reviews.vue";
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";
</script>