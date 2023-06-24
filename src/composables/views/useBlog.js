import useBlogs from "./useBlogs.js";
import useHelpers from "../helpers/useHelpers.js";

const blogs = useBlogs();
const {createIUG} = useHelpers();
const IUG = createIUG();

IUG.setDirectory('blogs');
export default function useBlog(id) {
    const blog = blogs.find(blog => blog.id === +id);
    return {
        author: IUG.generateImageUrl('b52106db0bb442a7c48223da21c5c013.png'),
        ...blog,
        intro: `
<p>Whether you’re running an advertising campaign or just want to spice up your landing pages, we’ve created a list of <strong>10 Landing Page Do’s and Don’ts</strong> to help make sure you’re getting the most value out of your landing pages!</p>
<p>A successful landing page is just as important as your advertising campaign. It’s one thing to get traffic from your ads, but if your landing pages do not convert, then you’re losing out on potential sales!</p>
        `,
        content: `
        <h2>1. Do: Invest In Your Landing Page Design</h2>
        <p>The layout and design of your landing page plays a major role in the success of your campaign.</p>
        <p>Visually appealing landing pages with a better user experience will have a much higher conversion rate than those that don’t.</p>
        <h2>2. Don’t: Ask for Too Much Information</h2>
        <p>No matter how good your offer is, users will be less likely to fill out your form if you ask for too much information. Keep your fields brief and concise to increase your chances of users filling out your forms.</p>        
        <h2>3. Do: Have a Compelling Headline</h2>
        <p>Keep your headlines brief to ensure users understand what is being offered immediately. It’s typically best to have your H1 on the landing page match your ad campaign title. People tend to skim websites quickly so it is important that your headline conveys and summarizes what it is you’re offering right away.</p>
        <h2>9. Do: Test Everything</h2>
        <p>It’s important to fully test your landing page before sending traffic to it. The last thing you want is for something to be poorly optimized or broken after spending your money and time on a campaign.</p>
        <p><strong>Here’s a few different things to consider when testing:</strong></p>
        <ul>
            <li><p>Form Submissions</p></li>
            <li><p>Mobile Friendly Test</p></li>
            <li><p>A/B Test Different Offers to See Which Convert Best</p></li>
            <li><p>Email Drip Campaign if You Have One</p></li>
        </ul>
        `,
    }
}