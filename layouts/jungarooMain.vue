<template>
  <div>
    <Header></Header>
    <Sidebar />
    <nuxt />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    Header: Header,
    Sidebar: Sidebar
  }
};
</script>

<style>
</style>
