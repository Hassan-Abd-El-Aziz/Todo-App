<template>
  <div class="show-todos">
    <h1>Show Todos</h1>
    <table style="width: 100%" v-if="todosList.length">
      <thead>
        <tr>
          <th>Text</th>
          <th>From</th>
          <th>To</th>
          <th>createdAt</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(todo, index) in todosList"
          :key="todo.id"
          :style="`${
            todo.isCompleted
              ? 'background: lightgreen'
              : 'background: transparent'
          }`"
        >
          <td>{{ todo.text }}</td>
          <td>{{ todo.from }}</td>
          <td>{{ todo.to }}</td>
          <!-- formate Date-->
          <td>{{ new Date(todo.createdAt).toLocaleDateString() }}</td>
          <td>
            <div>
              <button class="completed" @click="markCompleted(todo)">
                {{ todo.isCompleted ? "Incompleted" : "Completed" }}
              </button>
              <button @click="deleteTodo(index)" class="delete">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <h1 v-else style="line-height: 15">No Todos To Show</h1>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
//Data
const todosList = ref([]);

//methods
const updateTodos = () => {
  if (localStorage.getItem("Todos")) {
    todosList.value = JSON.parse(localStorage.getItem("Todos"));
  }
};
//Delete
const deleteTodo = (index) => {
  todosList.value.splice(index, 1);
  addToLocalSt();
};
// Set To Local Storage
const addToLocalSt = () => {
  localStorage.setItem("Todos", JSON.stringify(todosList.value));
};

//Mark As Completed
const markCompleted = (todo) => {
  todo.isCompleted = !todo.isCompleted;
  // update data in local storage
  addToLocalSt();
};
onMounted(() => {
  updateTodos();
});
</script>

<style scoped lang="scss">
table {
  tr,
  td,
  th {
    border: 1px solid green;
    padding: 5px;
  }
  td {
    button {
      background: green;
      color: white;
      font-size: 15px;
      padding: 5px 10px;
      border: 1px solid green;
      border-radius: 7px;
      &.delete {
        background: indianred;
        border: 1px solid indianred;
        margin-left: 10px;
        margin-top: 5px;
      }
    }
  }
}
</style>
