<template>
  <section class="sidebar">
    
      <nuxt-link :active-class = '" "' to="/" class="sidebar__container">
        <div class="sidebar__strip sidebar__strip_theme_settings"></div>
        <img src='@/assets/images/settings.svg/' class="sidebar__settings sidebar__icon">
      </nuxt-link>
   
      <nuxt-link :active-class = '" "' to="/stats" class="sidebar__container">
        <div class="sidebar__strip sidebar__strip_theme_profits"></div>
        <img src='@/assets/images/profits.svg/' class="sidebar__profits sidebar__icon">
      </nuxt-link>
  <Settings />
  <Profits />
  </section>
</template>

<script>
/*import Settings from '@components/icons/Settings.vue'
import Profits from '@components/icons/Profits.vue'

export default {
  components: {
    Settings: Settings,
    Profits: Profits
  }
}*/
</script>


<style scoped>
  .sidebar {
    width: 72px;
    height: 100%;
    position: fixed;
    display: flex;
    flex-direction: column;
    
    /*display: grid;
    grid-template-columns: 4px 1fr;
    grid-gap: 34px 15px;
    grid-template-areas: 
    "strip settings"
    "strip-none profits";
    align-content: center; */
    background-color: #FFF;
    box-shadow: 4px 0px 7px rgba(0, 0, 0, 0.1);
    border-radius: 8px 0 0 8px;
    z-index: -1;
  }

  .sidebar__container {
  display: flex;
  justify-content: start;
  margin-bottom: 34px;
  }

  .sidebar__strip {
   width: 4px;
   height: 24px;
   align-self: center;
   background: white;
   margin-right: 15px;
  }

  .nuxt-link-exact-active {
    background: rgba(53, 145, 251, 1);
  }

  .sidebar__strip_theme_settings {
    grid-area: strip;
    align-self: center;
  }

.sidebar__strip_theme_profits {
   grid-area: strip-none;
}

  .sidebar__settings {
  grid-area: settings;
  }

  .sidebar__profits {
    grid-area: profits;
  }

  .sidebar__icon {
    align-self: center;
  }

</style>