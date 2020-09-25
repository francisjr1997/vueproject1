<template>
  <div>
    <v-layout wrap>
      <v-flex xs12>
        <v-snackbar
          v-if="userloggedout"
          type="success"
          v-model="alertin"
          :timeout="timeout" centered
        >
          <v-layout wrap>
            <v-flex xs11> Sucessfully logged out. </v-flex>
            <v-flex text-right>
              <v-btn @click="closelogalert()" dark small color="primary">
                <v-icon dark>mdi-close</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-snackbar>
      </v-flex>
    </v-layout>
    <v-layout justify-center wrap>
      <v-flex xs12>
        <v-card style="width: 100vw">
          <v-card-title class="justify-center py-6">
            <!-- <v-layout wrap> -->
            <v-flex xs2></v-flex>
            <v-flex xs8 text-center>
              <router-link to="/">
                <!-- <a href="/404"> -->
                <h1 class="font-weight-bold display-3 head1--text">TEST</h1>
                <!-- </a> -->
              </router-link>
            </v-flex>
            <v-flex xs2 text-right px-2>
              <v-btn @click="logout()" fab dark small color="blue">
                <v-icon dark>mdi-account</v-icon>
              </v-btn>
            </v-flex>
            <!-- </v-layout> -->
          </v-card-title>

          <v-tabs
            v-model="tab"
            background-color="transparent"
            color="blue"
            grow
          >
            <v-tab v-for="(item, i) in items" :key="i">{{ item.text }}</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="(item, i) in items" :key="i">
              <v-card color="head1" flat>
                <v-card-text>{{ item.description }}</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userloggedout: false,
      alertin: false,
      timeout: 2000,
      tab: null,
      items: [
        { text: "Home", description: "This is test page of a home." },
        { text: "Gallery", description: "Gallery page" },
        { text: "Contact us", description: "Contact us" },
      ],
    };
  },
  methods: {
    logout() {
      this.userloggedout = true;
      this.alertin = true;
      // alert('Logged alert')
    },
    closelogalert() {
      this.userloggedout = false;
    },
  },
};
</script>

<style>
/* Helper classes */
.head1 {
  background-color: rgb(255, 255, 255) !important;
}
.head1--text {
  color: rgb(68, 68, 255) !important;
}
</style>