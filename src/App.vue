<template>
  <v-app>
    <home />
    <router-view />
    <foot />
  </v-app>
</template>

<script>
// import helloworld from "./components/HelloWorld";
import home from "./components/home/header1";
import foot from "./components/home/footer";

export default {
  name: "App",

  components: {
    // helloworld,
    home,
    foot,
  },
  data() {
    return {};
  },
};
</script>
