<template>
  <section class="bg-[#6967CE]">
    <navbar/>
    <div class="flex flex-col p-24 text-white gap-y-10 w-auto">
      <div class="flex flex-col items-center gap-y-10">
        <a href="#" class="bg-[#2C4163] flex justify-center items-center rounded-[100px] w-fit py-2 px-3 gap-x-2">
          <rating-stars/>
          <span>5.0 Rating <span class="opacity-60">|</span></span>
          <logo-up-city/>
        </a>
        <h1 class="text-6xl text-center">
          We Design & Develop Websites<br/> That Deliver Results
        </h1>
        <p class="opacity-60 w-1/3 text-center">Our goal is to develop simple and modern websites that are
          optimized for both search engines and user experience, ultimately
          driving more traffic and revenue to your business.</p>
        <div class="flex justify-between gap-x-7">
          <a href="#" class="bg-[#FFB902] text-black flex items-center rounded-3xl px-9 py-4">
            Book a Call
            <arrow-right color="black"/>
          </a>
          <a href="#"
             class="bg-transparent border-white border-2 border-opacity-60 flex items-center rounded-3xl px-9 py-4">
            Our Work
            <arrow-right color="white"/>
          </a>
        </div>
      </div>
      <div class="flex flex-col items-center gap-y-10 pt-16">
        <h5 class="flex justify-center items-center
                  before:content-[''] before:w-[20vw] before:h-0.5 before:mr-5 before:bg-white before:opacity-10
                  after:content-[''] after:w-[20vw] after:h-0.5 after:ml-5 after:bg-white after:opacity-10">
          Trusted by Innovative Companies Worldwide
        </h5>
        <ul class="flex items-center gap-x-12">
          <li>
            <logo-aegis-living/>
          </li>
          <li>
            <logo-kojima-constructions-store/>
          </li>
          <li>
            <logo-doctor-butlers/>
          </li>
          <li>
            <logo-iris-telehealth/>
          </li>
          <li>
            <logo-united-way/>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup>
import Navbar from "./Navbar.vue";
import RatingStars from "../icons/RatingStars.vue";
import LogoUpCity from "../logos/LogoUpCity.vue";
import ArrowRight from "../icons/ArrowRight.vue";
import LogoAegisLiving from "../logos/LogoAegisLiving.vue";
import LogoKojimaConstructionsStore from "../logos/LogoKojimaConstructionsStore.vue";
import LogoDoctorButlers from "../logos/LogoDoctorButlers.vue";
import LogoIrisTelehealth from "../logos/LogoIrisTelehealth.vue";
import LogoUnitedWay from "../logos/LogoUnitedWay.vue";
</script>
