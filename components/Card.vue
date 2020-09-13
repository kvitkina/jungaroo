<template>
  <div class="card">
    <h3 class="card__title">{{title}}</h3>
    <p class="card__subtitle">{{subtitle}}</p>
    <div class="card__info">
      <nuxt-link to="/" class="card__user-link">{{userName}}</nuxt-link>
      <p class="card__date">{{makedDate}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    makedDate: {
      type: String,
    },
  },
};
</script>

<style>
.card {
  max-width: 310px;
  padding: 16px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.227355);
  border-radius: 2px;
  margin-bottom: 20px;
}

.card:last-child {
  margin-bottom: 0;
}

.card__title {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 0 0 12px 0;
  font-family: Open Sans, Arial, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #646678;
}

.card__subtitle {
  margin: 0 0 16px 0;
  font-family: Open Sans, Arial, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: rgba(100, 102, 120, 0.54);
}

.card__info {
  display: flex;
  align-items: center;
}

.card__user-link {
  border: 0;
  padding: 7px 0 0 0;
  margin-right: 12px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: tomato;
  font-family: Lato, Arial, serif;
  font-style: normal;
  font-weight: 900;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  text-decoration: none;
  color: #fff;
}

.card__date {
  font-family: Open Sans, Arial, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  color: #4dd86e;
}
</style>
