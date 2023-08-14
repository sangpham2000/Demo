<template>
  <div>
    <div id="g_id_signin"></div>
  </div>
</template>

<script>
import { LoginGoogle } from "@services/authService";
import { Buffer } from "buffer";
export default {
  mounted() {
    google.accounts.id.initialize({
      client_id:
        "509068224911-stq44eq65tpl0dbm5jl0cnj5j6kqri90.apps.googleusercontent.com",
      callback: (user) => {
        this.requestGoogle(user);
      },
    });

    google.accounts.id.renderButton(
      document.getElementById("g_id_signin"),
      {
        theme: "outline",
        size: "large",
        logo_alignment: "center",
        text: "signin_with",
        size: "large",
        shape: "rectangular",
      } // customization attributes
    );
  },
  methods: {
    requestGoogle(user) {
      let profile = this.parseJwt(user.credential);
      let googleUser = {
        loginType: "google",
        name: profile.name,
        googleId: profile.sub,
        email: profile.email,
        avatar: profile.picture,
        google: profile,
      };
      LoginGoogle(googleUser).then(() => {
        this.$emit("loginSuccess");
      });
    },
    parseJwt(credential) {
      let base64Payload = credential.split(".")[1];
      let payload = Buffer.from(base64Payload, "base64");
      return JSON.parse(payload);
    },
  },
};
</script>
