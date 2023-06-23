<template>
  <section class="bg-[#EEF2F6] flex flex-col gap-y-5 md:gap-y-12 py-20 max-md:px-5 max-md:py-8">
    <h2 class="text-center text-label -tracking-tight text-2xl md:text-4xl font-medium">Hear It From Our Clients</h2>
    <carousel :autoplay="2000" v-bind="settings" :breakpoints="breakpoints" :wrap-around="true">
      <slide v-for="(review, index) in reviews" :key="index">
        <div
            class="bg-white flex flex-col items-center gap-y-5 mx-2.5 pb-9 md:pb-12 p-8 max-md:px-4 text-center rounded-3xl">
          <img :src="review.img" :alt="review.author + ' image'"/>
          <span v-text="review.author" class="text-label text-xl"/>
          <a href="#" v-text="review.company" class="-mt-4 text-[#23A6F0]"/>
          <p v-text="review.text" class="text-[#52627A]"/>
        </div>
      </slide>
      <template #addons>
        <navigation/>
      </template>
    </carousel>
  </section>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Navigation, Slide} from "vue3-carousel";
import useReviews from "../composables/components/useReviews.js";

const settings = {itemsToShow: 1};
const breakpoints = {768: {itemsToShow: 2.5}};
const reviews = useReviews();
</script>