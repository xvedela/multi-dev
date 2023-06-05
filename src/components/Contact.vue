<template>
  <section
    class="bg-[#FFFFFF] w-[max(350px,59.9vw)] rounded-[20px] max-sm:rounded-3xl px-[max(20px,5.2vw)] py-[11.5vh] max-sm:pt-[30px] max-sm:pb-10 mx-auto my-[7vh] max-sm:mt-16 max-sm:mb-32 shadow-2xl max-sm:shadow-xl max-sm:text-center"
  >
    <p
      class="uppercase text-[#6967CE] text-lg leading-7 font-normal tracking-normal mb-[min(20px,1.1vh)]"
    >
      Ready To Get Started?
    </p>
    <p
      class="text-[max(24px,2.6vw)] font-medium leading-[56px] tracking-normal mb-[max(20px,5.2vh)]"
    >
      Let's Grow Together.
    </p>
    <form class="flex flex-col gap-y-5">
      <div class="flex gap-x-4 flex-wrap gap-y-5">
        <input
          type="text"
          placeholder="Name*"
          class="bg-[#F4F8FB] rounded-xl h-14 py-4 pl-5 flex-auto"
          required
        />
        <input
          type="email"
          placeholder="Email*"
          class="bg-[#F4F8FB] rounded-xl h-14 py-4 pl-5 flex-auto"
          required
        />
      </div>
      <div class="flex gap-x-4 flex-wrap gap-y-5">
        <input
          type="text"
          placeholder="Company Name*"
          class="bg-[#F4F8FB] rounded-xl h-14 py-4 pl-5 flex-auto"
          required
        />
        <input
          type="url"
          placeholder="Website URL"
          class="bg-[#F4F8FB] rounded-xl h-14 py-4 pl-5 flex-auto"
        />
      </div>
      <textarea
        class="bg-[#F4F8FB] rounded-xl h-[max(214px,42.9vh)] py-4 pl-5 resize-none mb-[10px] max-sm:mb-0"
      ></textarea>
      <input
        type="submit"
        value="Submit"
        class="bg-[#FFB902] rounded-[37px] font-normal text-sm leading-6 text-center h-14"
      />
    </form>
  </section>
</template>
