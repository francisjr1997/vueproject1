<template>
  <div>
    <v-layout>
      <v-flex>
        <h1>This is Contact Us Page for {{ name }} from {{ location }} and age of {{age}}</h1>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  props: ["name", "location"],
  data() {
    return {
        age:20
    };
  },
  mounted() {
    console.log("name", this.name);
    console.log("location", this.location);
    console.log("age", this.age);
  },
};
</script>