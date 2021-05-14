<template>
  <div id="app">
    <Chat />
  </div>
</template>

<script>
import Chat from "./components/Chat";

export default {
  name: "App",
  components: {
    Chat,
  },
};
</script>

<style>
* {
  font-family: "nunito", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#e66465, #9198e5);
  height: 100vh;
  width: 100%;
}
</style>
