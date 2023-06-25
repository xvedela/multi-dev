<template>
  <section
      class="bg-home flex flex-col max-lg:items-center gap-y-7 lg:gap-y-5 px-5 sm:px-[20vw] py-10 sm:max-2xl:py-16 2xl:py-20 max-lg:text-center">
    <h1 class="text-white text-4xl sm:max-2xl:text-5xl 2xl:text-6xl font-bold lg:font-medium">
      Templated Websites for<br/><span class="text-button" v-text="'Small Businesses'"/>
    </h1>
    <p class="lg:w-3/5 text-desc sm:text-xl tracking-tighter"
       v-text="'If your business doesn’t need a custom website you can utilize our templates and get it up and running in 2-3 weeks!'"/>
    <router-link class="text-white w-fit px-8 py-4 border-2 border-desc rounded-4xl max-sm:hidden"
                 :to="{name: 'Contact'}" v-text="'Get In Touch'"/>
  </section>
  <section
      class="w-[90wv] sm:max-2xl:w-[75vw] 2xl:w-[60vw] flex flex-col items-center gap-y-10 pt-7 sm:max-2xl:pt-16 pb-20 2xl:py-24 mx-5 sm:mx-auto [&>p]:text-[#212529] [&>p]:lg:w-2/5 [&>p]:text-center">
    <!-- sm:max-2xl: 2xl:-->
    <h2 class="text-label font-medium text-2xl sm:max-2xl:text-3xl 2xl:text-4xl text-center">
      Why Use <span class="text-home" v-text="'Templates?'"/>
    </h2>
    <p v-text="'We’re glad you asked! There’s two main benefits to going with templates versus a custom website:'"/>
    <div
        class="lg:w-4/5 grid grid-cols-1 lg:grid-cols-2 gap-7 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-5 [&>div]:p-8 [&>div]:lg:pb-12 [&>div]:rounded-3xl [&_img]:w-fit [&_h3]:text-[#25344F] [&_h3]:font-medium [&_h3]:text-3xl [&_p]:text-[#515D72]">
      <div class="bg-[#FFF8EB]">
        <img src="../assets/icons/time-icon.svg" alt="time icon"/>
        <h3 v-text="'Time'"/>
        <p v-text="'Since we have a starting point we’re able to build quickly and efficiently.'"/>
      </div>
      <div class="bg-[#EBFEFE]">
        <img src="../assets/icons/money-icon.svg" alt="money icon"/>
        <h3 v-text="'Money'"/>
        <p v-text="'Our base templates are already built and we just need to reskin it to match your brand.'"/>
      </div>
    </div>
    <p v-text="'If your company doesn’t need a flashy or totally unique website this is usually the best way to go.'"/>
    <img src="../assets/images/template-preview.png" alt="template preview"/>
  </section>
  <section class="bg-[#EEF8FF]">
    <div
        class="w-[90wv] sm:max-2xl:w-[75vw] 2xl:w-[60vw] flex flex-col items-center gap-y-10 pt-7 sm:max-2xl:pt-16 pb-20 2xl:py-24 mx-5 sm:mx-auto">
      <h2 class="text-label font-medium text-2xl sm:max-2xl:text-3xl 2xl:text-4xl text-center">
        Build for <span class="text-home" v-text="'Speed and Seo'"/>
      </h2>
      <p class="text-[#212529] lg:w-2/5 text-center"
         v-text="'Everything you would expect with a website comes standard with us.'"/>
      <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-7 [&>div]:bg-white [&>div]:flex [&>div]:flex-col [&>div]:gap-5 [&>div]:p-8 [&>div]:lg:pb-12 [&>div]:rounded-3xl [&_img]:w-fit [&_h3]:text-[#25344F] [&_h3]:font-medium [&_h3]:text-3xl [&_p]:text-[#515D72]">
        <div>
          <img src="../assets/icons/hosting-icon.svg" alt="hosting icon"/>
          <h3 v-text="'Hosting Included'"/>
          <p v-text="'Hosting fees are built right into the monthly payment.'"/>
        </div>
        <div>
          <img src="../assets/icons/edits-icon.svg" alt="edits icon"/>
          <h3 v-text="'Unlimited Edits'"/>
          <p v-text="'We’ll help you update any content or photos you might want at any time!'"/>
        </div>
        <div>
          <img src="../assets/icons/fast-icon.svg" alt="fast icon"/>
          <h3 v-text="'Wicked Fast'"/>
          <p v-text="'We know how to get your business ranking on Google and all of our websites are built with SEO in mind.'"/>
        </div>
        <div>
          <img src="../assets/icons/seo-icon.svg" alt="seo icon"/>
          <h3 v-text="'SEO Friendly'"/>
          <p v-text="'Since our websites are built from scratch, you can enjoy blazing fast page speed scores which help your users stay on your website but also rank higher with SEO.'"/>
        </div>
        <div>
          <img src="../assets/icons/analytics-icon.svg" alt="analytics icon"/>
          <h3 v-text="'Google Analytics'"/>
          <p v-text="'It’s important to track how your website is being used and Google Analytics helps you understand exactly who your users are and where they’re going.'"/>
        </div>
        <div>
          <img src="../assets/icons/profile-icon.svg" alt="profile icon"/>
          <h3 v-text="'Google Business Profile'"/>
          <p v-text="'We also help you set up Google Business Profile which is a great tool for local businesses to get more leads.'"/>
        </div>
      </div>
    </div>
  </section>
  <section
      class="w-[90wv] sm:max-2xl:w-[75vw] 2xl:w-[60vw] flex flex-col items-center gap-y-10 pt-7 sm:max-2xl:pt-16 pb-20 2xl:py-24 mx-5 sm:mx-auto [&>p]:text-[#212529] [&>p]:lg:w-2/5 [&>p]:text-center">
    <h2 class="text-label font-medium text-2xl sm:max-2xl:text-3xl 2xl:text-4xl text-center">
      Simple and <span class="text-home" v-text="'Affordable'"/> Pricing
    </h2>
    <p class="text-[#212529] lg:w-2/5 text-center"
       v-text="'We can get your website up and running for as little as $500.'"/>
    <div
        class="w-full grid grid-cols-1 lg:grid-cols-3 gap-7 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-3 [&>div]:p-8 [&>div]:shadow-2xl [&>div]:rounded-3xl">
      <div class=" bg-white text-[#515D72] ">
        <p v-text="'BASIC'"/>
        <p><span class="text-3xl text-[#25344F] font-medium" v-text="'$199'"/> per month</p>
        <ul class="flex flex-col gap-y-3">
          <li class="bg-[#EBF6FF]"><i class="fa-solid fa-circle fa-2xs text-[#1AA2EF]"/> Up to 5 Pages</li>
          <li><i class="fa-solid fa-circle fa-2xs text-[#1AA2EF]"/> Hosting Included</li>
          <li><i class="fa-solid fa-circle fa-2xs text-[#1AA2EF]"/> SEO Friendly</li>
          <li><i class="fa-solid fa-circle fa-2xs text-[#1AA2EF]"/> Lifetime Updates</li>
          <li><i class="fa-solid fa-circle fa-2xs text-[#1AA2EF]"/> 24-month Service Minimum</li>
        </ul>
      </div>
      <div class="bg-[#25344F] text-[#F0F0F0]">
        <p v-text="'STANDARD'"/>
        <p><span class="text-3xl text-white font-medium" v-text="'$249'"/> per month</p>
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
      <div class="bg-white text-[#515D72]">
        <p>PREMIUM</p>
        <p><span class="text-3xl text-[#25344F] font-medium" v-text="'$299'"/> per month</p>
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
  </section>
  <section class="bg-[#EEF8FF]">
    <div
        class="w-[90wv] sm:max-2xl:w-[75vw] 2xl:w-[60vw] flex flex-col items-center gap-y-10 pt-7 sm:max-2xl:pt-16 pb-20 2xl:py-24 mx-5 sm:mx-auto">
      <h2 class="text-label font-medium text-2xl sm:max-2xl:text-3xl 2xl:text-4xl text-center">
        A Few of Our Template <span class="text-home" v-text="'Projects'"/>
      </h2>
      <div class="flex max-lg:flex-col gap-7 [&>div]:rounded-3xl [&>div]:bg-white">
        <div>
          <img src="../assets/images/template-screenshot1.png" alt="template screenshot">
          <div class="flex items-center justify-between px-6 py-8">
            <p class="text-[#515D72]" v-text="'ATM Sports'"/>
            <a href="#" class="text-sm text-[#23A6F0]">
              View Website <i class="fa-solid fa-arrow-right"/>
            </a>
          </div>
        </div>
        <div>
          <img src="../assets/images/template-screenshot2.png" alt="template screenshot">
          <div class="flex items-center justify-between px-6 py-8">
            <p class="text-[#515D72]" v-text="'Credit 91'"/>
            <a href="#" class="text-sm text-[#23A6F0]">
              View Website <i class="fa-solid fa-arrow-right"/>
            </a>
          </div>
        </div>
        <div>
          <img src="../assets/images/template-screenshot3.png" alt="template screenshot">
          <div class="flex items-center justify-between px-6 py-8">
            <p class="text-[#515D72]" v-text="'Atlantic Food Bars'"/>
            <a href="#" class="text-sm text-[#23A6F0]">
              View Website <i class="fa-solid fa-arrow-right"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="flex flex-col items-center gap-y-10 pt-7 sm:max-2xl:pt-16 pb-20 2xl:py-24 mx-5 sm:mx-auto">
      <h2 class="text-label font-medium text-2xl sm:max-2xl:text-3xl 2xl:text-4xl text-center" v-text="'FAQs'"/>
      <div v-for="(question, index) in questions" :key="index" class="lg:w-[40vw]">
        <button class="border-b-2 p-3 text-label text-xl" @click="() => handleMultiple(index)" v-text="question.title"/>
        <collapse :when="questions[index].isExpanded" class="v-collapse">
          <p class="text-label text-xl mt-1 ml-5" v-text="question.answer"/>
        </collapse>
      </div>
    </div>
    <contact/>
  </section>
</template>
<script setup>
import Contact from "../components/Contact.vue";
import {Collapse} from 'vue-collapsed';
import useTemplatedWebsites from "../composables/views/useTemplatedWebsites.js";

const questions = useTemplatedWebsites();

function handleMultiple(index) {
  questions[index].isExpanded = !questions[index].isExpanded
}
</script>

<style scoped>
.v-collapse {
  transition: height var(--vc-auto-duration) ease-out;
}
</style>
