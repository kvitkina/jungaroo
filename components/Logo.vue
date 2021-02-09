<template>
  <div class="logo">
    <nuxt-link exact to="/" class="logo__link">
      <img class="logo__image" src="@/assets/images/logo.svg" />
    </nuxt-link>
  </div>
</template>

<script></script>

<style scoped>
.logo {
}
.logo__link {
}
.logo__image {
  transition: ease-in 0.2s transform;
}
.logo__image:hover {
  transform: rotate(-260deg);
}
</style>