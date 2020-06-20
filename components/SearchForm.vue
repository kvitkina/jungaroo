<template>
  <div class="searchform">
    <button type="button" class="searchform__button">
      <img class="searchform__image" src="@/assets/images/shape.svg" />
    </button>
    <form action class="searchform__form" name="search-form">
      <fieldset class="searchform__search">
        <input type="text" class="searchform__item" name="search-item" placeholder="Search for .." />
      </fieldset>
    </form>
  </div>
</template>

<script>
import HeaderButton from "@/components/HeaderButton.vue";

export default {
  components: {
    HeaderButton: HeaderButton
  }
};
</script>

<style scoped>
.searchform {
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.searchform__image {
}

.searchform__form {
  margin-left: 16px;
}

.searchform__search {
  outline: none;
  border: 0;
  display: flex;
  align-items: center;
  padding: 0;
}

.searchform__item {
  outline: none;
  border: 0;
  padding: 0;
}

.searchform__item::placeholder {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
}

.searchform__button {
  outline: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  background: transparent;
}
</style>