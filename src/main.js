import { createApp, watch } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);

app.mount("#app");

watch(
  pinia.state,
  (state) => {
    localStorage.setItem("todoList", JSON.stringify(state.todoList));
  },
  { deep: true }
);
