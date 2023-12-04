import { createApp } from 'vue'
import './assets/styles.scss'
import App from './App.vue'
import {Gradient} from "./utilities/backgroundInteractive/backgroundInteractive.ts";


let gradient = new Gradient();
gradient.initGradient("#mash-gradient-bg");

createApp(App).mount('#app')
