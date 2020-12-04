<template>
  <form class="form-n-task">
    <input
      type="text"
      class="form-n-task__item form-n-task__item_type_name-task"
      v-model="nameTask"
      placeholder="Name"
    />
    <input
      type="text"
      class="form-n-task__item form-n-task__item_type_description-task"
      v-model="descriptionTask"
      placeholder="Description"
    />
    <input
      type="date"
      class="form-n-task__item form-n-task__item_type_date-task"
      placeholder="Date"
    />
    <input
      type="text"
      class="form-n-task__item form-n-task__item_type_creator-task"
      v-model="creatorTask"
      placeholder="Author"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      nameTask: "",
      descriptionTask: "",
      creatorTask: "",
    };
  },
};
</script>

<style scoped>
.form-n-task {
  display: grid;
  grid-row: 1fr 1fr 1fr;
  grid-column: 1fr 1fr;
  grid-gap: 10px;
}
.form-n-task__item {
  min-height: 60px;
  border: 0;
  border-bottom: 1px solid #000;
}
.form-n-task__item:focus {
  outline: 0;
}

.form-n-task__item_type_name-task {
  grid-row: 1;
  grid-column: 1/3;
}
.form-n-task__item_type_description-task {
  grid-row: 2;
  grid-column: 1/3;
}
.form-n-task__item_type_date-task {
  grid-row: 3;
  grid-column: 1;
}
.form-n-task__item_type_creator-task {
  grid-row: 3;
  grid-column: 2;
}
</style> 