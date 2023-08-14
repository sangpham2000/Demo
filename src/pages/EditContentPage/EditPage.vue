<template>
  <component :is="component" v-for="(component, index) in listContent" :key="index">
    <button @click="remove(index)">Remove</button>
  </component>

  <div>
    <button @click="listContent.push('SgContentHeading')">Add content 1</button>
    <button @click="listContent.push('SgContent2')">Add content 2</button>
  </div>
</template>

<script>
import SgContentHeading from "@components/ContentComponent/SgContentHeading.vue";
import SgContent2 from "@components/ContentComponent/SgContent2.vue";
export default {
  name: 'EditPage',
  components: {
    SgContent2,
    SgContentHeading
  },
  data() {
    return {
      edit: false,
      heading: '',
      listContent: [
        'SgContent2',
      ]
    }
  },
  methods: {
    openEditForm() {
      this.edit = !this.edit;
    },
    remove(index) {
      this.listContent.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped></style>
