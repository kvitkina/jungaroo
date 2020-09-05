<template>
  <div class="search-form">
    <button type="button" class="search-form__button">
      <img class="search-form__image" src="@/assets/images/shape.svg" />
    </button>
    <form action class="search-form__form" name="search-form">
      <fieldset class="search-form__search">
        <input type="text" class="search-form__item" name="search-item" placeholder="Search for .." />
      </fieldset>
    </form>
  </div>
</template>

<script>
import HeaderButton from "@/components/HeaderButton.vue";

export default {
  components: {
    HeaderButton
  }
};
</script>

<style scoped>
.search-form {
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.search-form__image {
}

.search-form__form {
  margin-left: 16px;
}

.search-form__search {
  outline: none;
  border: 0;
  display: flex;
  align-items: center;
  padding: 0;
}

.search-form__item {
  outline: none;
  border: 0;
  padding: 0;
}

.search-form__item::placeholder {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
}

.search-form__button {
  outline: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  background: transparent;
}
</style>