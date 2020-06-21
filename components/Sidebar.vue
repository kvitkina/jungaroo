<template>
  <section class="sidebar">
    <div class="sidebar__strip sidebar__strip_theme_blue"></div>
    <nuxt-link to="/">
      <img src='@/assets/images/settings.svg/' class="sidebar__settings sidebar__icon sidebar__icon_theme_blue">
    </nuxt-link>

    
    <div class="sidebar__strip sidebar__strip_theme_white"></div>
    <nuxt-link to="/stats">
      <img src='@/assets/images/profits.svg/' class="sidebar__profits sidebar__icon sidebar__icon_theme_grey">
    </nuxt-link>
  </section>
</template>

<script>

</script>

<style>
  .sidebar {
    width: 72px;
    height: 100vh;
    position: fixed;
    display: grid;
    grid-template-columns: 4px 1fr;
    grid-gap: 34px 15px;
    grid-template-areas: 
    "strip settings"
    "strip-none profits";
    align-content: center;
    background-color: #FFF;
    box-shadow: 4px 0px 7px rgba(0, 0, 0, 0.1);
    border-radius: 8px 0 0 8px;
    z-index: -1;
  }

  .sidebar__strip {
   width: 4px;
   height: 24px;
   align-self: center;
  }

  .sidebar__strip_theme_blue {
    background-color: rgba(53, 145, 251, 1);
    grid-area: strip;
  }
.sidebar__strip_theme_white {
   background-color: #FFF;
   grid-area: strip-none;
   
}
  .sidebar__settings {
  grid-area: settings;
  }

  .sidebar__profits {
    grid-area: profits;
  }

  .sidebar__icon_theme_grey {
    
   
  }
  
  .sidebar__icon_theme_blue {
   
  }

</style>