<template>
  <section
      class="flex flex-col max-md:items-center gap-y-7  md:gap-y-5 bg-home px-5 md:px-[20vw] py-10 md:py-20 max-md:text-center overflow-hidden">
    <h1 class="md:w-2/3 text-white text-4xl md:text-6xl font-bold md:font-medium">
      Templated Websites for
      <span class="text-button">Small Businesses</span>
    </h1>
    <p class="md:w-3/5 text-desc md:text-xl">
      If your business doesn’t need a custom website you can utilize our
      templates and get it up and running in 2-3 weeks!
    </p>
    <router-link :to="{name: 'Contact'}"
                 class="text-white w-fit max-md:mt-7 px-8 py-4 border-2 border-desc rounded-4xl">
      Get In Touch
    </router-link>
  </section>
  <section class="flex flex-col items-center gap-y-12 py-24 w-[60vw] mx-auto">
    <h2 class="text-label font-semibold text-2xl md:text-4xl">
      Why Use <span class="text-home">Templates?</span>
    </h2>
    <p class="text-[#212529] md:w-2/5 text-center">
      We’re glad you asked! There’s two main benefits to going with templates versus a custom website:
    </p>
    <div class="md:w-3/5 flex max-md:flex-col gap-7">
      <div class="bg-[#FFF8EB] flex flex-col gap-y-5 p-8 rounded-3xl">
        <img src="../assets/icons/time-icon.svg" alt="time icon" class="w-fit"/>
        <h3 class="text-[#25344F] font-medium text-3xl">Time</h3>
        <p class="text-[#515D72] " >Since we have a starting point we’re able to build
          quickly and efficiently.</p>
      </div>
      <div class="bg-[#EBFEFE] flex flex-col gap-y-5 p-8 rounded-3xl">
        <img src="../assets/icons/money-icon.svg" alt="money icon" class="w-fit"/>
        <h3 class="text-[#25344F] font-medium text-3xl">Money</h3>
        <p class="text-[#515D72]">Our base templates are already built and we just
          need to reskin it to match your brand.</p>
      </div>
    </div>
    <p class="text-[#212529] text-center md:w-2/5">
      If your company doesn’t need a flashy or totally unique website this is usually the best way to go.
    </p>
    <img src="../assets/images/template-preview.png" alt="template preview"/>
  </section>
  <section>
    <contact/>
  </section>
</template>
<script setup>
import Contact from "../components/Contact.vue";
</script>