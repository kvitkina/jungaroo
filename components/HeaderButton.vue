<template>
  <button type="button" class="header-button header-button_theme_light">
    <slot></slot>
  </button>
</template>

<script>
</script>

<style scoped>
.header-button {
  font-family: Open Sans, Arial, serif;
  outline: none;
  border: 0;
  border-radius: 5px;
  padding: 5px 14px;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  text-align: right;
}

.header-button_theme_light {
  background: #856ff5;
  color: #fff;
}
</style>