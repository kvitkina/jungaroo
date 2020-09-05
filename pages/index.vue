<template>
  <main class="page">
    <Columns>
      <Column>
        <Card
          title="Nulla volutpat aliquam velit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar .."
        ></Card>
        <Card
          title="Nulla volutpat aliquam velit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar .."
        ></Card>
        <Card
          title="Nulla volutpat aliquam velit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar .."
        ></Card>
        <Card
          title="Nulla volutpat aliquam velit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar .."
        ></Card>
      </Column>
      <Column>
        <Card
          title="Nulla volutpat aliquam velit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar .."
        ></Card>
        <Card
          title="Nulla volutpat aliquam velit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar .."
        ></Card>
        <Card
          title="Nulla volutpat aliquam velit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar .."
        ></Card>
        <Card
          title="Nulla volutpat aliquam velit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar .."
        ></Card>
      </Column>
      <Column>
        <Card
          title="Nulla volutpat aliquam velit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar .."
        ></Card>
        <Card
          title="Nulla volutpat aliquam velit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar .."
        ></Card>
        <Card
          title="Nulla volutpat aliquam velit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar .."
        ></Card>
        <Card
          title="Nulla volutpat aliquam velit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar .."
        ></Card>
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
    Card: Card,
  },
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