<template>
  <section class="sidebar">
    <nuxt-link
      to="/"
      exact
      class="sidebar__settings"
      :active-class="'active-link'"
    >
      <SettingsIcon :color="$route.path === '/' ? '#3591FB' : undefined" />
    </nuxt-link>
    <nuxt-link
      to="/stats"
      class="sidebar__profits"
      :active-class="'active-link'"
    >
      <ProfitsIcon :color="$route.path === '/stats' ? '#3591FB' : undefined" />
    </nuxt-link>
  </section>
</template>

<script>
import SettingsIcon from "@/components/icons/SettingsIcon.vue";
import ProfitsIcon from "@/components/icons/ProfitsIcon.vue";

export default {
  components: {
    SettingsIcon,
    ProfitsIcon,
  },
};
</script>

<style>
.sidebar {
  width: 72px;
  height: 100vh;
  position: fixed;
  background-color: #fff;
  box-shadow: 4px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 8px 0 0 8px;
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sidebar__settings {
  width: 72px;
  position: relative;
  margin-bottom: 34px;
  padding-left: 15px;
}

.sidebar__settings::before {
  content: "";
  position: absolute;
  top: 5px;
  left: 0;
  width: 4px;
  height: 24px;
  background-color: #fff;
}

.sidebar__profits {
  width: 72px;
  position: relative;
  padding-left: 15px;
}

.sidebar__profits::before {
  content: "";
  position: absolute;
  top: 5px;
  left: 0;
  width: 4px;
  height: 24px;
  background-color: #fff;
}
.active-link.sidebar__profits::before {
  background-color: #3591fb;
}
.active-link.sidebar__settings::before {
  background-color: #3591fb;
}
</style>