<template>
  <div>
    <Header></Header>
    <Sidebar />
    
    <nuxt />
    <AudioClick />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import AudioClick from "@/components/audio/AudioClick.vue";
export default {
  components: {
    Header: Header,
    Sidebar: Sidebar,
    AudioClick: AudioClick,
  },
};
</script>

<style>
</style>
