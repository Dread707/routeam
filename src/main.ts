import { createApp } from 'vue'
import './assets/styles.scss'
import App from './App.vue'
import {Gradient} from "./utilities/backgroundInteractive/backgroundInteractive.ts";
import router from "./router";


let gradient = new Gradient();
gradient.initGradient("#mash-gradient-bg");

const app = createApp(App);

app.use(router);
app.mount("#app");

