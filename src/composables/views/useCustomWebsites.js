export default function useCustomWebsites() {
  return {
    heading: '<span class="text-button">Custom</span> Websites',
    text: 'Whether you’re looking to build a custom marketing website or the next Twitter we can help you build anything you’re envisioning.',
    buttonText: 'Get In Touch',
    content: `<h2 class="text-label font-semibold text-2xl sm:max-2xl:text-3xl 2xl:text-4xl max-2xl:text-center">
              Custom Websites Set You Apart
              </h2>
        <p>In a world where attention spans are decreasing by the day you need to stand
          out from the crowd. One way to
          do that is by creating a custom website that is unique to you and your brand.</p>
        <p>Having a custom website means you’re getting a fully built website from
          scratch which includes a design and
          development process from the ground up.</p>
        <p>This comes with many benefits including:</p>
        <ul>
          <li><p>Unique Design</p></li>
          <li><p>Structured Around Your Content</p></li>
          <li><p>More Credibility</p></li>
          <li><p>Faster Page Speeds</p></li>
        </ul>   
        <a class="bg-button flex items-center gap-x-2 w-fit px-8 py-4 rounded-3xl" :href="/contact">
          Work With Us <i class="fa-solid fa-arrow-right"/>
        </a>`
  };
};