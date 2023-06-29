<template>
  <section
      class="bg-home flex flex-col max-lg:items-center gap-y-7 lg:gap-y-5 px-5 sm:px-[20vw] py-10 sm:max-2xl:py-16 2xl:py-20 max-lg:text-center">
    <h1 class="text-white text-4xl sm:max-2xl:text-5xl 2xl:text-6xl font-bold lg:font-medium" v-html="heading"/>
    <p class="lg:w-3/5 text-desc sm:text-xl tracking-tighter" v-text="text"/>
    <router-link class="text-white w-fit px-8 py-4 border-2 border-desc rounded-3xl max-sm:hidden"
                 :to="{name: 'Contact'}" v-text="buttonText"/>
  </section>
  <section
      class="w-[90wv] sm:max-2xl:w-[75vw] 2xl:w-[60vw] flex flex-col items-center gap-y-10 pt-7 sm:max-2xl:pt-16 pb-20 2xl:py-24 mx-5 sm:mx-auto [&>p]:text-[#212529] [&>p]:lg:w-2/5 [&>p]:text-center">
    <h2 class="text-label font-medium text-2xl sm:max-2xl:text-3xl 2xl:text-4xl text-center">
      Why Use <span class="text-home" v-text="'Templates?'"/>
    </h2>
    <p v-text="'We’re glad you asked! There’s two main benefits to going with templates versus a custom website:'"/>
    <div
        class="lg:w-4/5 grid grid-cols-1 lg:grid-cols-2 gap-7 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-5 [&>div]:p-8 [&>div]:lg:pb-12 [&>div]:rounded-3xl [&_img]:w-fit [&_h3]:text-[#25344F] [&_h3]:font-medium [&_h3]:text-3xl [&_p]:text-[#515D72]">
      <div class="bg-[#FFF8EB]">
        <img src="../assets/icons/time-icon.svg" alt="time icon" loading="lazy"/>
        <h3 v-text="'Time'"/>
        <p v-text="'Since we have a starting point we’re able to build quickly and efficiently.'"/>
      </div>
      <div class="bg-[#EBFEFE]">
        <img src="../assets/icons/money-icon.svg" alt="money icon" loading="lazy"/>
        <h3 v-text="'Money'"/>
        <p v-text="'Our base templates are already built and we just need to reskin it to match your brand.'"/>
      </div>
    </div>
    <p v-text="'If your company doesn’t need a flashy or totally unique website this is usually the best way to go.'"/>
    <img src="../assets/images/template-preview.png" alt="template preview" loading="lazy"/>
  </section>
  <section class="bg-[#EEF8FF]">
    <div
        class="w-[90wv] sm:max-2xl:w-[75vw] 2xl:w-[60vw] flex flex-col items-center gap-y-10 pt-7 sm:max-2xl:pt-16 pb-20 2xl:py-24 mx-5 sm:mx-auto">
      <h2 class="text-label font-medium text-2xl sm:max-2xl:text-3xl 2xl:text-4xl text-center"
          v-html="seoAndSpeed.heading"/>
      <p class="text-[#212529] lg:w-2/5 text-center"
         v-text="seoAndSpeed.text"/>
      <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-7 [&>div]:bg-white [&>div]:flex [&>div]:flex-col [&>div]:gap-5 [&>div]:p-8 [&>div]:lg:pb-12 [&>div]:rounded-3xl [&_img]:w-fit [&_h3]:text-[#25344F] [&_h3]:font-medium [&_h3]:text-3xl [&_p]:text-[#515D72]">
        <div v-for="(item, index) in seoAndSpeed._" :key="index">
          <img :src="item.icon" alt="icon" loading="lazy"/>
          <h3 v-text="item.heading"/>
          <p v-text="item.text"/>
        </div>
      </div>
    </div>
  </section>
  <section
      class="w-[90wv] sm:max-2xl:w-[75vw] 2xl:w-[60vw] flex flex-col items-center gap-y-10 pt-7 sm:max-2xl:pt-16 pb-20 2xl:py-24 mx-5 sm:mx-auto [&>p]:text-[#212529] [&>p]:lg:w-2/5 [&>p]:text-center">
    <h2 class="text-label font-medium text-2xl sm:max-2xl:text-3xl 2xl:text-4xl text-center" v-html="pricing.heading"/>
    <p class="text-[#212529] lg:w-2/5 text-center"
       v-text="pricing.text"/>
    <div
        class="w-full grid grid-cols-1 lg:grid-cols-3 gap-7 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-3 [&>div]:p-8 [&>div]:shadow-2xl [&>div]:rounded-3xl">
      <div v-for="(category, index) in pricing.categories" class="[&>ul]:flex [&>ul]:flex-col [&>ul]:gap-y-3"
           :key="index" :class="category.bgAndText">
        <p v-text="category.label"/>
        <p v-html="category.text"></p>
        <ul>
          <li v-for="item in category._" v-html="item"/>
        </ul>
      </div>
    </div>
  </section>
  <section class="bg-[#EEF8FF]">
    <div
        class="w-[90wv] sm:max-2xl:w-[75vw] 2xl:w-[60vw] flex flex-col items-center gap-y-10 pt-7 sm:max-2xl:pt-16 pb-20 2xl:py-24 mx-5 sm:mx-auto">
      <h2 class="text-label font-medium text-2xl sm:max-2xl:text-3xl 2xl:text-4xl text-center"
          v-html="projects.heading"/>
      <div class="flex max-lg:flex-col gap-7 [&>div]:rounded-3xl [&>div]:bg-white">
        <div v-for="(project, index) in projects._" :key="index">
          <img :src="project.projectImage" alt="template project" loading="lazy">
          <div class="flex items-center justify-between px-6 py-8">
            <p class="text-[#515D72]" v-text="project.companyName"/>
            <a href="#" class="text-sm text-[#23A6F0]" v-html="project.buttonText"></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="flex flex-col items-center gap-y-10 pt-7 sm:max-2xl:pt-16 pb-20 2xl:py-24 mx-5 sm:mx-auto">
      <h2 class="text-label font-medium text-2xl sm:max-2xl:text-3xl 2xl:text-4xl text-center" v-text="faqs.heading"/>
      <div v-for="(question, index) in faqs._" :key="index" class="lg:w-[40vw]">
        <button class="border-b-2 p-3 text-label text-xl" @click="() => handleMultiple(index)" v-text="question.title"/>
        <collapse :when="faqs._[index].isExpanded" class="v-collapse">
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

const {heading, text, buttonText, seoAndSpeed, pricing, projects, faqs} = useTemplatedWebsites();

function handleMultiple(index) {
  faqs._[index].isExpanded = !faqs._[index].isExpanded;
}
</script>
