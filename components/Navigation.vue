<template>
  <nav class="navigation">
    <ul class="navigation__items">
      <li class="navigation__item">
        <Button>Add new</Button>
      </li>
    </ul>
  </nav>
</template>

<script>
import Button from "@/components/HeaderButton.vue";

export default {
  components: {
    Button: Button
  }
};
</script>

<style scoped>
.navigation {
}
.navigation__items {
  list-style: none;
  display: flex;
}
.navigation__item {
}
</style>