<template>
  <nav class="my-nav">
    <div class="links">
      <ul>
        <li v-for="route in router.options.routes" :key="route.name">
          <router-link :to="{ name: route.name }">{{
            route.meta.title
          }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
console.log(router);
</script>

<style scoped lang="scss">
ul {
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 30px;
  list-style: none;
  padding: 10px 0;
  background: green;
  a {
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    &.router-link-active {
      text-decoration: underline;
    }
  }
}
</style>
