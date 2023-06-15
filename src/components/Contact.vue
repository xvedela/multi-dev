<template>
  <section>
    <span v-text="contact.form.beforeLabel"/>
    <h2 v-text="contact.form.label"/>
    <form class="flex flex-col gap-y-5" @submit.prevent>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5">
        <input
            v-for="(field, index) in contact.form.fields"
            :key="index"
            class="bg-[#F4F8FB] py-4 pl-5 rounded-xl outline-none focus:outline-home"
            :type="field.type"
            :placeholder="field.placeholder"
            :required="field.required"
        />
      </div>
      <textarea class="focus:outline-home"/>
      <button type="submit" v-text="contact.form.buttonLabel" class="hover:brightness-105"/>
    </form>
  </section>
</template>

<script setup>
import getComposable from "../composables";

const contact = getComposable('contact');
</script>

<style scoped>
section {
  @apply w-96 md:w-[47.91vw] mx-auto mt-16 mb-32 md:my-[2.60vw] px-[max(20px,4.22vw)] pt-7 pb-10 md:py-[4.22vw] shadow-2xl rounded-3xl md:rounded-2xl max-md:text-center;
}

span {
  @apply block mb-5 md:mb-2 text-[#6967CE] text-lg leading-7;
}

h2 {
  @apply mb-[max(20px,1.93vw)] text-[max(24px,2.08vw)] leading-[2.92vw];
}

textarea {
  @apply bg-[#F4F8FB] h-[max(214px,15.94vw)] py-4 pl-5 resize-none rounded-xl outline-none;
}

button {
  @apply bg-button py-4 text-sm text-center leading-6 rounded-4xl;
}
</style>
