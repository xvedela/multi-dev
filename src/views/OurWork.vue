<template>
  <section class="bg-[#6967CE] text-center">
    <div
      class="flex flex-col gap-y-[1.04vw] max-md:gap-y-7 mx-auto pt-[4.69vw] pb-[3.91vw] max-md:py-10 max-md:text-center"
    >
      <h1
        class="text-white text-[max(36px,3.07vw)] font-medium max-md:font-bold leading-[max(48px,3.44vw)]"
        v-text="'Our Work'"
      />
      <p
        class="text-[#BDC8DB] text-[max(16px,1.15vw)] font-normal leading-[max(24px,1.61vw)] tracking-[-0.5px]"
        v-text="
          'We take pride in the work we do and love helping businesses succeed online.'
        "
      />
    </div>
  </section>
  <div
    class="w-[max(390px,57.81vw)] flex flex-col mx-auto text-white gap-y-[1.56vw] max-md:gap-y-12 mt-[1.82vw] max-md:mt-16 mb-[3.39vw] max-md:mb-48"
  >
    <div
      v-for="site in websites"
      class="pt-[3.8vw] gap-x-[5.73vw] max-md:gap-y-8 rounded-xl max-md:rounded-3xl flex max-xl:flex-col overflow-hidden"
      :class="site.gradient"
    >
      <img
        :src="site.img"
        class="max-md:mx-auto max-xl:ml-10 max-xl:rounded-md w-[max(354px,28.13vw)] max-md:rounded-[20px] object-cover"
        :alt="site.company + ' logo'"
      />
      <div class="flex flex-col mr-[5.73vw] max-xl:ml-10 mb-[max(30px,4.17vw)]">
        <p
          class="mb-6 text-[max(24px,1.88vw)] leading-[47px] font-medium"
          v-text="site.company"
        />
        <p
          class="mb-8 text-lg leading-7 text-[#EEF8FF]"
          v-text="site.description"
        />
        <a
          href="#"
          class="px-8 py-4 w-fit rounded-[40px] leading-6"
          :class="site.btn_bg + ' ' + site.text"
          >Visit Site</a
        >
      </div>
    </div>
  </div>
  <section>
    <div
      class="bg-[#6967CE] flex flex-col gap-y-1 max-md:gap-y-2 items-center max-md:text-left py-[max(40px,4.38vw)] max-md:pl-5"
    >
      <p
        class="text-white text-[max(24px,3.18vw)] leading-[4.53vw] font-normal"
        v-text="'Ready to work with us?'"
      />
      <router-link
        :to="{ name: 'ContactUs' }"
        class="w-fit text-[#FFB902] underline text-[max(24px,3.18vw)] font-normal leading-[max(28px,4.53vw)]"
        v-text="`Let's build something awesome.`"
      />
    </div>
  </section>
</template>

<script setup>
const getImgUrl = (img) =>
  new URL(`../assets/websites/${img}`, import.meta.url).href;

const websites = [
  {
    gradient: "bg-gradient-to-b from-[#4B7786] to-[#2F505E]",
    img: getImgUrl("corewood-care.png"),
    company: "Corewood Care",
    description: `Corewood Care is a privately owned home care and care management
          agency dedicated to providing personalized and exceptional care
          support services to individuals in familiar surroundings.`,
    text: "text-[#2E4F5B]",
    btn_bg: "bg-[#FFFFFF]",
  },
  {
    gradient: "bg-gradient-to-b from-[#292929] to-black",
    img: getImgUrl("kojima-productions.png"),
    company: "Kojima Productions",
    description: `Kojima Productions Co., Ltd. is a Japanese video game development
          studio founded in 2005 by video game designer Hideo Kojima, creator of
          the Metal Gear series.`,
    text: "text-[#222222]",
    btn_bg: "bg-[#FFFFFF]",
  },
  {
    gradient: "bg-gradient-to-b from-[#2586BC] to-[#003F72]",
    img: getImgUrl("aegisliving.png"),
    company: "Aegis Living",
    description: `Áegis Living is a national leader in assisted living and memory care,
          offering a selection of senior residences to meet the growing needs of
          today's aging population.`,
    text: "text-[#FFFFFF]",
    btn_bg: "bg-[#F26924]",
  },
  {
    gradient: "bg-gradient-to-b from-[#91ACC6] to-[#7F97AD]",
    img: getImgUrl("custom-homes-screenshot.png"),
    company: "3rd Street Custom Homes",
    description: `3rd Street Custom Homes is family owned home builder out of Dallas,
          Texas. Their custom homes are beautiful so their website needed to
          showcase the same attention to detail.`,
    text: "text-[#FFFFFF]",
    btn_bg: "bg-[#D12E2D]",
  },
  {
    gradient: "bg-gradient-to-b from-[#F3C57A] via-[#F39369] to-[#E94867]",
    img: getImgUrl("cloudvara-screenshot.png"),
    company: "Cloudvara",
    description: `Corewood Care is a privately owned home care and care management
          agency dedicated to providing personalized and exceptional care
          support services to individuals in familiar surroundings.`,
    text: "text-[#FFFFFF]",
    btn_bg: "bg-[#3B3D9C]",
  },
  {
    gradient: "bg-gradient-to-b from-[#89BC51] to-[#62AC47]",
    img: getImgUrl("infowerks-screenshot.png"),
    company: "Infowerks",
    description: `InfoWerks has been providing pain-free data management solutions for
          healthcare since 1997. We modernized their digital presence online
          through a strategic web design and development overhaul.`,
    text: "text-[#FFFFFF]",
    btn_bg: "bg-[#3B3D9C]",
  },
];
</script>
