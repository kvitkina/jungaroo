<template>
  <main class="page">
    <Columns>
      <div class="column">
        <Title title="Backlog"/>
        <Column>
          <Card v-for='card in cardsStatus.backlog' :key='card.id' :card='card'/>
        </Column>
      </div>
      <div class="column">
        <Title title="In Progress"/>
        <Column>
          <Card v-for='card in cardsStatus.inProgress' :key='card.id' :card='card'/>
        </Column>
      </div>
      <div class="column">
        <Title title="Done"/>
        <Column>
          <Card v-for='card in cardsStatus.done' :key='card.id' :card='card'/>
        </Column>
      </div>
    </Columns>
  </main>
</template>

<script>
import Columns from "@/components/Columns.vue";
import Column from "@/components/Column.vue";
import Card from "@/components/Card.vue";
import Title from "@/components/Title.vue";

export default {
  layout: "jungarooMain",
  components: {
    Columns,
    Column,
    Card,
    Title,
  },
  computed: {
    cardsStatus () {
      return this.$store.state.cards.items.reduce((sum, item) => {
        sum[item.status] = sum[item.status].concat(item)
        return sum
      }, {
        'backlog': [],
        'inProgress': [],
        'done': [],
      })
    }
  },
  methods: {
    addCard () {
      this.$store.commit('cards/add', {
        title: '',
        text: '',
        issuer: '',
        dueDate: '',
      })
    },
    deleteCard (id) {
      this.$store.commit('cards/remove', { id })
    },
    toggleCardStatus (id, status) {
      this.$store.commit('cards/toggleStatus', { id })
    }
  }
};
</script>

<style scoped>
.page {
  min-width: 1020px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.column {
  display: flex;
  flex-direction: column;
}
</style>
