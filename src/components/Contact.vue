<template>
  <section
      class="max-sm:w-[90vw] sm:w-[50vw] mx-auto max-sm:mx-5 mt-16 mb-32 md:my-12 p-10 md:p-20 shadow-2xl rounded-3xl md:rounded-2xl max-md:text-center">
    <form class="flex flex-col gap-y-5" @submit.prevent>
      <span class="text-home block">READY TO GET STARTED?</span>
      <h2 class="text-2xl  md:text-4xl">Let's Grow Together.</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <input class="bg-input p-4 rounded-xl" type="text" placeholder="Name*" required/>
        <input class="bg-input p-4 rounded-xl" type="email" placeholder="Email*" required/>
        <input class="bg-input p-4 rounded-xl" type="text" placeholder="Company Name*" required/>
        <input class="bg-input p-4 rounded-xl" type="url" placeholder="Website URL"/>
      </div>
      <textarea class="bg-input h-[215px] md:h-[16vw] p-4 rounded-xl resize-none"/>
      <button class="bg-button py-4 text-sm text-center rounded-3xl" type="submit">
        Submit
      </button>
    </form>
  </section>
</template>
