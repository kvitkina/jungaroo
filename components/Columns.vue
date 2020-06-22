<template>
  <div class="columns">
    <div class="column__task">
      <div class="column__scroll"></div>
    </div>
    <div class="column__task">
      <div class="column__scroll"></div>
    </div>
    <div class="column__task">
      <div class="column__scroll"></div>
    </div>
  </div>
</template>

<script></script>

<style>
.columns {
  display: flex;
  margin: 87px auto 80px;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 20px;
}

.column__scroll {
  width: 9px;
  height: 65px;
  background: #818181;
  border-radius: 5px;
  margin: 12px 5px 0 0;
}

.column__task {
  width: 340px;
  height: 536px;
  background: #c4c4c4;
  margin-right: 12px;
}

.column__task:nth-child(3) {
  margin-right: 0;
}
</style>
