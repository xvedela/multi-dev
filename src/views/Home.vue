<template>
  <section class="bg-home mb-32 md:mb-12 flex flex-col items-center gap-y-32 px-4 py-10 sm:py-20 text-white">
    <div class="sm:w-[60vw] flex flex-col items-center gap-y-10 md:gap-y-8">
      <a
          href="https://upcity.com/"
          target="_blank"
          class="bg-[#2C4163] flex items-center gap-x-3 py-3 px-5 rounded-3xl"
      >
        <ul class="flex gap-x-1">
          <li v-for="star in 5" :key="star" v-html="upCity.star"/>
        </ul>
        <p v-text="'5.0 Rating'"/>
        <span class="text-desc" v-text="'|'"/>
        <component :is="upCity.logo"/>
      </a>
      <h1
          v-text="header.label"
          class="text-center text-4xl md:text-6xl font-bold md:leading-tight"
      />
      <p
          v-text="header.text"
          class="md:w-2/3 md:text-lg text-center text-desc"
      />
      <div class="flex gap-x-4 md:gap-x-7">
        <router-link
            :to="{ name: 'Contact' }"
            v-html="buttons.bac"
            class="bg-button flex items-center gap-x-2 px-8 py-4 text-black rounded-4xl"
        />
        <router-link
            :to="{ name: 'OurWork' }"
            v-html="buttons.ow"
            class="bg-transparent flex items-center gap-x-2 px-9 py-4 border-2 border-desc rounded-4xl"
        />
      </div>
    </div>
    <div class="flex flex-col items-center gap-y-16 md:gap-y-14">
      <h5
          class="flex items-center"
          :class="partners.before + ' ' + partners.after"
          v-text="'Trusted by Innovative Companies Worldwide'"
      ></h5>
      <ul class="flex items-center gap-x-11">
        <li v-for="(logo, index) in partners.logos" :key="index">
          <component :is="logo"/>
        </li>
      </ul>
    </div>
  </section>
  <section class="flex flex-col items-center gap-y-20 md:gap-y-44 mb-28 md:mb-20 mt-7 md:mt-24 max-sm:mx-5">
    <div class="sm:w-[60vw] flex flex-col items-center gap-y gap-y-20 md:gap-y-16">
      <div class="md:w-3/5 flex flex-col gap-y-5 text-center">
        <h2 v-html="techsHeader.label" class="text-label font-semibold text-2xl md:text-4xl -tracking-tight"/>
        <p v-text="techsHeader.text" class="text-[#52627A] md:text-lg"/>
      </div>
      <div class="bg-home flex max-md:flex-col rounded-3xl text-white max-md:gap-y-8">
        <div v-for="(icon, index) in icons" :key="index"
             class="md:w-1/2 flex flex-col items-center gap-y-5 px-20 py-8 md:pb-16 md:pt-20 text-center">
          <div class="bg-[#8AC0FF1A] w-24 h-24 rounded-[50%] flex justify-center items-center">
            <component :is="icon._"/>
          </div>
          <h3 v-text="icon.label"/>
          <p v-text="icon.text" class="text-desc"/>
          <router-link :to="{name: icon.name}" v-html="buttons.lm"
                       class="flex gap-x-2 items-center px-8 py-4 border-2 border-desc rounded-4xl"/>
        </div>
      </div>
    </div>
    <technologies/>
  </section>
  <reviews/>
  <projects/>
  <section class="flex flex-col items-center gap-y-32 md:gap-y-28 max-sm:mx-5 ">
    <div class="mt-16 flex flex-col items-center gap-y-12">
      <h2 v-text="posts.label" class="text-label -tracking-tight text-2xl md:text-4xl font-medium"/>
      <div class="md:w-8/12 flex max-md:flex-col justify-center gap-x-7 gap-y-10">
        <div v-for="(post, index) in posts._" :key="index" class="flex flex-col max-md:items-center gap-y-2">
          <img :src="post.img" alt="post img"/>
          <h3 v-text="post.label" class="font-medium text-lg"/>
          <span v-html="buttons.rm" class="block text-[#23A6F0]"/>
        </div>
      </div>
      <a href="#" v-html="buttons.vapo"
         class="w-fit flex gap-x-2 items-center px-8 py-4 border-2 border-desc rounded-4xl text-label"/>
    </div>
    <div
        class="bg-home text-[#97A5BF] md:text-lg rounded-3xl p-7 md:py-20 mb-32 md:mb-12 ">
      <div class="text-center w-2/3 flex flex-col items-center mx-auto gap-y-8">
        <h2 class="text-white -tracking-tight text-xl md:text-4xl font-medium md:font-semibold" v-text="footer.label"/>
        <p v-text="footer.text"/>
        <router-link
            :to="{ name: 'Contact' }"
            v-html="buttons.lt"
            class="w-fit bg-button flex items-center gap-x-2 px-8 py-4 text-black rounded-4xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import useHome from "../composables/views/useHome.js";
import Reviews from "../components/Reviews.vue";
import Technologies from "../components/Technologies.vue";
import Projects from "../components/Projects.vue";

const {upCity, header, buttons, partners, icons, techsHeader, posts, footer} = useHome();
</script>