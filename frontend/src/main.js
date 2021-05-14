import Vue from "vue";
import App from "./App.vue";
//import VueSocketIO from "vue-socket.io";
import { io } from "socket.io-client";

Vue.config.productionTip = false;

export const socket = io.connect("http://localhost:3000");

// Vue.use(
//   new VueSocketIO({
//     debug: true,
//     connection: socket,
//   })
// );

new Vue({
  sockets: {
    connect() {
      console.log('socket connected')
    },
    customEmit() {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
  render: (h) => h(App),
}).$mount("#app");
