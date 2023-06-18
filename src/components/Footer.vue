<template>
  <footer>
    <div class="flex max-md:flex-col justify-between">
      <div class="flex flex-col">
        <component :is="footer.companyLogo" class="mb-12 md:mb-[1.67vw]"/>
        <p
            class="w-7/12 mb-7 md:mb-[1.35vw] text-sm"
            v-text="footer.serviceDescription"
        />
        <span class="block mb-7 md:mb-[1.3vw]" v-text="footer.followLabel"/>
        <ul class="flex gap-x-6">
          <li v-for="(link, index) in footer.socialLinks" :key="index">
            <a :href="link.url">
              <i class="fa-brands fa-xl" :class="link.iconClass"/>
            </a>
          </li>
        </ul>
      </div>
      <div class="nav-links">
        <ul class="flex flex-col gap-y-4" :class="footer.navLinks.titleBefore">
          <li v-for="(link, index) in footer.navLinks.links" :key="index">
            <router-link :to="{ name: link.name }" v-text="link.label"/>
          </li>
        </ul>
        <ul class="flex flex-col gap-y-4" :class="footer.navLinks.titleBefore">
          <li
              v-for="(company, index) in footer.designCompanies.navLinks"
              :key="index"
          >
            <a :href="company.websiteUrl" v-text="company.name"/>
          </li>
        </ul>
      </div>
    </div>
    <div class="sub-footer">
      <span v-html="footer.subFooter.copyrightText"/>
      <ul class="flex justify-between gap-x-[1.3vw]">
        <li v-for="(link, index) in footer.subFooter.navLinks" :key="index">
          <a :href="link.url" v-text="link.label"/>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import useFooter from "../composables/useFooter";

const footer = useFooter();
</script>

<style scoped>
footer {
  @apply bg-footer flex flex-col pt-12 md:pt-[3.91vw] px-5 md:px-[20.31vw] text-white;
}

.nav-links {
  @apply flex gap-x-5 md:gap-x-[1.56vw] max-md:mt-8;
}

.sub-footer {
  @apply flex max-md:flex-col-reverse justify-between max-md:gap-y-7 max-md:py-10 pt-[1.3vw] mt-10 md:mt-[5.21vw] my-[1.3vw] border-t-2 border-t-white/20 text-xs opacity-80;
}
</style>
