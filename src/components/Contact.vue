<template>
  <section
    class="w-[max(350px,47.92vw)] mx-auto my-[2.60vw] max-sm:mt-16 max-sm:mb-32 px-[max(20px,4.22vw)] py-[4.22vw] max-sm:pt-7 max-sm:pb-10 shadow-2xl rounded-2xl max-sm:rounded-3xl max-sm:text-center"
  >
    <p
      class="uppercase text-[#6967CE] text-lg leading-7 font-normal tracking-normal mb-[0.42vw] max-sm:mb-5"
      v-text="'Ready To Get Started?'"
    />
    <p
      class="text-[max(24px,2.08vw)] font-medium leading-[2.92vw] tracking-normal mb-[max(20px,1.93vw)]"
      v-text="`Let's Grow Together.`"
    />
    <form class="flex flex-col gap-y-5" @submit.prevent>
      <div class="grid grid-cols-2 max-sm:grid-cols-1 gap-x-4 gap-y-5">
        <input
          v-for="(input, index) in inputs"
          class="bg-[#F4F8FB] rounded-xl py-4 pl-5 outline-none"
          :key="index"
          :type="input.type"
          :placeholder="input.placeholder"
          :required="input.required"
        />
      </div>
      <textarea
        class="bg-[#F4F8FB] rounded-xl h-[max(214px,15.94vw)] py-4 pl-5 resize-none mb-3 max-sm:mb-0 outline-none"
      />
      <button
        type="submit"
        class="bg-[#FFB902] rounded-[37px] font-normal text-sm leading-6 text-center py-4"
        v-text="'Submit'"
      />
    </form>
  </section>
</template>

<script setup>
const inputs = [
  {
    type: "text",
    placeholder: "Name*",
    required: true,
  },
  {
    type: "email",
    placeholder: "Email*",
    required: true,
  },
  {
    type: "text",
    placeholder: "Company Name*",
    required: true,
  },
  {
    type: "url",
    placeholder: "Website URL",
    required: false,
  },
];
</script>
