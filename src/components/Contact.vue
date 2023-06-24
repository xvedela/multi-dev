<template>
  <section
      class="w-[90vw] sm:max-2xl:w-[70vw] sm:w-[50vw] mx-5 sm:mx-auto mt-16 mb-32 lg:my-12 p-10 sm:max-2xl:p-16 2xl:p-20 shadow-2xl rounded-3xl lg:rounded-2xl max-lg:text-center">
    <form class="flex flex-col gap-y-5" @submit.prevent>
      <span class="block text-home text-lg" v-text="'READY TO GET STARTED?'"/>
      <h2 class="-mt-3 text-label text-2xl sm:max-2xl:text-3xl 2xl:text-4xl" v-text="`Let's Grow Together.`"/>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 [&>input]:bg-input [&>input]:p-4 [&>input]:rounded-xl">
        <input type="text" placeholder="Name*" required/>
        <input type="email" placeholder="Email*" required/>
        <input type="text" placeholder="Company Name*" required/>
        <input type="url" placeholder="Website URL"/>
      </div>
      <textarea class="bg-input h-[215px] md:h-[16vw] p-4 rounded-xl resize-none"/>
      <button class="lg:mt-2 bg-button py-4 text-sm text-center rounded-3xl" type="submit" v-text="'Submit'"/>
    </form>
  </section>
</template>
