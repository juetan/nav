import { createApp } from "vue";
import App from "./App.vue";
import { styler } from "./plugins";
import { router } from "./router";

const app = createApp(App);

app.use(styler);

app.use(router);

app.mount("#app");
