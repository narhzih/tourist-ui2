<template>
  <main class="main">
    <div class="user-view">
      <div class="user-view__toggle" @click="toggleSidebar"></div>
      <sidebar></sidebar>

      <div class="user-view__content">
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>

<script>
import Sidebar from './component/Sidebar';
export default {
  name: 'AccountBase',
  components: { Sidebar },
  methods: {
    toggleSidebar: function () {
      // alert('clicked');
      this.eventBus.emit('toggleSidebar');
    },
  },
};
</script>

<style scoped></style>
