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
  <section class="flex flex-col items-center gap-y-12 py-24 max-md:mx-5 md:w-[60vw] mx-auto">
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
        <p class="text-[#515D72] ">Since we have a starting point we’re able to build
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
  <section class="bg-[#EEF8FF] py-24 max-md:px-5">
    <div class="md:w-[60vw] mx-auto flex flex-col items-center gap-y-12">
      <h2 class="text-label font-semibold text-2xl md:text-4xl text-center">
        Build for <span class="text-home">Speed and Seo</span>
      </h2>
      <p class="text-[#212529] md:w-2/5 text-center">
        Everything you would expect with a website comes standard with us.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white flex flex-col gap-y-5 p-8 rounded-3xl">
          <img src="../assets/icons/hosting-icon.svg" alt="time icon" class="w-fit"/>
          <h3 class="text-[#25344F] font-medium text-3xl">Hosting Included</h3>
          <p class="text-[#515D72] ">Hosting fees are built right into the monthly payment.</p>
        </div>
        <div class="bg-white flex flex-col gap-y-5 p-8 rounded-3xl">
          <img src="../assets/icons/edits-icon.svg" alt="time icon" class="w-fit"/>
          <h3 class="text-[#25344F] font-medium text-3xl">Unlimited Edits</h3>
          <p class="text-[#515D72] ">We’ll help you update any content or photos you might want
            at any time!</p>
        </div>
        <div class="bg-white flex flex-col gap-y-5 p-8 rounded-3xl">
          <img src="../assets/icons/fast-icon.svg" alt="time icon" class="w-fit"/>
          <h3 class="text-[#25344F] font-medium text-3xl">Wicked Fast</h3>
          <p class="text-[#515D72] ">We know how to get your business ranking on Google and all
            of our websites are built with SEO in mind.</p>
        </div>
        <div class="bg-white flex flex-col gap-y-5 p-8 rounded-3xl">
          <img src="../assets/icons/seo-icon.svg" alt="time icon" class="w-fit"/>
          <h3 class="text-[#25344F] font-medium text-3xl">SEO Friendly</h3>
          <p class="text-[#515D72] ">Since our websites are built from scratch, you can enjoy
            blazing fast page speed scores which help your users stay on
            your website but also rank higher with SEO.</p>
        </div>
        <div class="bg-white flex flex-col gap-y-5 p-8 rounded-3xl">
          <img src="../assets/icons/analytics-icon.svg" alt="time icon" class="w-fit"/>
          <h3 class="text-[#25344F] font-medium text-3xl">Google Analytics</h3>
          <p class="text-[#515D72] ">It’s important to track how your website is being used and
            Google Analytics helps you understand exactly who your
            users are and where they’re going.</p>
        </div>
        <div class="bg-white flex flex-col gap-y-5 p-8 rounded-3xl">
          <img src="../assets/icons/profile-icon.svg" alt="time icon" class="w-fit"/>
          <h3 class="text-[#25344F] font-medium text-3xl">Google Business Profile</h3>
          <p class="text-[#515D72] ">We also help you set up Google Business Profile which is a
            great tool for local businesses to get more leads.</p>
        </div>
      </div>
    </div>
  </section>
  <section>
    <contact/>
  </section>
</template>
<script setup>
import Contact from "../components/Contact.vue";
</script>