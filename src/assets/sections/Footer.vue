<script setup>

import LogoMultiDev from "../logos/LogoMultiDev.vue";
import IconFacebook from "../icons/IconFacebook.vue";
import IconInstagram from "../icons/IconInstagram.vue";
import IconTwitter from "../icons/IconTwitter.vue";
</script>

<template>
  <footer class="bg-black text-white">
    <div class="py-16 px-52 flex flex-col gap-y-7 px-auto">
      <div class="flex justify-between">
        <div class="flex flex-col gap-y-7">
          <logo-multi-dev/>
          <p class="w-1/3">We help businesses generate more revenue
            through strategic web design and SEO
            services.</p>
          <p>Follow Us</p>
          <ul class="flex gap-x-5">
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
        <div class="flex gap-x-10">
          <div class="before:content-['Learn_More']">
            <ul class="flex flex-col gap-y-3 pt-3">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Custom Websites</a>
              </li>
              <li>
                <a href="#">Search Engine<br/>
                  Optimization</a>
              </li>
              <li>
                <a href="#">
                  Our Work
                </a></li>
              <li>
                <a href="#">
                  Blog
                </a>
              </li>
              <li>
                <a href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div class="before:content-['Locations']">
            <ul class="flex flex-col gap-y-3 pt-3">
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
      <hr class="opacity-20 h-1"/>
      <div>
        <div class="flex justify-between">
          <p>© 2023 - Icepick Development, LLC</p>
          <ul class="flex gap-x-10">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>