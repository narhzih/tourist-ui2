<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';

export default {
  name: 'Base',
  components: { AppFooter, AppHeader },
};
</script>

<style scoped></style>
