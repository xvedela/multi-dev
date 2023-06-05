<script setup>
import LogoMultiDev from "../logos/LogoMultiDev.vue";
import IconFacebook from "../icons/IconFacebook.vue";
import IconInstagram from "../icons/IconInstagram.vue";
import IconTwitter from "../icons/IconTwitter.vue";
</script>

<template>
  <footer class="bg-black text-white">
    <div class="pt-[10.5vh] px-[25.4vw] flex flex-col gap-y-[11.5vh]">
      <div class="flex justify-between">
        <div class="flex flex-col gap-y-[3.5vh] w-1/3">
          <logo-multi-dev />
          <p>
            We help businesses generate more revenue through strategic web
            design and SEO services.
          </p>
          <p>Follow Us</p>
          <ul class="flex gap-x-[1.6vw]">
            <li>
              <icon-facebook />
            </li>
            <li>
              <icon-instagram />
            </li>
            <li>
              <icon-twitter />
            </li>
          </ul>
        </div>
        <div class="flex justify-end">
          <div class="before:content-['Learn_More'] before:px-[1vw]">
            <ul
              class="flex flex-col px-[1vw] py-[5.6h] gap-y-[2.3vh] pt-[2.3vh]"
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Custom Websites</a>
              </li>
              <li>
                <a href="#"
                  >Search Engine<br />
                  Optimization</a
                >
              </li>
              <li>
                <a href="#"> Our Work </a>
              </li>
              <li>
                <a href="#"> Blog </a>
              </li>
              <li>
                <a href="#"> Contact </a>
              </li>
            </ul>
          </div>
          <div class="before:content-['Locations'] before:px-[1vw]">
            <ul
              class="flex flex-col px-[1vw] py-[5.6h] gap-y-[2.3vh] pt-[2.3vh]"
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
          class="flex justify-between border-t-2 border-t-white border-opacity-20 py-[3.4vh] opacity-80 text-xs"
        >
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
