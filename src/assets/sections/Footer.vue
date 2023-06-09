<script setup>
import LogoMultiDev from "../logos/LogoMultiDev.vue";
import IconFacebook from "../icons/IconFacebook.vue";
import IconInstagram from "../icons/IconInstagram.vue";
import IconTwitter from "../icons/IconTwitter.vue";
import ArrowRight from "../icons/ArrowRight.vue";
</script>

<template>
  <footer class="bg-black text-white">
    <div class="pt-[max(40px,3.91vw)] mx-[max(20px,20.31vw)] flex flex-col">
      <div class="flex justify-between max-sm:flex-col">
        <div class="flex flex-col">
          <logo-multi-dev class="mb-[1.67vw] max-sm:mb-12"/>
          <p class="mb-[1.35vw] text-sm w-7/12 max-sm:mb-7">
            We help businesses generate more revenue through strategic web
            design and SEO services.
          </p>
          <p class="mb-[1.3vw] max-sm:mb-7">Follow Us</p>
          <ul class="flex gap-x-6">
            <li>
              <icon-facebook/>
            </li>
            <li>
              <icon-instagram/>
            </li>
            <li>
              <icon-twitter/>
            </li>
          </ul>
        </div>
        <div class="flex gap-x-[max(20px,1.56vw)] max-sm:ml-0 max-sm:mt-8">
          <div class="flex flex-col gap-y-[max(18px,1.04vw)]">
            <p>Learn More</p>
            <ul
                class="flex flex-col gap-y-4"
            >
              <li>
                <router-link :to="{ name: 'Home' }" v-text="'Home'"/>
              </li>
              <li>
                <router-link
                    :to="{ name: 'CustomWebsite' }" v-text="'Custom Website'"
                />
              </li>
              <li>
                <a href="#"
                >Search Engine<br/>
                  Optimization</a
                >
              </li>
              <li>
                <router-link :to="{ name: 'OurWork' }" v-text="'Our Work'"
                />
              </li>
              <li>
                <router-link :to="{ name: 'Blog' }" v-text="'Blog'"
                />
              </li>
              <li>
                <router-link
                    :to="{ name: 'ContactUs' }" v-text="'Contact'"
                />
              </li>
            </ul>
          </div>
          <div class="flex flex-col gap-y-[max(18px,1.04vw)]">
            <p>Locations</p>
            <ul
                class="flex flex-col gap-y-4"
            >
              <li><a href="#">Dallas Web Design</a></li>
              <li><a href="#">Plano Web Design</a></li>
              <li><a href="#">Frisco Web Design</a></li>
              <li><a href="#">Fort Worth Web Design</a></li>
              <li><a href="#">Allen Web Design</a></li>
              <li><a href="#">McKinney Web Design</a></li>
              <li><a href="#">Grapevine Web Design</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div
            class="flex max-sm:flex-col-reverse max-sm:gap-y-7 max-sm:py-10 my-[1.3vw] justify-between border-t-2 border-t-white border-opacity-20 pt-[1.3vw] opacity-80 text-xs mt-[max(40px,5.21vw)]"
        >
          <p>© 2023 - Icepick Development, LLC</p>
          <ul class="flex gap-x-[1.3vw] justify-between">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
