<template>
  <div>
    <Header></Header>
    <Sidebar />

    <nuxt />
    <AudioClick />
    <Popup title="New task" buttonName="Submit" v-if="popupVisible">
      <FormNewTask />
    </Popup>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import AudioClick from "@/components/audio/AudioClick.vue";
import Popup from "@/components/Popup.vue";
import FormNewTask from "@/components/FormNewTask.vue";
export default {
  components: {
    Header,
    Sidebar,
    AudioClick,
    Popup,
    FormNewTask,
  },
  computed: {
    popupVisible() {
      return this.$store.state.popups.addTodoVisibility;
    },
  },
};
</script>

<style>
</style>
