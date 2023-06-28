<template>
  <section
      class="bg-section py-8 sm:max-2xl:py-14 2xl:py-20 max-sm:px-5">
    <h2 class="text-label mb-5 sm:max-2xl:mb-8 2xl:mb-12 font-medium text-2xl sm:max-2xl:text-3xl 2xl:text-4xl text-center"
        v-text="heading"/>
    <carousel :autoplay="2000" v-bind="settings" :breakpoints="breakpoints" :wrap-around="true">
      <slide v-for="(review, index) in reviews" :key="index">
        <review :review="review"/>
      </slide>
      <template #addons>
        <navigation>
          <template #next>
            <i class="fa-solid fa-arrow-right text-white"/>
          </template>
          <template #prev>
            <i class="fa-solid fa-arrow-left text-white"/>
          </template>
        </navigation>
      </template>
    </carousel>
  </section>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Navigation, Slide} from "vue3-carousel";
import useReviews from "../composables/components/useReviews.js";
import Review from "./Review.vue";

const {heading, reviews} = useReviews();
// carousel settings
const settings = {
  itemsToShow: 1,
};
// breakpoints are mobile first
// any settings not specified will fall back to the carousel settings
const breakpoints = {
  // 640px and up
  640: {
    itemsToShow: 1.1,
  },
  // 1280px and up
  1280: {
    itemsToShow: 3.2,
  },
};
</script>