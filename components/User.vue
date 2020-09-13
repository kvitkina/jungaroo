<template>
  <div class="user">
    <img class="user__image" :src='userImage' />
    <h3 class="user__name">{{userName}}</h3>
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true,
    },
    userImage: {
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