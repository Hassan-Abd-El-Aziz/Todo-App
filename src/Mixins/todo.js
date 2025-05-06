import { ref, onMounted } from "vue";

const todosFunction = () => {
  //Data
  const todosList = ref([]);

  //Methods
  // Set To Local Storage
  const addToLocalSt = () => {
    localStorage.setItem("Todos", JSON.stringify(todosList.value));
  };
  const updateTodos = () => {
    if (localStorage.getItem("Todos")) {
      todosList.value = JSON.parse(localStorage.getItem("Todos"));
    }
  };
  onMounted(() => {
    updateTodos();
  });
  return { todosList, addToLocalSt };
};

export default todosFunction;
