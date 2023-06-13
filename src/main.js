import "./style.css";
import {createApp} from "vue";
import App from "./App.vue";
import FontAwesome from "./components/FontAwesome.vue";
import router from "./router";


const app = createApp(App);
app.component("FontAwesome", FontAwesome).use(router).mount("#app");