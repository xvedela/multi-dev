<template>
  <section
      class="w-[max(320px,48vw)] mx-auto mt-16 mb-32 md:my-[3vw] px-[max(20px,4vw)] pt-7 pb-10 md:py-[3vw] shadow-2xl rounded-3xl md:rounded-2xl max-md:text-center">
    <form class="flex flex-col gap-y-5 leading-none" @submit.prevent>
      <span class="text-home block" v-text="form.before"/>
      <h2 class="text-[max(24px,2vw)] leading-none" v-text="form.label"/>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <input
            v-for="(field, index) in form.fields"
            :key="index"
            class="bg-input p-4 rounded-xl"
            :type="field.type"
            :placeholder="field.placeholder"
            :required="field.required"
        />
      </div>
      <textarea class="bg-input h-[max(215px,16vw)] p-4 rounded-xl resize-none"/>
      <button
          class="bg-button py-4 text-sm text-center rounded-3xl"
          type="submit"
          v-text="form.button"
      />
    </form>
  </section>
</template>

<script setup>
import useContact from "../composables/components/useContact.js";

const {form} = useContact();
</script>
