<template>
  <main class="page">
    <Columns>
      <Column>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Column>
      <Column>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Column>
      <Column>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Column>
    </Columns>
  </main>
</template>

<script>
import Columns from "@/components/Columns.vue";
import Column from "@/components/Column.vue";
import Card from "@/components/Card.vue";

export default {
  layout: "jungarooMain",
  components: {
    Columns: Columns,
    Column: Column,
    Card: Card
  }
};
</script>

<style>
.page {
  min-width: 1020px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>