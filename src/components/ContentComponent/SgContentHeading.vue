<template>
  <div>
    <slot></slot>
    <h1>{{ heading }}</h1>
    <p :contenteditable="true" @input="onInput">{{ content }}</p>
  </div>

  <button @click="openEditForm">Edit</button>


  <div v-if="edit">
    <input type="text" v-model="heading">
    <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
  </div>
</template>

<script>
export default {
  name: 'SgContentHeading',
  data() {
    return {
      edit: false,
      heading: 'Phạm Thanh Sang',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae consequuntur laborum facilis ad dicta quidem quibusdam animi explicabo, harum nesciunt eveniet sequi neque magni ipsam optio illum veniam vero?'
    }
  },
  methods: {
    onInput(event) {
      const value = event.target.innerText;
      this.content = value;
    },
    openEditForm() {
      this.edit = !this.edit;
    }
  }
}
</script>

<style lang="scss" scoped></style>
