<template>
  <section class="popup" @click="closePopupClickOverlay">
    <div class="popup__content">
      <h4 class="popup__title">{{ title }}</h4>
      <button class="popup__close-button" @click="closePopup"></button>
      <slot></slot>
      <button class="popup__submit-button">{{ buttonName }}</button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    closePopup() {
      this.$store.commit("popups/close");
    },
    closePopupClickOverlay(evt) {
      if (evt.target === evt.currentTarget) {
        this.$store.commit("popups/close");
      }
    },
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    buttonName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup__title {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #272a43;
  margin-bottom: 36px;
}

.popup__submit-button {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: right;
  background: #856ff5;
  border: 0;
  border-radius: 5px;
  color: #fff;
  padding: 19px 0;
  width: 100%;
  text-align: center;
  margin-top: 48px;
}

.popup__submit-button:focus {
  border: 0;
  outline: none;
}

.popup__close-button {
  position: absolute;
  top: 36px;
  right: 36px;
  height: 24px;
  width: 24px;
  background: transparent;
  border: 0;
  background: no-repeat url("/close.svg");
  cursor: pointer;
}

.popup__close-button:focus {
  outline: none;
}

.popup__content {
  padding: 36px;
  position: relative;
  background-color: white;
  width: 500px;
}
</style> 