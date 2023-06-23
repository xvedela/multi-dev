<template>
  <section
      class="relative flex flex-col gap-y-7  md:gap-y-5 bg-home px-5 md:px-[20vw] py-10 md:py-20 max-md:text-center overflow-hidden">
    <img class="absolute -top-20 right-0 max-2xl:hidden" src="../assets/images/custom-websites.png"
         alt="custom websites">
    <h1 class=" text-white text-4xl md:text-6xl font-bold md:font-medium">
      <span class="text-button">Custom</span> Websites
    </h1>
    <p class="md:w-3/5 text-desc md:text-xl">
      Whether you’re looking to build a custom marketing website or
      the next Twitter we can help you build anything you’re
      envisioning.
    </p>
    <router-link :to="{name: 'Contact'}"
                 class="text-white w-fit max-md:mt-7 px-8 py-4 border-2 border-desc rounded-4xl">
      Get In Touch
    </router-link>
  </section>
  <section class="flex flex-col items-center gap-y-12 md:gap-y-20 max-sm:mx-5">
    <div class="flex max-2xl:flex-col max-2xl:items-center">
      <div class="2xl:w-1/2 flex flex-col gap-y-8 py-20 md:py-36 sm:px-12">
        <h2 class="text-label font-semibold text-2xl md:text-4xl">Custom Websites Set You Apart</h2>
        <p class="text-[#52627A] text-lg">In a world where attention spans are decreasing by the day you need to stand
          out from the crowd. One way to
          do that is by creating a custom website that is unique to you and your brand.</p>
        <p class="text-[#52627A] text-lg">Having a custom website means you’re getting a fully built website from
          scratch which includes a design and
          development process from the ground up.</p>
        <p class="text-[#52627A] text-lg">This comes with many benefits including:</p>
        <ul class="text-[#52627A] text-lg md:ml-10">
          <li>Unique Design</li>
          <li>Structured Around Your Content</li>
          <li>More Credibility</li>
          <li>Faster Page Speeds</li>
        </ul>
        <router-link
            :to="{ name: 'Contact' }"
            class="w-fit bg-button flex items-center gap-x-2 px-8 py-4 mt-6 text-black rounded-4xl">
          Work With Us <i class="fa-solid fa-arrow-right"/>
        </router-link>
      </div>
      <img src="../assets/images/div.full-bg.png" alt="background image"/>
    </div>
    <technologies/>
  </section>
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