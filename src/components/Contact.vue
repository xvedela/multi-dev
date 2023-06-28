<template>
  <section
    class="w-[90vw] sm:max-2xl:w-[70vw] sm:w-[50vw] mx-5 sm:mx-auto mt-16 mb-32 sm:max-2xl:mt-14 sm:max-2xl:mb-20 2xl:my-12 p-5 sm:max-2xl:p-12 2xl:p-20 max-lg:text-center shadow-2xl rounded-3xl lg:rounded-2xl">
    <form class="flex flex-col gap-y-5" @submit.prevent>
      <span class="block text-home text-lg" v-text="label" />
      <h2 class="text-label -mt-3 text-2xl sm:max-2xl:text-3xl 2xl:text-4xl" v-text="heading" />
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 [&>input]:bg-input [&>input]:p-4 [&>input]:rounded-xl">
        <input v-for="(field, index) in fields" :key="index" :type="field.type" :placeholder="field.placeholder"
          :required="field.required" />
      </div>
      <textarea class="bg-input h-52 sm:max-2xl:h-64 2xl:h-80 p-4 rounded-xl resize-none" />
      <button class="bg-button lg:mt-2 py-4 text-sm text-center rounded-3xl" type="submit" v-text="buttonText" />
    </form>
  </section>
</template>

<script setup>
import useContact from "../composables/components/useContact.js";

const { label, heading, fields, buttonText } = useContact();
</script>
