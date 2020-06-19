<template>
  <header class="header">
    <Logo></Logo>
    <div class="header__line header__line_pos_left header__line_theme_light"></div>
    <h1 class="header__title">Tasks</h1>
    <Navigation></Navigation>
  </header>
</template>

<script>
import Logo from "@/components/Logo.vue";
import Navigation from "@/components/Navigation.vue";
export default {
  components: {
    Logo: Logo,
    Navigation: Navigation
  }
};
</script>

<style scoped>
.header {
  display: flex;
}

.header__line {
  height: 36px;
  width: 3px;
}
.header__line_pos_left {
  margin: 0 15px 0 36px;
}
.header__line_pos_right {
}

.header__line_theme_light {
  background-color: #f7f8f9;
}

.header__title {
  font-family: Open Sans, Arial, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  margin: 0;
}
</style>