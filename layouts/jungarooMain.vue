<template>
  <div>
    <Header></Header>
    <Sidebar />

    <nuxt />
    <AudioClick />
    <transition name="fade-popup"
      ><Popup title="New task" buttonName="Submit" v-if="popupVisible">
        <FormNewTask /> </Popup
    ></transition>
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
/* .fade-popup-enter-active,
.fade-popup-leave-active {
  transition: opacity 0.5s;
}
.fade-popup-enter,
.fade-popup-leave-to {
  opacity: 0;
} */
/* // */
.fade-popup-enter-active {
  transition: all 0.3s ease;
}
.fade-popup-leave-active {
  transition: all 0.7s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-popup-enter,
.fade-popup-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
/* // */
/* .fade-popup-enter-active {
  animation: fade-popup-in 0.5s;
}
.fade-popup-leave-active {
  animation: fade-popup-in 0.5s reverse;
}
@keyframes fade-popup-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
} */
</style>
