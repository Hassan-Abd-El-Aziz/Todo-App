<template>
  <div class="home-page">
    <h1>Add New Todos</h1>
    <form action="" @submit.prevent="addData">
      <input
        type="text"
        v-model="todoObj.text"
        placeholder="Enter Your Todo"
        required
      />
      <br />
      <input type="date" v-model="todoObj.from" placeholder="From" required />
      <input type="date" placeholder="To" v-model="todoObj.to" required />
      <br />
      <input type="submit" value="Add" />
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
// import mixins file
import todosMixin from "@/Mixins/todo";
const { todosList, addToLocalSt } = todosMixin();

//Data
const todoObj = ref({
  id: "",
  text: "",
  from: "",
  to: "",
  createdAt: "",
  isCompleted: false,
});
//Methods

//Add Todo
const addData = () => {
  todoObj.value.id = todosList.value.length + 1;
  todoObj.value.createdAt = new Date(); // Add Date now
  todosList.value.push(todoObj.value);

  addToLocalSt();

  alert("Todo Was Added Successfully");
  todoObj.value = {
    id: "",
    text: "",
    from: "",
    to: "",
    createdAt: "",
    isCompleted: false,
  };
};
</script>
<style scoped lang="scss">
form {
  input[type="text"] {
    width: 50%;
    padding: 10px;
    font-size: 15px;
    outline: none;
    border: 1px solid green;
    color: green;
    font-weight: bold;
    border-radius: 9px;
  }
  input[type="submit"] {
    padding: 10px 20px;
    font-size: 15px;
    background: green;
    color: white;
    font-weight: bold;
    border: 1px solid green;
    border-radius: 7px;
    margin-left: 20px;
  }
  input[type="date"] {
    padding: 10px;
    font-size: 12px;
    font-weight: bold;
    border: 1px solid green;
    border-radius: 7px;
    margin: 10px;
  }
}
</style>
