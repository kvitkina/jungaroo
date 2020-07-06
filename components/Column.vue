<template>
  <div class="column__task">
    <slot></slot>
  </div>
</template>

<script></script>

<style>
.column__task {
  width: 340px;
  max-height: 600px;
  background: #c4c4c4;
  padding: 10px 18px 12px 10px;
  overflow: scroll;
  overflow-x: hidden;
  /*border: 1px solid red;*/
}
</style>