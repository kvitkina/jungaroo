<template>
  <div class="columns">
    <div class="column__task"></div>
    <div class="column__task"></div>
    <div class="column__task"></div>
  </div>
</template>

<script></script>


<style scoped>
.columns {
  display: flex;
  margin: 0 auto;
  max-width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 20px;
}

.column__task {
  width: 340px;
  height: 536px;
  background: #c4c4c4;
  margin: 0;
  overflow: scroll;
  overflow-x: hidden;
}

</style>