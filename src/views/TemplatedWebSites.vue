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
  <section class=" py-24 max-md:px-5 ">
    <div class="md:w-[60vw] mx-auto flex flex-col items-center gap-y-12">
      <h2 class="text-label font-semibold text-2xl md:text-4xl text-center">
        Simple and <span class="text-home">Affordable</span> Pricing
      </h2>
      <p class="text-[#212529] md:w-2/5 text-center">
        We can get your website up and running for as little as $500.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
        <div class="rounded-3xl bg-white p-8 text-[#515D72] flex flex-col gap-y-3 shadow-2xl">
          <p>BASIC</p>
          <p><span class="text-3xl text-[#25344F] font-medium">$199</span> per month</p>
          <ul class="flex flex-col gap-y-3">
            <li class="bg-[#EBF6FF]"><i class="fa-solid fa-circle fa-2xs text-[#1AA2EF]"/> Up to 5 Pages</li>
            <li><i class="fa-solid fa-circle fa-2xs text-[#1AA2EF]"/> Hosting Included</li>
            <li><i class="fa-solid fa-circle fa-2xs text-[#1AA2EF]"/> SEO Friendly</li>
            <li><i class="fa-solid fa-circle fa-2xs text-[#1AA2EF]"/> Lifetime Updates</li>
            <li><i class="fa-solid fa-circle fa-2xs text-[#1AA2EF]"/> 24-month Service Minimum</li>
          </ul>
        </div>
        <div class="rounded-3xl bg-[#25344F] p-8 text-[#F0F0F0] flex flex-col gap-y-3 shadow-2xl">
          <p>STANDARD</p>
          <p><span class="text-3xl text-white font-medium">$249</span> per month</p>
          <ul class="flex flex-col gap-y-3">
            <li class="bg-[#214863]"><i class="fa-solid fa-circle fa-2xs text-[#5CE5DE]"/> Up to 10 Pages</li>
            <li><i class="fa-solid fa-circle fa-2xs text-[#5CE5DE]"/> Hosting Included</li>
            <li><i class="fa-solid fa-circle fa-2xs text-[#5CE5DE]"/> SEO Friendly</li>
            <li><i class="fa-solid fa-circle fa-2xs text-[#5CE5DE]"/> Lifetime Updates</li>
            <li><i class="fa-solid fa-circle fa-2xs text-[#5CE5DE]"/> Google Analytics Setup</li>
            <li><i class="fa-solid fa-circle fa-2xs text-[#5CE5DE]"/> Google Business Profile Setup</li>
            <li><i class="fa-solid fa-circle fa-2xs text-[#5CE5DE]"/> 24-month Service Minimum</li>
          </ul>
        </div>
        <div class="rounded-3xl bg-white p-8 text-[#515D72] flex flex-col gap-y-3 shadow-2xl">
          <p>PREMIUM</p>
          <p><span class="text-3xl text-[#25344F] font-medium">$299</span> per month</p>
          <ul class="flex flex-col gap-y-3">
            <li class="w-full bg-[#FFF7E6]"><i class="fa-solid fa-circle fa-2xs text-button"/> Up to 15 Pages</li>
            <li><i class="fa-solid fa-circle fa-2xs text-button"/> Hosting Included</li>
            <li><i class="fa-solid fa-circle fa-2xs text-button"/> SEO Friendly</li>
            <li><i class="fa-solid fa-circle fa-2xs text-button"/> Lifetime Updates</li>
            <li><i class="fa-solid fa-circle fa-2xs text-button"/> Google Analytics Setup</li>
            <li><i class="fa-solid fa-circle fa-2xs text-button"/> Google Business Profile Setup</li>
            <li><i class="fa-solid fa-circle fa-2xs text-button"/> 24-month Service Minimum</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-[#EEF8FF] py-24 max-md:px-5">
    <div class="md:w-[60vw] mx-auto flex flex-col items-center gap-y-12">
      <h2 class="text-label font-semibold text-2xl md:text-4xl text-center">
        A Few of Our Template <span class="text-home">Projects</span>
      </h2>
      <div class="flex max-md:flex-col gap-7">
        <div class="rounded-3xl bg-white">
          <img src="../assets/images/template-screenshot1.png" alt="">
          <div class="flex items-center justify-between px-6 py-8">
            <p class="text-[#515D72]">ATM Sports</p>
            <a href="#" class="text-sm text-[#23A6F0]">
              View Website <i class="fa-solid fa-arrow-right"/>
            </a>
          </div>
        </div>
        <div class="rounded-3xl bg-white">
          <img src="../assets/images/template-screenshot2.png" alt="">
          <div class="flex items-center justify-between px-6 py-8">
            <p class="text-[#515D72]">Credit 911</p>
            <a href="#" class="text-sm text-[#23A6F0]">
              View Website <i class="fa-solid fa-arrow-right"/>
            </a>
          </div>
        </div>
        <div class="rounded-3xl bg-white">
          <img src="../assets/images/template-screenshot3.png" alt="">
          <div class="flex items-center justify-between px-6 py-8">
            <p class="text-[#515D72]">Atlantic Food Bars</p>
            <a href="#" class="text-sm text-[#23A6F0]">
              View Website <i class="fa-solid fa-arrow-right"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>

  </section>
  <section>
    <contact/>
  </section>
</template>
<script setup>
import Contact from "../components/Contact.vue";
</script>