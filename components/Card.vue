<template>
  <div class="card">
    <h3 class="card__title">Nulla volutpat aliquam velit</h3>
    <p
      class="card__subtitle"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..</p>
    <div class="card__info">
      <button type="button" class="card__user">OZ</button>
      <p class="card__date">21.01.2020</p>
    </div>
  </div>
</template>

<script>
</script>

<style>
.card {
  max-width: 310px;
  padding: 16px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.227355);
  border-radius: 2px;
  margin-bottom: 10px;
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

.card__user {
  border: 0;
  padding: 0;
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

 