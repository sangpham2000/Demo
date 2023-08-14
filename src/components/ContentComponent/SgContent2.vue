<template>
  <div>
    <slot></slot>
    <!-- <h1>{{ heading }}</h1> -->
    <div style="display: flex; gap: 10px">
      <p :contenteditable="true">{{ content }}</p>
      <!-- <p :contenteditable="true">{{ content2 }}</p> -->
    </div>
  </div>

  <button @click="openEditForm">Edit</button>

  <div v-if="edit">
    <input type="text" v-model="heading">
    <ckes :config="{ placeholder: $t('Start entering answer here') }" :editor="ClassicEditor" v-model="content">
    </ckes>
    <!-- <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
    <textarea name="" id="" cols="30" rows="10" v-model="content2"></textarea> -->
  </div>
</template>
<script setup lang="ts">
import CKEditor from '@ckeditor/ckeditor5-vue'
import 'ckeditor5-custom-build/build/ckeditor'

const ckes = CKEditor.component
const ClassicEditor = window['ClassicEditor']
</script>

<script lang="ts">
export default {
  name: 'SgContentHeading',
  data() {
    return {
      edit: true,
      heading: 'Phạm Thanh Sang',
      content: '<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mfenced open="|" close="|"><mn>123</mn></mfenced><mspace linebreak="newline">&nbsp;</mspace><mspace linebreak="newline">&nbsp;</mspace><mfenced open="[" close="]"><mtable><mtr><mtd><mn>2</mn></mtd><mtd><mn>2</mn></mtd><mtd><mn>2</mn></mtd></mtr><mtr><mtd><mn>2</mn></mtd><mtd><mn>2</mn></mtd><mtd><mn>2</mn></mtd></mtr><mtr><mtd><mn>2</mn></mtd><mtd><mn>2</mn></mtd><mtd><mn>2</mn></mtd></mtr></mtable></mfenced></math>&nbsp; &nbsp;<math class="wrs_chemistry" xmlns="http://www.w3.org/1998/Math/MathML"><mover><mo>⇄</mo><mi mathvariant="normal">t</mi></mover></math>&nbsp;<math xmlns="http://www.w3.org/1998/Math/MathML"><mfenced open="{" close="}"><mn>123123123</mn></mfenced></math></p>',
    }
  },
  methods: {
    openEditForm() {
      this.edit = !this.edit;
    }
  }
}
</script>

<style lang="scss" scoped></style>
