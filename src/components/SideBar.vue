<template>
  <q-drawer v-model="drawer" show-if-above :mini="!drawer || miniState" @click.capture="drawerClick" :width="200"
    :breakpoint="500" :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
    <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
      <q-list padding>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="inbox"></q-icon>
          </q-item-section>

          <q-item-section>
            Inbox
          </q-item-section>
        </q-item>

        <q-item active clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="star"></q-icon>
          </q-item-section>

          <q-item-section>
            Star
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="send"></q-icon>
          </q-item-section>

          <q-item-section>
            Send
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="drafts"></q-icon>
          </q-item-section>

          <q-item-section>
            Drafts
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>

    <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
      <q-btn dense round unelevated color="primary" icon="chevron_left" @click="miniState = true"></q-btn>
    </div>
  </q-drawer>
</template>

<script>

import { ref } from "vue";
import { useUserStore } from "src/stores/UserStore.js";

const menus = [{}, {}]

export default {
  name: "SideBar",
  setup() {
    const miniState = ref(false)
    return {
      userStore: useUserStore(),
      drawer: ref(false),
      miniState,

      drawerClick(e) {
        if (miniState.value) {
          miniState.value = false
          e.stopPropagation()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
