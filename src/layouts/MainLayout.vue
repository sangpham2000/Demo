<template>
  <!-- <SgLoginForm v-if="!isLogin" @loginSuccess="loginSuccess" /> -->
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <!-- <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title></q-toolbar-title>
      </q-toolbar> -->
    </q-header>

    <!-- <SideBar /> -->

    <q-page-container>
      <!-- <router-view /> -->
      <EditPage/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import SgLoginForm from "src/pages/login/SgLoginForm.vue";
import EditPage from "src/pages/EditContentPage/EditPage.vue";
import SideBar from "@components/SideBar.vue"
// import cv from "@techstark/opencv-js";
export default defineComponent({
  name: "MainLayout",

  components: {
    // SgLoginForm,
    EditPage,
    // SideBar,
  },

  setup() {
    return {
      isLogin: ref(false),
    };
  },

  created() {
  },

  methods: {
    loginSuccess() {
      this.isLogin = true;
    },
  },
});
</script>
