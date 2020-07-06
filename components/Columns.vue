<template>
  <section class="columns">
    <slot></slot>
  </section>
</template>

<script></script>

<style>
.columns {
  display: flex;
  margin: 0 auto;
  width: 90%;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 20px;
  /*border: 1px solid red;*/
  background-color: rgb(172, 172, 241);
}
</style>