<template>
  <section class="column">
    <Title></Title>
    <div class="column__task">
      <slot></slot>
    </div>
  </section>
</template>

<script>
import Title from "@/components/Title.vue";

export default {
  components: {
    Title: Title,
  },
};
</script>

<style scoped>
.column {
  margin-right: 25px;
}

.column__task {
  width: 340px;
  max-height: 600px;
  background: #c4c4c4;
  padding: 10px 18px 12px 10px;
  overflow: scroll;
  overflow-x: hidden;
}
</style>
