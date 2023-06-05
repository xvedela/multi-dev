<template>
  <section class="bg-[#6967CE] h-[max(185px,48.7vh)] text-center">
    <div
      class="flex flex-col gap-y-[2.8vh] max-sm:gap-y-[27px] w-[max(350px,49.4vw)] ml-[25.4vw] pt-[max(40px,11.8vh)] max-sm:text-center max-sm:mx-auto"
    >
      <h1
        class="text-white text-[max(36px,3.8vw)] font-medium max-sm:font-bold leading-[max(48px,4.3vw)]"
      >
        Our Work
      </h1>
      <p
        class="text-[#BDC8DB] text-[max(16px,1.1vw)] font-normal leading-[max(24px,2.1vw)] tracking-[-0.5px]"
      >
        We take pride in the work we do and love helping businesses succeed
        online.
      </p>
    </div>
  </section>
  <div class="w-[max(390px,72.3vw)] flex flex-col items-center text-white">
    <div class="flex flex-row bg-gradient-to-b from-[#4B7786] to-[#2F505E]">
      <image-corewood-care />
      <div>
        <p>Corewood Care</p>
        <p>
          Corewood Care is a privately owned home care and care management
          agency dedicated to providing personalized and exceptional care
          support services to individuals in familiar surroundings.
        </p>
        <a href="#" class="px-8 py-4 rounded-[40px] bg-[#FFFFFF] text-[#2E4F5B]"
          >Visit Site</a
        >
      </div>
    </div>
    <div class="flex flex-row bg-gradient-to-b from-[#292929] to-black relative">
      <image-corewood-care />
      <div>
        <p>Kojima Productions</p>
        <p>
          Kojima Productions Co., Ltd. is a Japanese video game development
          studio founded in 2005 by video game designer Hideo Kojima, creator of
          the Metal Gear series.
        </p>
        <a href="#" class="px-8 py-4 rounded-[40px] bg-[#FFFFFF] text-[#222222]"
          >Visit Site</a
        >
      </div>
    </div>
    <div class="flex flex-row bg-gradient-to-b from-[#2586BC] to-[#003F72]">
      <image-corewood-care />
      <div>
        <p>Aegis Living</p>
        <p>
          Áegis Living is a national leader in assisted living and memory care,
          offering a selection of senior residences to meet the growing needs of
          today's aging population.
        </p>
        <a href="#" class="px-8 py-4 rounded-[40px] bg-[#F26924]">Visit Site</a>
      </div>
    </div>
    <div class="flex flex-row bg-gradient-to-b from-[#91ACC6] to-[#7F97AD]">
      <image-corewood-care />
      <div>
        <p>3rd Street Custom Homes</p>
        <p>
          3rd Street Custom Homes is family owned home builder out of Dallas,
          Texas. Their custom homes are beautiful so their website needed to
          showcase the same attention to detail.
        </p>
        <a href="#" class="px-8 py-4 rounded-[40px] bg-[#D12E2D]">Visit Site</a>
      </div>
    </div>
    <div
      class="flex flex-row bg-gradient-to-b from-[#F3C57A] via-[#F39369] to-[#E94867]"
    >
      <image-corewood-care />
      <div>
        <p>Cloudvara</p>
        <p>
          Cloudvara provides cloud solutions for small businesses. They needed
          help showcasing products in a user friendly way, so we re-skinned the
          entire website and developed pricing calculators to help the customer
          easily estimate server costs.
        </p>
        <a href="#" class="px-8 py-4 rounded-[40px] bg-[#3B3D9C]">Visit Site</a>
      </div>
    </div>
    <div class="flex flex-row bg-gradient-to-b from-[#89BC51] to-[#62AC47]">
      <image-corewood-care />
      <div>
        <p>Infowerks</p>
        <p>
          InfoWerks has been providing pain-free data management solutions for
          healthcare since 1997. We modernized their digital presence online
          through a strategic web design and development overhaul.
        </p>
        <a href="#" class="px-8 py-4 rounded-[40px] bg-[#3B3D9C]">Visit Site</a>
      </div>
    </div>
  </div>
  <section>
    <div
      class="flex flex-col bg-[#6967CE] text-center max-sm:text-left gap-1 max-sm:gap-2 py-[max(40px,11.2vh)] max-sm:pl-5"
    >
      <p class="text-white text-[max(24px,4vw)] font-normal">
        Ready to work with us?
      </p>
      <p
        class="text-[#FFB902] underline text-[max(24px,4vw)] font-normal leading-[max(28px,11.2vh)]"
      >
        Let's build something awesome.
      </p>
    </div>
  </section>
</template>

<script setup>
import ImageCorewoodCare from "../assets/images/ImageCorewoodCare.vue";
</script>
