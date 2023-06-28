<template>
  <div
      class="bg-white flex flex-col items-center justify-center sm:mx-2.5 gap-y-6 p-8 max-sm:px-3 pb-9 sm:pb-12 text-center rounded-3xl">
    <img :src="review.authorImage" :alt="review.authorName + ' image'" class="w-20 rounded-full" loading="lazy"/>
    <span v-text="review.authorName" class="text-label text-xl"/>
    <a :href="review.websiteUrl" target="_blank" v-text="review.companyName" class="-mt-4 text-[#23A6F0]"/>
    <p v-text="review.reviewText" class="text-[#52627A]"/>
  </div>
</template>

<script setup>
const {review} = defineProps({
  review: {
    required: true,
    type: Object,
  },
});
</script>
