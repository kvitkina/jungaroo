<template>
  <main class="page">
    <Columns>
      <Column>
        <Card
          id="1"
          userName="OZ"
          makedDate="21.04.2015"
          title="Nulla volutpat aliquam velit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar .."
        ></Card>
        <Card
          id="2"
          userName="OZ"
          makedDate="21.04.2015"
          title="Nulla volutpat aliquam velit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar .."
        ></Card>
        <Card
          id="3"
          userName="OZ"
          makedDate="21.04.2015"
          title="Nulla volutpat aliquam velit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar .."
        ></Card>
        <Card
          id="4"
          userName="OZ"
          makedDate="21.04.2015"
          title="Nulla volutpat aliquam velit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar .."
        ></Card>
      </Column>
      <Column>
        <Card
          id="5"
          userName="OZ"
          makedDate="21.04.2015"
          title="Nulla volutpat aliquam velit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar .."
        ></Card>
        <Card
          id="6"
          userName="OZ"
          makedDate="21.04.2015"
          title="Nulla volutpat aliquam velit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar .."
        ></Card>
        <Card
          id="7"
          userName="OZ"
          makedDate="21.04.2015"
          title="Nulla volutpat aliquam velit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar .."
        ></Card>
        <Card
          id="8"
          userName="OZ"
          makedDate="21.04.2015"
          title="Nulla volutpat aliquam velit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar .."
        ></Card>
      </Column>
      <Column>
        <Card
          id="9"
          userName="OZ"
          makedDate="21.04.2015"
          title="Nulla volutpat aliquam velit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar .."
        ></Card>
        <Card
          id="10"
          userName="OZ"
          makedDate="21.04.2015"
          title="Nulla volutpat aliquam velit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar .."
        ></Card>
        <Card
          id="11"
          userName="OZ"
          makedDate="21.04.2015"
          title="Nulla volutpat aliquam velit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar .."
        ></Card>
        <Card
          id="12"
          userName="OZ"
          makedDate="21.04.2015"
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
