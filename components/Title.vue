<template>
  <h2 class="title">{{title}}</h2>
</template>

<script>
  export default {
    props: {
       title: {
         type: String,
         required: true
       }  
    }
  }
</script>

<style>
  .title {
    font-family: Open Sans, Arial, serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 20px;
  }
</style>