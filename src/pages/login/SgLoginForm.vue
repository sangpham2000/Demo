<template>
  <div id="q-app" style="min-height: 100vh;">
    <div class="q-pa-md" style="max-width: 400px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input filled v-model="userName" label="Username" lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"></q-input>

        <q-input filled type="password" v-model="passWord" label="Password" lazy-rules :rules="[
          (val) => (val !== null && val !== '') || 'Please type your age',
          (val) => (val > 0 && val < 100) || 'Please type a real age',
        ]"></q-input>

        <q-toggle v-model="accept" label="I accept the license and terms"></q-toggle>

        <div>
          <q-btn label="Submit" type="submit" color="primary"></q-btn>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"></q-btn>
          <button-login-google @loginSuccess="loginSuccess" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";

import ButtonLoginGoogle from "src/components/ButtonLoginGoogle.vue";
export default defineComponent({
  name: "SgLoginForm",
  components: {
    ButtonLoginGoogle,
  },
  setup() {
    const $q = useQuasar();
    const userName = ref(null);
    const passWord = ref(null);
    const accept = ref(false);
    return {
      userName,
      passWord,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },

      onReset() {
        userName.value = null;
        passWord.value = null;
        accept.value = false;
      },
    };
  },

  methods: {
    loginSuccess() {
      this.$emit("loginSuccess");
    }
  },
});
</script>

<style lang="scss" scoped></style>
