<template>
  <header class="header">
    <logo></logo>
    <div class="header__line header__line_pos_left header__line_theme_light"></div>
    <h1 class="header__title">Tasks</h1>
    <navigation></navigation>
    <SearchForm></SearchForm>
    <bell></bell>
    <div class="header__line header__line_pos_right header__line_theme_light"></div>
    <user></user>
  </header>
</template>

<script>
import Logo from "@/components/Logo.vue";
import Navigation from "@/components/Navigation.vue";
import SearchForm from "@/components/SearchForm.vue";
import Bell from "@/components/Bell.vue";
import User from "@/components/User.vue";
export default {
  components: {
    Logo: Logo,
    Navigation: Navigation,
    SearchForm: SearchForm,
    Bell,
    User
  }
};
</script>

<style scoped>
.header {
  display: flex;
  width: 100%;
  padding: 0 32px 0 36px;
  height: 68px;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
  border-radius: 8px 8px 0px 0px;
}

.header__line {
  height: 36px;
  width: 3px;
}
.header__line_pos_left {
  margin: 0 15px 0 36px;
}
.header__line_pos_right {
  margin: 0 28px;
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