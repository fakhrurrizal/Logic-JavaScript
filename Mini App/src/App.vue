<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo2.png" id="gambar">
    <HelloWorld msg="Selamat Datang"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#gambar{
  width: 300px;
  height: 50;
}
</style>
