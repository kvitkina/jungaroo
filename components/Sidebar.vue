<template>
  <section class="sidebar">
      <SettingsIcon />
      <ProfitsIcon />
  </section>
</template>

<script>
  import SettingsIcon from '@/components/icons/SettingsIcon.vue';
  import ProfitsIcon from '@/components/icons/ProfitsIcon.vue';

  export default {
    components: {
      SettingsIcon: SettingsIcon,
      ProfitsIcon: ProfitsIcon
    }
  }
</script>

<style>
  .sidebar {
    width: 72px;
    height: 100vh;
    position: fixed;
    background-color: #FFF;
    box-shadow: 4px 0px 7px rgba(0, 0, 0, 0.1);
    border-radius: 8px 0 0 8px;
    z-index: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>