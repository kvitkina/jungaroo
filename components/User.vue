<template>
  <div class="user">
    <img class="user__image" src="@/assets/images/oval.png" />
    <h3 class="user__name">Leonetta Lloyd</h3>
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.user {
  display: flex;
  align-items: center;
}
.user__image {
  margin-right: 16px;
}
.user__name {
  margin: 0;
}
</style>