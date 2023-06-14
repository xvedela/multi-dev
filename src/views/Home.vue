<template>
  <section class="bg-home mb-32 sm:mb-[2.6vw]">
    <div
        class="sm:w-[59.38vw] flex flex-col gap-y-32 mx-4 sm:mx-auto pt-10 sm:pt-[4.17vw] pb-16 sm:pb-[4.43vw] text-white">
      <div class="flex flex-col items-center gap-y-10 md:gap-y-[1.56vw]">
        <a href="https://upcity.com/" target="_blank"
           class="bg-[#2C4163] flex items-center  gap-x-3 py-3 px-5 rounded-3xl">
          <div class="flex gap-x-1">
            <font-awesome v-for="star in 5" _class="fa-solid fa-star text-[#23A6F0]" :key="star"/>
          </div>
          <p v-text="'5.0 Rating'"/>
          <span class="opacity-60" v-text="'|'"/>
          <up-city/>
        </a>
        <h1 v-text="'We Design & Develop Websites That Deliver Results'"
            class="text-center text-4xl md:text-6xl font-bold md:leading-tight"/>
        <p
            v-text="`Our goal is to develop simple and modern websites that are optimized
          for both search engines and user experience, ultimately driving more
          traffic and revenue to your business.`"
            class="md:w-1/2 text-center opacity-60"/>
        <div class="flex gap-x-4 md:gap-x-7">
          <router-link :to="{name: 'Contact'}" v-html="bac"
                       class="bg-button flex items-center gap-x-2 px-8 py-4 text-black rounded-4xl"/>
          <router-link :to="{name: 'OurWork'}" v-html="ow"
                       class="bg-transparent flex items-center gap-x-2 px-9 py-4 border-2 border-white rounded-4xl border-opacity-60"/>
        </div>
      </div>
      <div class="flex flex-col items-center gap-y-16 md:gap-y-14">
        <h5
            class="flex items-center"
            :class="h5labels.before + ' ' + h5labels.after"
            v-text="'Trusted by Innovative Companies Worldwide'">
        </h5>
        <ul class="flex items-center gap-x-11">
          <li v-for="(logo, index) in logos" :key="index">
            <component :is="logo"/>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import UpCity from "../assets/logos/UpCity.vue";
import AegisLiving from "../assets/logos/LogoAegisLiving.vue";
import KojimaConstructionsStore from "../assets/logos/LogoKojimaConstructionsStore.vue";
import DoctorButlers from "../assets/logos/LogoDoctorButlers.vue";
import IrisTelehealth from "../assets/logos/LogoIrisTelehealth.vue";
import UnitedWay from "../assets/logos/LogoUnitedWay.vue";
import FontAwesome from "../components/FontAwesome.vue";

const bac = 'Book a Call <font-awesome class="fa-solid fa-arrow-right text-black"/>';
const ow = 'Our Work <font-awesome class="fa-solid fa-arrow-right text-white"/>';

const h5labels = {
  before: "before:content-[''] before:w-[13.02vw] before:h-0.5 before:mr-6 before:bg-white before:opacity-10 before:max-md:hidden",
  after: "after:content-[''] after:w-[13.02vw] after:h-0.5 after:ml-6 after:bg-white after:opacity-10 after:max-md:hidden",
}

const logos = [
  AegisLiving, KojimaConstructionsStore, DoctorButlers, IrisTelehealth, UnitedWay
];
</script>
