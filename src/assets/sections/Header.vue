<template>
  <section class="bg-[#6967CE]">
    <navbar/>
    <div class="flex flex-col p-24 text-white gap-y-10">
      <div class="flex flex-col items-center gap-y-10">
        <a href="#" class="bg-[#2C4163] flex justify-center items-center rounded-[100px] w-fit p-1.5 gap-x-2">
          <rating-stars/>
          <span>5.0 Rating <span class="opacity-60">|</span> </span>
          <logo-up-city/>
        </a>
        <h1 class="text-6xl text-center">
          We Design & Develop Websites<br/> That Deliver Results
        </h1>
        <p class="opacity-60 w-1/3 text-center">Our goal is to develop simple and modern websites that are
          optimized for both search engines and user experience, ultimately
          driving more traffic and revenue to your business.</p>
        <div class="flex justify-between gap-x-7">
          <a href="#" class="bg-[#FFB902] text-black flex items-center rounded-3xl px-9 py-2.5 hover:cursor-pointer">
            Book a Call
            <arrow-right color="black"/>
          </a>
          <a href="#"
             class="bg-transparent border-white border-2 border-opacity-60 flex items-center rounded-3xl px-9 py-2.5 hover:cursor-pointer">
            Our Work
            <arrow-right color="white"/>
          </a>
        </div>
      </div>
      <div class="flex flex-col items-center gap-y-10">
        <h5>Trusted by Innovative Companies Worldwide</h5>
        <ul class="flex items-center gap-x-10">
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
import ArrowRight from "../icons/ArrowRight.vue";
import RatingStars from "../icons/RatingStars.vue";
import LogoUpCity from "../logos/LogoUpCity.vue";
import Navbar from "./Navbar.vue";
import LogoAegisLiving from "../logos/LogoAegisLiving.vue";
import LogoDoctorButlers from "../logos/LogoDoctorButlers.vue";
import LogoIrisTelehealth from "../logos/LogoIrisTelehealth.vue";
import LogoUnitedWay from "../logos/LogoUnitedWay.vue";
import LogoKojimaConstructionsStore from "../logos/LogoKojimaConstructionsStore.vue";
</script>
