<template>
  <section class="bg-section flex flex-col gap-y-5 md:gap-y-12 py-20 max-md:px-5 max-md:py-8">
    <h2 class="text-center text-label -tracking-tight text-2xl md:text-4xl font-medium"
        v-text="'Hear It From Our Clients'"/>
    <carousel :autoplay="2000" v-bind="{itemsToShow: 1}" :breakpoints="{768: {itemsToShow: 2.5}}" :wrap-around="true">
      <slide v-for="(review, index) in useReviews()" :key="index">
        <div
            class="bg-white flex flex-col items-center gap-y-5 mx-2.5 pb-9 md:pb-12 p-8 max-md:px-4 text-center rounded-3xl">
          <img :src="review.authorImage" :alt="review.authorName + ' image'" class="w-20 rounded-full" loading="lazy"/>
          <span v-text="review.authorName" class="text-label text-xl"/>
          <a :href="review.websiteUrl" target="_blank" v-text="review.companyName" class="-mt-4 text-[#23A6F0]"/>
          <p v-text="review.reviewText" class="text-[#52627A]"/>
        </div>
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
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Navigation, Slide} from "vue3-carousel";
import useReviews from "../composables/components/useReviews";
</script>