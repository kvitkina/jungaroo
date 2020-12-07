<template>
  <section class="columns">
    <slot></slot>
  </section>
</template>

<script></script>

<style>
.columns {
  width: 100%;
  height: 100%;
  padding: 34px 0 0 34px;
  position: fixed;
  left: 72px;
  top: 68px;
  display: flex;
  background-color: #F7F8F9;
  z-index: -2;
}
</style>