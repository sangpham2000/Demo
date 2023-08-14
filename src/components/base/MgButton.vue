<template>
  <button :class="className">{{ label }}</button>
</template>

<script>
export default {
  name: "MgButton",
  props: {
    label: {
      type: String,
      default: ""
    },
    className: {
      type: String,
      default: "button"
    }
  },
};
</script>

<style lang="scss" scoped></style>
