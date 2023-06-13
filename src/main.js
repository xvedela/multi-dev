import "./style.css";
import {createApp} from "vue";
import App from "./App.vue";
import FontAwesomeIcon from "./components/font-awesome-icon.vue";
import router from "./router";


const app = createApp(App);
app.component("FontAwesomeIcon", FontAwesomeIcon).use(router).mount("#app");
